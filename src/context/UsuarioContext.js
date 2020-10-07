import React, { useState, createContext } from 'react';

export const UsuarioContext = createContext();

export const UsuarioProvider = props => {
    const [postUsuario, setPostUsuario] = useState(new Date(),{
        dataNascimento: '',
        nome: '',
        rg: '',
        cpf: '',
        telefone: '',
        senha: '',
        email: '',
        sexo: '',
        catServico: ''

    });
    return (
        <UsuarioContext.Provider value={[postUsuario, setPostUsuario]}>
            {props.children}
        </UsuarioContext.Provider>
    );
}
