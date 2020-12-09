import React, {useContext, useEffect, useState} from 'react';
import api from 'utils/api';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, TextField, NativeSelect, InputLabel, FormControl, Button } from '@material-ui/core';
import Navbar2 from 'components/Navbar2';
import Image from 'img/interior.jpg';
import Cpf from 'utils/Cpf';
import BasicDatePicker from 'utils/BasicDatePicker';
import Footer from 'components/Footer';
import { UsuarioContext } from 'context/UsuarioContext';
import { AuthContext } from 'context/AuthContext';

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

    const [postUsuario, setPostUsuario] = useContext(UsuarioContext);
    const [post, setPost] = useState('');
    const {token} = useContext(AuthContext);
    
    const handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        setPostUsuario({
            ...postUsuario,
            [name]: event.target.value
        });
    };

    const handleEnderecoChange = (event) => {
        event.preventDefault();
        const name = event.target.name
        setPost({
            ...post,
            [name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        apiPostRequest();
    }

    const[ruas, setRuas] = useState([]);
    const[bairros, setBairros] = useState([]);
    const[cidades, setCidades] = useState([]);
    const[ufs, setUfs] = useState([]);

    const apiGetRequest = () => {
        api.defaults.headers.Authorization = `Bearer ${token.data}`;
        
        const getRua = api.get('ruas');
        const getBairro = api.get('bairros');
        const getCidade = api.get('cidades');
        const getUf = api.get('ufs');

        axios.all([getRua, getBairro, getCidade, getUf])
        .then(
            axios.spread((...allData) => {
                setRuas(allData[0].data);
                setBairros(allData[1].data);
                setCidades(allData[2].data);
                setUfs(allData[3].data);
            })
        )
    }

    const apiPostRequest = () => {
        api.post('usuario', postUsuario)
            .then(function (response) {
                console.log("Post Request")
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            
    }

    useEffect(() => {
         apiGetRequest();
    }, []);
    
    return (
        
        <>
            <Navbar2 />
            <CssBaseline />
            <form onSubmit={handleSubmit}>
            <Container maxWidth="xl" style={{backgroundImage:  `url(${Image})`, backgroundRepeat: 'no-repeat'}}>
                <Container maxWidth="md" style={{ background:'#fafafa', maxWidth:"60%"}}>
                    <Typography variant="h4" style={{ color:"black", textAlign:"start", marginLeft:"-2rem", textTransform:"uppercase", marginBottom: "1rem", paddingTop: "4rem"}}>Dados Pessoais</Typography>
                    <div className={classes.form}>
                        <Grid container spacing={3}>
                            <Grid item md={4}>
                                <TextField
                                    label="Nome "
                                    placeholder="Nome completo"
                                    margin="dense"
                                    size="medium"
                                    name="nome"
                                    onChange={handleChange}
                                    style={{ width: "13rem" }}
                                />
                            </Grid >
                            <Grid item md={4}>
                                <TextField
                                    label="RG"
                                    placeholder="RG"
                                    margin="dense"
                                    size="medium"
                                    name="rg"
                                    onChange={handleChange}
                                    style={{ width: "13rem" }}
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
                                    label="Celular"
                                    placeholder="(45) 99999-9999"                               
                                    size="medium"
                                    style={{ width: "13rem" }}
                                    name="telefone"  
                                    onChange={handleChange}                                 
                                    type="phone" 
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
                                    label="Senha"                              
                                    size="medium"
                                    style={{ width: "13rem", marginTop: '5px' }}
                                    name="senha"  
                                    onChange={handleChange}                                 
                                    type="password" 
                                />
                            </Grid> 
                            <Grid item md={4}>
                                <TextField
                                    label="E-mail"
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
                                    label="Confirmar e-mail"
                                    placeholder="Confirmar e-mail"
                                    type="email"
                                    margin="dense"
                                    size="medium"
                                    style={{ width: "13rem" }}
                                />
                            </Grid>                                         
                        </Grid >              
                    </div>
                    <Grid item md={4}>
                        <Typography variant="h5" style={{ color: "black", textAlign: "justify", textTransform: "uppercase", marginBottom: "1rem", paddingTop: "2rem", margin: "1rem" }}>Endereço</Typography>
                    </Grid >
                    <div className={classes.form}>
                        <Grid container spacing={3}>
                            <Grid item md={4} >
                               <TextField
                                    label="Cep "
                                    placeholder="Cep"
                                    margin="dense"
                                    size="medium"
                                    style={{ width: "9rem" }}
                                    onChange={handleEnderecoChange}
                                    name="cep"
                               />
                            </Grid >
                            <Grid item md={4}></Grid>                        
                            <Grid item md={4}></Grid>                       
                            <Grid item md={6}>
                                <FormControl>
                                    <InputLabel>Endereço</InputLabel>
                                    <NativeSelect
                                        size="medium"                                  
                                        style={{ width: "18rem" }}
                                        onChangeCapture={handleEnderecoChange}
                                        name="rua_id"
                                    >
                                        <option aria-label="None" value="" />
                                        {ruas.map(rua => (
                                            <option key={rua.id} value={rua.id}>{rua.nome}</option>
                                        ))}
                                    </NativeSelect>
                                </FormControl>
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
                                />
                            </Grid>
                            <Grid item md={4}>
                                <FormControl>
                                    <InputLabel>Bairro</InputLabel>
                                    <NativeSelect
                                        size="medium"                                  
                                        style={{ width: "13rem" }}
                                        onChangeCapture={handleEnderecoChange}
                                        name="bairro_id"
                                    >
                                        <option aria-label="None" value="" />
                                        {bairros.map(bairro => (
                                            <option key={bairro.id} value={bairro.id}>{bairro.nome}</option>
                                        ))}
                                    </NativeSelect>
                                </FormControl>
                            </Grid>
                            <Grid item md={4}>
                                <FormControl>
                                    <InputLabel>Cidade</InputLabel>
                                    <NativeSelect
                                        size="medium"                                  
                                        style={{ width: "13rem" }}
                                        onChangeCapture={handleEnderecoChange}
                                        name="cidade_id"
                                    >
                                        <option aria-label="None" value="" />
                                        {cidades.map(cidade => (
                                            <option key={cidade.id} value={cidade.id}>{cidade.nome}</option>
                                        ))}
                                    </NativeSelect>
                                </FormControl>
                            </Grid>
                            <Grid item md={4}>
                                <FormControl>
                                    <InputLabel>Estado</InputLabel>
                                    <NativeSelect
                                        size="medium"                                  
                                        style={{ width: "13rem" }}
                                        onChangeCapture={handleEnderecoChange}
                                        name="uf_id"
                                    >
                                        <option aria-label="None" value="" />
                                        {ufs.map(uf => (
                                            <option key={uf.id} value={uf.id}>{uf.nome}</option>
                                        ))}
                                    </NativeSelect>
                                </FormControl>
                            </Grid>                       
                            <Grid item md={4}>
                            <Button type="submit" variant="contained" color="inherit" size="large">ENVIAR</Button>{' '} 
                                </Grid>                        
                            <Grid item md={4}></Grid>                        
                            <Grid item md={4}></Grid>                       
                            <Grid item md={4}></Grid>                       
                            <Grid item md={4}></Grid>                        
                            <Grid item md={4}></Grid>                       
                            <Grid item md={4}></Grid>                       
                        </Grid >
                    </div>                      
                </Container>             
            </Container>
            </form>
            <Footer />
        </>
        
    );
    
}


