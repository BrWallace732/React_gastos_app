import React, {useState} from "react";
import { Helmet } from "react-helmet";
import Boton from "../elements/Boton";
import { ContenedorHeader, Header, Titulo } from "../elements/Header";
import {Formulario, Input, ContenedorBoton } from "./../elements/ElementsForm"
import { auth } from "../firebase/firebaseConfig";
import { useHistory } from "react-router";
import Alerta from "../elements/Alerta";


const Registro = () => {

    const history = useHistory( )
    const [correo, setCorreo] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [estadoAlerta, setEstadoAlerta] = useState(false)
    const [alerta, setAlerta] = useState({})

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'email':
                setCorreo(e.target.value)
                break;
            case 'password':
                setPassword(e.target.value)
                break;
            case 'password2':
                setPassword2(e.target.value)
                break;
            default:
                break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setEstadoAlerta(false)
        setAlerta({})

        
        if(correo === '' || password === '' || password2 === '' ){
            console.log('faltan datos...')
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
        if(password !== password2 ){
            console.log('las contraseñas no son iguales')
            setEstadoAlerta(true)
            setAlerta({
                tipo: 'error',
                mensaje: 'las contraseñas no son iguales'
            })
            return
        }
        try {
            await auth.createUserWithEmailAndPassword(correo, password)
            history.push('/')
        } catch (error) {

            setEstadoAlerta(true)
        
            let mensaje
            switch (error.code) {
                case 'auth/invalid-password':
                    mensaje = 'Contrasela invalida'
                    break;
                case 'auth/email-already-in-use':
                    mensaje = 'Ya existe una cuenta con el correo electrónico proporcionado.'
                    break;
                case 'auth/invalid-email':
                    mensaje = 'El correo electrónico no es válido.'
                    break;
                default:
                    mensaje = 'Hubo un error al intentar crear la cuenta.'
                    break;

            }

            console.log(mensaje)
            setAlerta({
                tipo: 'error',
                mensaje: mensaje
            })
        }    
    }


    return ( 
        <>
            <Helmet>
                <title>Crear Cuenta</title>
            </Helmet>
            <Header>
                <ContenedorHeader>
                    <Titulo>Crear Cuenta</Titulo>
                    <div>
                        <Boton to="/iniciar-sesion" >Iniciar Sesion</Boton>
                    </div>
                </ContenedorHeader>
            </Header>

            <Formulario onSubmit={handleSubmit}>
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
                <Input
                type="password"
                name="password2"
                placeholder="Confirmar Contraseña"
                value={password2}
                onChange={handleChange}
                />
                <ContenedorBoton>
                    <Boton as="button" type="submit" primario>Crear Cuenta</Boton>
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

export default Registro;