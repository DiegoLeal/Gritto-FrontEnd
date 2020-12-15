import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../style/App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import PaginaInicial  from '../components/index';
import MeuPerfil from '../pages/MeuPerfil';
import Historicos from '../pages/Historicos';
import Agenda from '../pages/Agenda';
import PageNotFound from '../pages/PageNotFound';
import { ThemeProvider } from '@material-ui/core';
import { UsuarioProvider } from '../context/UsuarioContext';
import Login from '../pages/Login';
import { AuthProvider } from '../context/AuthContext';
import PrivateRoute from './PrivateRoute';
import Cadastro from '../pages/Cadastro';
import Navbar from '../components/Navbar';

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
          <PrivateRoute path="/historicos" component={Historicos} />                                   
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

