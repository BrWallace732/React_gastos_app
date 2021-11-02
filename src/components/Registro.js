import React from "react";
import { Helmet } from "react-helmet";
import Boton from "../elements/Boton";
import { ContenedorHeader, Header, Titulo } from "../elements/Header";
import {Formulario, Input, ContenedorBoton } from "./../elements/ElementsForm"

const Registro = () => {
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
                <Input
                type="password"
                name="password2"
                placeholder="Confirmar Contraseña"
                />
                <ContenedorBoton>
                    <Boton as="button" type="submit" primario>Crear Cuenta</Boton>
                </ContenedorBoton>
            </Formulario>


        </>
    )
}

export default Registro;