import React from "react";
import { Header, Titulo } from './../elements/Header'
import { Helmet } from "react-helmet";
import BtnRegresar from "../elements/BtnRegresar";
import BarraTotalGastado from "./BarraTotal";
import FormularioGasto from "./FormularioGasto";
import { useParams } from "react-router-dom"; //"react-router-dom": "^5.1.2"
// import { useSearchParams } from "react-router-dom"; //  "react-router-dom": "^5.1.3",
import UseObtenerGasto from "../hooks/UseObtenerGasto";

const EditGasto = () => {
    const {id} = useParams()
    // let [searchParams, setSearchParams] = useSearchParams(); // "react-router-dom": "^5.1.3"
    const [gasto] = UseObtenerGasto(id)

    return ( 
        <>
            <Helmet>
                <title>Editar gasto</title>
            </Helmet>
            <Header>
                    <BtnRegresar ruta="/lista" />
                    <Titulo>Editar gasto</Titulo>
            </Header>
            <FormularioGasto gasto={gasto} />
            <BarraTotalGastado />
        </>
    )
}

export default EditGasto;