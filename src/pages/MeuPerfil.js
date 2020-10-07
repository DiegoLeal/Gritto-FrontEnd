import React, {useContext, useEffect, useState} from 'react';
import api from '../utils/api';
import axios from 'axios';
import '../style/MeuPerfil.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, TextField, NativeSelect, InputLabel, FormControl, Button } from '@material-ui/core';
import Navbar2 from '../components/Navbar2';
import Image from '../img/interior.jpg';
import Cpf from '../utils/Cpf';
import BasicDatePicker from '../utils/BasicDatePicker';
import Footer from '../components/Footer';
import { UsuarioContext } from '../context/UsuarioContext';

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
    const [state, setState] = useState({
        age: '',
        name: 'age',         
    });
    const [postUsuario, setPostUsuario] = useContext(UsuarioContext)
    const [post, setPost] = useState({
        //bairro_id: '',
        //cidade_id: '',
        //rua_id: '',
        //cep: '',
    })
    
    const handleChange = (event) => {
        const name = event.target.name;
        setState({
        ...state,
        [name]: event.target.value,
        });
        setPostUsuario({
            ...postUsuario,
            [name]: event.target.value
        })
       
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        apiPostRequest();
    }

    const[ruas, setRuas] = useState([]);
    const[bairros, setBairros] = useState([]);
    const[cidades, setCidades] = useState([]);
    const[ufs, setUfs] = useState([]);

    const apiGetRequest = () => {
        const getRua = api.get('rua');
        const getBairro = api.get('bairro');
        const getCidade = api.get('cidade');
        const getUf = api.get('uf');

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
        api.post('usuario', post)
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
                                <Cpf name='cpf'/>
                            </Grid >
                            <Grid item md={4}>
                                <BasicDatePicker />
                            </Grid >
                            <Grid item md={4}>
                                <TextField
                                    label="Telefone"
                                    placeholder="(45) 3333-3333"                               
                                    size="medium"
                                    name="telefone"
                                    onChange={handleChange}
                                    style={{ width: "13rem" }}                               
                                 />
                            </Grid>
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
                                    <InputLabel>Estado Civil</InputLabel>
                                    <NativeSelect
                                        size="medium"                                  
                                        style={{ width: "13rem" }}
                                        value={state.age}
                                        onChange={handleChange}
                                        inputProps={{
                                            name: 'age',
                                            id: 'age-native-helper',
                                        }}
                                    >
                                        <option aria-label="None" value="" />
                                        <option value={10}>Solteiro(a)</option>
                                        <option value={20}>Casado(a)</option>
                                        <option value={30}>Divorciado</option>
                                        <option value={40}>Separado(a)</option>
                                        <option value={50}>Viuvo(a)</option>
                                    </NativeSelect>
                                </FormControl>
                            </Grid>                       
                            <Grid item md={4}>
                                <FormControl>
                                    <InputLabel>Sexo</InputLabel>
                                    <NativeSelect                               
                                    size="medium"                                  
                                    style={{ width: "13rem" }}
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
                                    onChange={handleChange}
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
                                        style={{ width: "13rem" }}
                                        onChangeCapture={handleChange}
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
                                        onChangeCapture={handleChange}
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
                                        onChangeCapture={handleChange}
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
                                    >
                                        <option aria-label="None" value="" />
                                        {ufs.map(uf => (
                                            <option value={uf.id}>{uf.nome}</option>
                                        ))}
                                    </NativeSelect>
                                </FormControl>
                            </Grid>
                            <Grid item md={4}>
                                <TextField
                                    label="E-mail"
                                    placeholder="E-mail"
                                    type="email"
                                    margin="dense"
                                    size="medium"
                                    style={{ width: "13rem" }}
                                />
                            </Grid>
                            <Grid item md={4}>
                                <TextField
                                    label="Confirmar e-mil"
                                    placeholder="Confirmar e-mil"
                                    type="email"
                                    margin="dense"
                                    size="medium"
                                    style={{ width: "13rem" }}
                                />
                            </Grid>
                            <Grid item md={4}></Grid>                        
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


