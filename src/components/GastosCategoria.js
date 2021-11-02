import React from "react";
import { Header, Titulo } from './../elements/Header'
import { Helmet } from "react-helmet";
import BtnRegresar from "../elements/Regresar";

const GastosCategoria = () => {
    return (
        <>
            <Helmet>
                <title>Gastos por Categoria</title>
            </Helmet>

            <Header>
                    <BtnRegresar ruta="/" />
                    <Titulo>Gastos por Categoria</Titulo>
            </Header>

        </>
    )
}

export default GastosCategoria