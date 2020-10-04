import React, {useEffect, useState} from 'react';
import api from '../utils/api';
import '../style/MeuPerfil.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, TextField, NativeSelect, InputLabel, FormControl, Button } from '@material-ui/core';
import Navbar2 from '../components/Navbar2';
import Image from '../img/interior.jpg';
import Cpf from '../utils/Cpf';
import BasicDatePicker from '../utils/BasicDatePicker';
import Footer from '../components/Footer';

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
        endereco: [{
            cep: '',
            rua: 0,
            bairro: 0,
            cidade: 0,
            uf: 0,
        }]        
    });    

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
        ...state,
        [name]: event.target.value,
        });
    };

    const[enderecos, setEnderecos] = useState([]);
    useEffect(() => {
        api.get('endereco')
            .then(function (response) {
                setEnderecos(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    });
    
    return (
        <>
            <Navbar2 />
            <CssBaseline />
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
                                    style={{ width: "13rem" }}
                                />
                            </Grid >
                            <Grid item md={4}>
                                <TextField
                                    label="RG"
                                    placeholder="RG"
                                    margin="dense"
                                    size="medium"
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
                                    label="Telefone"
                                    placeholder="(45) 3333-3333"                               
                                    size="medium"
                                    style={{ width: "13rem" }}                               
                                 />
                            </Grid>
                            <Grid item md={4}>
                                <TextField
                                    label="Celular"
                                    placeholder="(45) 99999-9999"                               
                                    size="medium"
                                    style={{ width: "13rem" }}
                                    name="phone"                                   
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
                                    inputProps={{
                                        name: 'name',
                                        id: 'uncontrolled-native',
                                    }}
                                    >
                                    <option aria-label="None" value="" />
                                    <option value={10}>Masculino</option>
                                    <option value={20}>Feminino</option>                               
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
                               />
                            </Grid >
                            <Grid item md={4}></Grid>                        
                            <Grid item md={4}></Grid>                       
                            <Grid item md={6}>
                                <TextField
                                    label="Endereço "
                                    placeholder="Endereço"
                                    margin="dense"
                                    size="medium"
                                    style={{ width: "20rem" }}
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
                                />
                            </Grid>
                            <Grid item md={4}>
                                <TextField
                                    label="Bairro "
                                    placeholder="Bairro"
                                    margin="dense"
                                    size="medium"
                                    style={{ width: "13rem" }}
                                />
                            </Grid>
                            <Grid item md={4}>
                                <TextField
                                    label="Cidade"
                                    placeholder="Cidade"
                                    margin="dense"
                                    size="medium"
                                    style={{ width: "13rem" }}
                                />
                            </Grid>
                            <Grid item md={4}>
                                <TextField
                                    label="Estado"
                                    placeholder="Estado"
                                    margin="dense"
                                    size="medium"
                                    style={{ width: "13rem" }}
                                />
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
                            <Button variant="contained" color="inherit" size="large">ENVIAR</Button>{' '} 
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
            <Footer />
        </>
    );
    
}


