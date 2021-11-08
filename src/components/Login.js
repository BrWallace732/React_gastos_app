import React from "react";
import { Helmet } from "react-helmet";
import Boton from "../elements/Boton";
import { ContenedorHeader, Header, Titulo } from "../elements/Header";
import {Formulario, Input, ContenedorBoton } from "./../elements/ElementsForm"


const Login = () => {
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

            <Formulario>
                <Input
                type="email"
                name="email"
                placeholder="Correo Electronico"
                />
                <Input
                type="password"
                name="password"
                placeholder="Contraseña"
                />
                <ContenedorBoton>
                    <Boton as="button" type="submit" primario>Iniciar Sesion</Boton>
                </ContenedorBoton>
            </Formulario>


        </>
    )
}

export default Login;