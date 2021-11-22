import React from "react";
import { Helmet } from "react-helmet";
import { Header, Titulo } from './../elements/Header'
import BtnRegresar from "../elements/Regresar";
import BarraTotalGastado from "./BarraTotal";

const ListaGastos = () => {
    
    return ( 
        <>
            <Helmet>
                <title>Lista de Gastos</title>
            </Helmet>

            <Header>
                    <BtnRegresar ruta="/" />
                    <Titulo>Lista de Gastos</Titulo>
            </Header>

            <BarraTotalGastado />
        </>
    );
}

export default ListaGastos;