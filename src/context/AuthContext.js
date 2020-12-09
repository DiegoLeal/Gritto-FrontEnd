import React, { createContext, useState } from 'react';

const AuthContext = createContext();

function initialState() {
    return {username: '', password: ''};
}

const AuthProvider = ({ children }) => {
    const [userCredentials, setUserCredentials] = useState(initialState);
    const [isLogged, setLogged] = useState(false);
    const [token, setToken] = useState('');

    return (
        <AuthContext.Provider value={{token, setToken, setUserCredentials, userCredentials, isLogged, setLogged}}>
            { children }
        </AuthContext.Provider>
    );
}

export {AuthContext, AuthProvider}