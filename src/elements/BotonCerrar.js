import React from 'react'
import { ReactComponent as IconoLogOut } from './../images/log-out.svg'
import Boton from './Boton'
import { auth } from '../firebase/firebaseConfig'
import { useHistory } from 'react-router'
import { signOut } from 'firebase/auth'


const BotnoCerrarSesion = () => {

    const history = useHistory()

    const cerrarSesion = async ()=> {
        try {
            await signOut(auth)
            history.push('/iniciar-sesion')
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <Boton iconoGrande as ="button" onClick={cerrarSesion} >
            <IconoLogOut />
            
        </Boton>
    );
}

export default BotnoCerrarSesion;