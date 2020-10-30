import React, { Fragment } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Footer = () => {
    return (
        <Fragment>
            <div className="main-footer"  >
                <div className="container">
                    <div className="col">
                        <h4>CONTRATAR</h4>
                        <ul className="list-unstyled">
                            <li><a href="#/">Encontre um profissional</a></li>
                            <li><a href="#/">Como contratar</a></li>
                            <li><a href="#/">Segurança</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>SOBRE</h4>
                        <ul className="list-unstyled">
                            <li><a href="#/">Politica de privacidade</a></li>
                            <li><a href="#/">Perguntas frequentes</a></li>
                            <li><a href="#/">Termos de uso</a></li>
                        </ul>
                    </div>
                    <div className="col" >
                        <h4>CONTATO</h4>
                        <ul >
                            <li><a href="#/">Fale conosco</a></li>
                            <li><a href="#/">Segurança</a></li>
                        </ul>
                        <div className="redes">
                            <a className="facebook" href="#/"><FacebookIcon /></a>
                            <a className="twitter" href="#/"><TwitterIcon /></a>
                            <a className="youTube" href="#/"><YouTubeIcon /></a>
                        </div>
                    </div>
                </div>
                <hr style={{ maxWidth: "80%" }} />
                <div className="row" style={{ textAlign: "center" }} >
                    <p className="col-sm" style={{ marginTop: "1rem", textAlign: "center" }}>
                        {'Copyright © '}
                        {new Date().getFullYear()}{'.'}
                        Serviços S/A - Todos os direitos reservados
                    </p>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer;

