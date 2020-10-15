import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import PaginaInicial  from 'components/index';
import MeuPerfil from 'pages/MeuPerfil';
import Historicos from 'pages/Historicos';
import Agenda from 'pages/Agenda';
import PageNotFound from 'pages/PageNotFound';
import { ThemeProvider } from '@material-ui/core';
import Navbar from 'components/Navbar';
import { UsuarioProvider } from 'context/UsuarioContext';

export default () => (
  <UsuarioProvider>
    <ThemeProvider>
      <Router>  
        <Navbar />
        <CssBaseline />
        <Switch>               
          <Route path="/" exact component={PaginaInicial} />            
          <Route path="/meuperfil" component={MeuPerfil} />                                   
          <Route path="/historicos" component={Historicos} />                                   
          <Route path="/agenda" component={Agenda} />   
                  
          <Route path="*" component={PageNotFound} />
        </Switch>  
      </Router>   
    </ThemeProvider>
  </UsuarioProvider>
                                        
);

