import React, { useContext } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Container, Grid, Typography, TextField, Button} from '@material-ui/core'
import NavBar2 from '../components/Navbar2';
import Image from '../img/interior.jpg';
import { Link } from 'react-router-dom';
import api from '../utils/api'
import { AuthContext } from '../context/AuthContext';

export default function Cadastro() {
    const {userCredentials, setUserCredentials} = useContext(AuthContext);

    const handleCadastroChange = (event) => {
        event.preventDefault();
        
    }
    const handleSubmitCadastro = () => {
        api.post('/usuarios', )
    }
    return(
        <>
            <NavBar2 />
            <CssBaseline />
            <Container maxWidth="100%" style={{ height: "90vh" ,backgroundImage: `url(${Image})`, backgroundRepeat: 'no-repeat'}}>
                <Container maxWidth="md" style={{height: '90vh' , backgroundColor: '#fafafa', maxWidth: '60%'}}>
                    <Typography variant='h3' style={{textAlign: 'center', color: 'black', paddingTop: '4rem'}}>Cadastre-se</Typography>
                    <form>
                    <div style={{display: 'flex', flexGrow: '1', padding: '16px'}}>
                        <Grid container spacing={3} style={{justifyContent: 'center', alignItems: "center", flexDirection: 'column'}}>
                            <Grid item xm={4}>
                                <TextField required
                                    placeholder="Insira um nome de usuário"
                                    margin="dense"
                                    size="medium"
                                    style={{width: "20rem"}}
                                    name="username"
                                />
                            </Grid>
                            <Grid item xm={4}>
                                <TextField required
                                    type="password"
                                    placeholder="Insira uma senha"
                                    margin="dense"
                                    size="medium"
                                    style={{width: "20rem"}}
                                />
                            </Grid>
                            <Grid item xm={4}>
                                <TextField required
                                    type="password"
                                    placeholder="Digite novamente a senha"
                                    margin="dense"
                                    size="medium"
                                    style={{width: "20rem"}}
                                />
                            </Grid>
                            <Grid item xm={4}>
                                <Link to="/cadastro">
                                    <Button variant="contained" color="primary" style={{width: '300px' ,color: 'white'}}>Cadastre-se</Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                    </form>
                </Container>
            </Container>
        </>
    )
}
