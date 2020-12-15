import React, {useContext, useEffect, useState} from 'react';
import api from 'utils/api';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, TextField, NativeSelect, InputLabel, FormControl, Button } from '@material-ui/core';
import Navbar2 from '../components/Navbar2';
import Image from '../img/interior.jpg';
import Cpf from '../utils/Cpf';
import BasicDatePicker from '../utils/BasicDatePicker';
import Footer from '../components/Footer';
import { UsuarioContext } from '../context/UsuarioContext';
import { AuthContext } from '../context/AuthContext';

const useStyles = makeStyles((theme) => ({     
  form: {                        
    display: "flex",
    flexGrow: 1,
    padding: theme.spacing(2)
},
selectEmpty: {
    marginTop: theme.spacing(2),
  },
   formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  
}));

export default function Formulario() {  
    const classes = useStyles();

    const {userCredentials} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [postUsuario, setPostUsuario] = useContext(UsuarioContext);
    const [rua, setRua] = useState('');
    const [cidade, setCidade] = useState({
        nome: '',
        uf_id: {
            id: ''
        }
    });
    const [bairro, setBairro] = useState('');
    const [getUfs, setGetUfs] = useState([]);
    const [endereco, setEndereco] = useState({
        cidade_id: {
            id: ''
        },
        bairro_id: {
            id: ''
        },
        rua_id: {
            id: ''
        },
        cep: ''


    })
    
    const handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        setPostUsuario({
            ...postUsuario,
            [name]: event.target.value
        });
    };

    const handleUfChange = (event) => {
        event.preventDefault();
        const name = event.target.name
        setCidade({
            ...cidade,
            [name]: {
                id: event.target.value
        }});
    }

    const handleRuaChange = (event) => {
        event.preventDefault();
        const name = event.target.name
        setRua({
            ...rua,
            [name]: event.target.value
        });
    }

    const handleCidadeChange = (event) => {
        event.preventDefault();
        const name = event.target.name
        setCidade({
            ...cidade,
            [name]: event.target.value
        });
    }

    const handleBairroChange = (event) => {
        event.preventDefault();
        const name = event.target.name
        setBairro({
            ...bairro,
            [name]: event.target.value
        });
    }

    const handleCepChange = (event) => {
        event.preventDefault();
        const name = event.target.name
        setEndereco({
            ...endereco,
            [name]: event.target.value
        });
    }

    const handleSubmitEndereco = (event) => {
        event.preventDefault();
        handleEndereco();
        console.log(endereco)
        api.post('/enderecos', endereco).then((res) => {
            console.log(res.data)
        })
    }

    async function handleEndereco() {
        await axios.all([
            api.post('/bairros', bairro),
            api.post('/ruas', rua),
            api.post('/cidades', cidade)
        ])
        .then(axios.spread((res1, res2, res3) => {
            setEndereco({
                ...endereco,
                bairro_id: {id: res1.data.id},
                rua_id: {id: res2.data.id},
                cidade_id: {id: res3.data.id},
            })
        }));
    }

    const apiGetRequest = () => {
        api.defaults.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

        api.get('/ufs').then((res) =>{
            setGetUfs(res.data);
        });

        api.get('usuarios/currentUser').then((res) => {
            const {data} = res
            api.get(`/usuarios/userEmail/${data}`).then((res1) => {
                console.log(res1)
                setPostUsuario({
                    nome: res1.data.nome,
                    rg: res1.data.rg,
                    cpf: res1.data.cpf,
                    telefone: res1.data.telefone,
                    sexo: res1.data.sexo
                })
            })
        });
        
        
    }

    useEffect(() => {
         apiGetRequest();
    }, []);
    
    return (
        
        <>
            <Navbar2 />
            <CssBaseline />
            <Container maxWidth="xl" style={{backgroundImage:  `url(${Image})`, backgroundRepeat: 'no-repeat'}}>
                <Container maxWidth="md" style={{ background:'#fafafa', maxWidth:"60%"}}>
                    <Typography variant="h4" style={{ color:"black", textAlign:"start", marginLeft:"-2rem", textTransform:"uppercase", marginBottom: "1rem", paddingTop: "4rem"}}>Dados Pessoais</Typography>
                    <form>
                    <div className={classes.form}>
                        <Grid container spacing={3}>
                            <Grid item md={4}>
                                <TextField
                                    placeholder="Nome"
                                    margin="dense"
                                    size="medium"
                                    name="nome"
                                    onChange={handleChange}
                                    style={{ width: "13rem" }}
                                    value={postUsuario.nome}
                                />
                            </Grid >
                            <Grid item md={4}>
                                <TextField
                                    placeholder="RG"
                                    margin="dense"
                                    size="medium"
                                    name="rg"
                                    onChange={handleChange}
                                    style={{ width: "13rem" }}
                                    value={postUsuario.rg}
                                />
                            </Grid >
                            <Grid item sm={4}>
                                <Cpf />
                            </Grid >
                            <Grid item md={4}>
                                <BasicDatePicker />
                            </Grid >
                            <Grid item md={4}>
                            <TextField
                                    placeholder="Celular"                               
                                    size="medium"
                                    style={{ width: "13rem", paddingTop: '0.9rem' }}
                                    name="telefone"  
                                    onChange={handleChange}                                 
                                    type="phone"
                                    value={postUsuario.telefone}
                                />
                            </Grid>                     
                            <Grid item md={4}>
                                <FormControl>
                                    <InputLabel>Sexo</InputLabel>
                                    <NativeSelect                               
                                    size="medium"                                  
                                    style={{ width: "13rem", marginTop: '16px' }}
                                    name="sexo"
                                    onChange={handleChange}
                                    inputProps={{
                                        name: 'sexo',
                                        id: 'uncontrolled-native',
                                    }}
                                    >
                                    <option aria-label="None" value="" />
                                    <option value="M">M</option>
                                    <option value="F">F</option>                               
                                    </NativeSelect>               
                                </FormControl>
                            </Grid >
                            <Grid item md={4}>
                                <TextField
                                    placeholder="Senha"                              
                                    size="medium"
                                    style={{ width: "13rem", marginTop: '5px' }}
                                    name="senha"  
                                    onChange={handleChange}                                 
                                    type="password" 
                                />
                            </Grid> 
                            <Grid item md={4}>
                                <TextField
                                    placeholder="E-mail"
                                    type="email"
                                    name="email"
                                    margin="dense"
                                    size="medium"
                                    style={{ width: "13rem" }}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item md={4}>
                                <TextField
                                    placeholder="Confirmar e-mail"
                                    type="email"
                                    margin="dense"
                                    size="medium"
                                    style={{ width: "13rem" }}
                                />
                            </Grid>     
                            <Grid item md={4}>
                                <Button type="submit" variant="contained" color="inherit" size="large">Salvar Dados</Button>{' '} 
                            </Grid>                                     
                        </Grid >             
                    </div>
                    </form>
                    <Grid item md={4}>
                        <Typography variant="h5" style={{ color: "black", textAlign: "justify", textTransform: "uppercase", marginBottom: "1rem", paddingTop: "2rem", margin: "1rem" }}>Endereço</Typography>
                    </Grid >
                    <form onSubmit={handleSubmitEndereco}>
                    <div className={classes.form}>
                        <Grid container spacing={3}>
                            <Grid item md={4} >
                               <TextField
                                    label="Cep"
                                    placeholder="Cep"
                                    margin="dense"
                                    size="medium"
                                    style={{ width: "9rem" }}
                                    name="cep"
                                    onChange={handleCepChange}
                               />
                            </Grid >
                            <Grid item md={4}></Grid>                        
                            <Grid item md={4}></Grid>                       
                            <Grid item md={6}>
                                <TextField
                                    label="Rua"
                                    placeholder="Rua"
                                    margin="dense"
                                    size="medium"
                                    style={{ width: "18rem" }}
                                    name="nome"
                                    inputProps={{style: {textTransform: 'uppercase'}}}
                                    onChange={handleRuaChange}
                                /> 
                            </Grid>
                            <Grid item md={3}>
                                <TextField
                                    label="Numero "
                                    placeholder="Numero"
                                    type="number"
                                    margin="dense"
                                    size="medium"
                                    style={{ width: "9rem" }}
                                />
                            </Grid>
                            <Grid item md={3}>
                                <TextField
                                    label="Complemento "
                                    placeholder="Complemento"
                                    margin="dense"
                                    size="medium"
                                    style={{ width: "9rem" }}
                                    inputProps={{style: {textTransform: 'uppercase'}}}
                                />
                            </Grid>
                            <Grid item md={4}>
                                <TextField
                                    label="Cidade"
                                    placeholder="Cidade"
                                    margin="dense"
                                    size="medium"
                                    style={{ width: "12rem" }}                                    
                                    name="nome"
                                    inputProps={{style: {textTransform: 'uppercase'}}}
                                    onChange={handleCidadeChange}
                                />
                            </Grid>
                            <Grid item md={4}>
                                <TextField
                                    label="Bairro"
                                    placeholder="Bairro"
                                    margin="dense"
                                    size="medium"
                                    style={{ width: "12rem" }}                                    
                                    name="nome"
                                    inputProps={{style: {textTransform: 'uppercase'}}}
                                    onChange={handleBairroChange}
                                />
                            </Grid>
                            <Grid item md={4}>
                                <FormControl>
                                <InputLabel>Estado</InputLabel>
                                <NativeSelect
                                    size="medium"                                  
                                    style={{ width: "13rem", paddingTop: "0.3rem"}}
                                    onChange={handleUfChange}
                                    name="uf_id"
                                >
                                    <option aria-label="None" value="" />
                                    {getUfs.map(uf => (
                                        <option key={uf.id} value={uf.id}>{uf.nome}</option>
                                    ))}
                                </NativeSelect>
                                </FormControl>
                            </Grid>                       
                            <Grid item md={4}>
                                <Button type="submit" variant="contained" color="inherit" size="large">Salvar Endereço</Button>{' '} 
                            </Grid>                        
                            <Grid item md={4}></Grid>                        
                            <Grid item md={4}></Grid>                       
                            <Grid item md={4}></Grid>                       
                            <Grid item md={4}></Grid>                        
                            <Grid item md={4}></Grid>                       
                            <Grid item md={4}></Grid>                       
                        </Grid >
                    </div>
                    </form>                      
                </Container>             
            </Container>
            <Footer />
        </>
        
    );
    
}


