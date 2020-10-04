import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../style/App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import PaginaInicial  from '../components/index';
import MeuPerfil from '../pages/MeuPerfil';
import Historicos from '../pages/Historicos';
import Agenda from '../pages/Agenda';
import PageNotFound from '../pages/PageNotFound';
import Cadastro from '../pages/Cadastro';


export default () => (
    <Router>  
        <CssBaseline />
        <Switch>               
            <Route path="/" exact component={PaginaInicial} />            
            <Route path="/meuperfil" component={MeuPerfil} />                                   
            <Route path="/historicos" component={Historicos} />                                   
            <Route path="/agenda" component={Agenda} /> 
            <Route path="/cadastro" component={Cadastro}/>         
            <Route path="*" component={PageNotFound} />
        </Switch>  
    </Router>                                            
);

