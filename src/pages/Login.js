import React, { useContext } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Container, Grid, Typography, TextField, Button} from '@material-ui/core'
import NavBar2 from '../components/Navbar2';
import Image from '../img/interior.jpg';
import { AuthContext } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';
import api from '../utils/api';

const LOGIN_URL = 'http://localhost:8080/login';

export default function Login() {
    const {token, setToken, setUserCredentials, userCredentials} = useContext(AuthContext);
    const history = useHistory();
;
    function onSubmit(event) {
        event.preventDefault();
        api.post(LOGIN_URL, userCredentials).then((res) => {
            const { data } = res;
            setToken({data});
            history.push('/meuperfil');
        })

    }

    function onCredentialsChange(event) {
        event.preventDefault();
        const {value, name} = event.target;

        setUserCredentials({
            ...userCredentials,
            [name]: value
        })
    }

    return(
        <>
            <NavBar2 />
            <CssBaseline />
            <Container maxWidth="100%" style={{ height: "90vh" ,backgroundImage: `url(${Image})`, backgroundRepeat: 'no-repeat'}}>
                <Container maxWidth="md" style={{height: '90vh' , backgroundColor: '#fafafa', maxWidth: '60%'}}>
                    <Typography variant='h3' style={{textAlign: 'center', color: 'black', paddingTop: '4rem'}}>Login</Typography>
                    <div style={{display: 'flex', flexGrow: '1', padding: '16px', justifyContent: 'center'}}>
                        <form onSubmit={onSubmit}>
                        <Grid container spacing={6} style={{justifyContent: 'center', alignItems: "center", flexDirection: 'column'}}>
                            <Grid item xm={4}>
                                <TextField required
                                    label="Email "
                                    placeholder="Insira um email"
                                    margin="dense"
                                    size="medium"
                                    style={{width: "20rem"}}
                                    name="username"
                                    onChange={onCredentialsChange}
                                />
                            </Grid>
                            <Grid item xm={4}>
                                <TextField required
                                    type="password"
                                    label="Senha "
                                    placeholder="Insira uma senha"
                                    margin="dense"
                                    size="medium"
                                    style={{width: "20rem"}}
                                    name="password"
                                    onChange={onCredentialsChange}
                                />
                            </Grid>
                            <Grid item xm={4}>
                                <Button type="submit" variant="contained" color="primary" style={{width: '300px' ,color: 'white'}}>Login</Button>
                            </Grid>
                        </Grid>
                        </form>
                    </div>
                </Container>
            </Container>
        </>
    )
}
