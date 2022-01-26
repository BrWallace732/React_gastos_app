import React from "react";
import { Header, Titulo } from './../elements/Header'
import { Helmet } from "react-helmet";
import BtnRegresar from "../elements/BtnRegresar";
import BarraTotalGastado from "./BarraTotal";

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

            <BarraTotalGastado />
        </>
    )
}

export default GastosCategoria