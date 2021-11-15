import React from 'react'
import { useAuth } from '../context/AuthContext';
import {Route, Redirect} from 'react-router-dom'


const RutaProtegida = ({children, ...props}) => {
    const {usuario} = useAuth()

    if(usuario){
        return <Route {...props}>{children}</Route>
    }else {
        return <Redirect to='/iniciar-sesion' />
    }
}

export default RutaProtegida;