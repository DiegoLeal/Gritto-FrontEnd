import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import PaginaInicial from 'components/index';
import MeuPerfil from 'pages/MeuPerfil';
import Historicos from 'pages/Historicos';
import Agenda from 'pages/Agenda';
import PageNotFound from 'pages/PageNotFound';
import { ThemeProvider } from '@material-ui/core';
import Navbar from 'components/Navbar';
import { UsuarioProvider } from 'context/UsuarioContext';
import PropTypes from 'prop-types';
import Footer from 'components/Footer';

function Routers() {
  return (
    <UsuarioProvider>
      <ThemeProvider>
        <Router>
          <Navbar />
          <CssBaseline />
          <AppContainer>
            <Switch>
              <Route path="/" exact component={PaginaInicial} />
              <Route path="/meuperfil" component={MeuPerfil} />
              <Route path="/historicos" component={Historicos} />
              <Route path="/agenda" component={Agenda} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </AppContainer>
        </Router>
      </ThemeProvider>
    </UsuarioProvider>
  )
}

function AppContainer({ children }) {

  return (
    <Fragment>
      <div style={{ marginTop: '10%', marginLeft: '20%', marginRight: '20%' }} className='d-flex justify-content-center py-5'>
        {children}
      </div>
      <Footer />
    </Fragment>
  )
}

AppContainer.propTypes = {
  children: PropTypes.node.isRequired
}

export default Routers