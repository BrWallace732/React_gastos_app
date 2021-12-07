import React from "react";
import { Header, Titulo } from './../elements/Header'
import { Helmet } from "react-helmet";
import BtnRegresar from "../elements/Regresar";
import BarraTotalGastado from "./BarraTotal";
import FormularioGasto from "./FormularioGasto";
import { useParams } from "react-router-dom";
import UseObtenerGasto from "../hooks/UseObtenerGaasto";



const EditGasto = () => {
    const {id} = useParams()
    console.log(id)
    const [gasto] = UseObtenerGasto(id)


    return ( 
        <>
            <Helmet>
                <title>Editar gasto</title>
            </Helmet>

            <Header>
                    <BtnRegresar ruta="/" />
                    <Titulo>Editar gasto</Titulo>
            </Header>

            <FormularioGasto />

            <BarraTotalGastado />
        </>
    )
}

export default EditGasto;