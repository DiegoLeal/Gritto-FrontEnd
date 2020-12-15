import React, {useContext} from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({component: Component, ...rest}) => {
    const {token} = useContext(AuthContext);
    const {data} = token;
    if(data != null) {
        console.log("If token")
        localStorage.setItem('token', data);
    }

    return (
        <Route 
            {...rest}
            render={() => localStorage.getItem('token') ? <Component {...rest}/> : <Redirect to="/login"/>}
        />            
    );
}

export default PrivateRoute;