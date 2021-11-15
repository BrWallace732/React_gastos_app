import React from 'react'
import { ReactComponent as IconoLogOut } from './../images/log-out.svg'
import Boton from './Boton'
import { auth } from '../firebase/firebaseConfig'
import { useHistory } from 'react-router'


const BotnoCerrarSesion = () => {

    const history = useHistory()

    const cerrarSesion = async ()=> {
        try {
            await auth.signOut()
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