import React, {useState} from "react";
import { Helmet } from "react-helmet";
import Boton from "../elements/Boton";
import { ContenedorHeader, Header, Titulo } from "../elements/Header";
import {Formulario, Input, ContenedorBoton } from "./../elements/ElementsForm"
import { useHistory } from "react-router";
import { auth } from "../firebase/firebaseConfig";
import Alerta from "../elements/Alerta";

const Login = () => {

    const history = useHistory( )
    const [correo, setCorreo] = useState('')
    const [password, setPassword] = useState('')
    const [estadoAlerta, setEstadoAlerta] = useState(false)
    const [alerta, setAlerta] = useState({})

    const handleChange = (e) =>{

        if(e.target.name === 'email'){
            setCorreo(e.target.value)
        } else if(e.target.name === 'password'){
            setPassword(e.target.value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setEstadoAlerta(false)
        setAlerta({})
        
        if(correo === '' || password === '' ){
            setEstadoAlerta(true)
            setAlerta({
                tipo: 'error',
                mensaje: 'faltan datos'
            })
            return
        }
        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/
        if(!expresionRegular.test(correo)){
            console.log('correo no valido...')
            setEstadoAlerta(true)
            setAlerta({
                tipo: 'error',
                mensaje: 'correo no valido'
            })
            return
        }
        
        try {
            await auth.signInWithEmailAndPassword(correo, password)
            history.push('/')
        } catch (error) {
            setEstadoAlerta(true)
            // console.log(error)
            let mensaje
            switch (error.code) {
                case 'auth/wrong-password':
                    mensaje = 'la contrasela no es correcta'
                    break;
                case 'auth/user-not-found':
                    mensaje = 'el usuario no existe'
                    break;
                default:
                    mensaje = 'Hubo un error al intentar crear la cuenta.'
                    break;
            }
            // console.log(mensaje)
            setAlerta({
                tipo: 'error',
                mensaje: mensaje
            })
        }    
    }

    return ( 
        <>
            <Helmet>
                <title>Iniciar Sesion</title>
            </Helmet>
            <Header>
                <ContenedorHeader>
                    <Titulo>Iniciar Sesion</Titulo>
                    <div>
                        <Boton to="/registro" >Crear Cuenta</Boton>
                    </div>
                </ContenedorHeader>
            </Header>

            <Formulario onSubmit={handleSubmit} >
                <Input
                type="email"
                name="email"
                placeholder="Correo Electronico"
                value={correo}
                onChange={handleChange}
                />
                <Input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={password}
                onChange={handleChange}
                />
                <ContenedorBoton>
                    <Boton as="button" type="submit" primario>Iniciar Sesion</Boton>
                </ContenedorBoton>
            </Formulario>

        <Alerta 
            tipo={alerta.tipo}
            mensaje={alerta.mensaje}
            estadoAlerta={estadoAlerta}
            setEstadoAlerta={setEstadoAlerta}
        />

        </>
    )
}

export default Login;