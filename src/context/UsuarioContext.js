import React, { useState, createContext } from 'react';

export const UsuarioContext = createContext();

export const UsuarioProvider = props => {
    const [postUsuario, setPostUsuario] = useState(new Date(),{
        nome: '',
        rg: '',
        cpf: ' ',
        dataNascimento: '',
        telefone: '',
        senha: '',
        email: '',
        sexo: '',
        catServico: 0

    });
    return (
        <UsuarioContext.Provider value={[postUsuario, setPostUsuario]}>
            {props.children}
        </UsuarioContext.Provider>
    );
}
