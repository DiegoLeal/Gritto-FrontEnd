import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import PaginaInicial  from 'components/index';
import MeuPerfil from 'pages/MeuPerfil';
import Agenda from '../components/Schedule';
import PageNotFound from 'pages/PageNotFound';
import { ThemeProvider } from '@material-ui/core';
import Navbar from 'components/Navbar';
import { UsuarioProvider } from 'context/UsuarioContext';
import Login from 'pages/Login';
import { AuthProvider } from 'context/AuthContext';
import PrivateRoute from './PrivateRoute';
import Cadastro from 'pages/Cadastro';

export default () => (
  <UsuarioProvider>
    <AuthProvider>
    <ThemeProvider>
      <Router>  
        <Navbar />
        <CssBaseline />
        <Switch>               
          <Route path="/" exact component={PaginaInicial} />            
          <PrivateRoute path="/meuperfil" component={MeuPerfil} />                                  
          <PrivateRoute path="/agenda" component={Agenda} />
          <Route path="/cadastro" component={Cadastro} />    
          <Route path="/login" component={Login} /> 
                  
          <Route path="*" component={PageNotFound} />
        </Switch>  
      </Router>   
    </ThemeProvider>
    </AuthProvider>
  </UsuarioProvider>
                                        
);

