import React from "react";
import { Helmet } from "react-helmet";
import { Header, Titulo } from './../elements/Header'
import BtnRegresar from "../elements/Regresar";
import BarraTotalGastado from "./BarraTotal";
import useObtenerGastos from "../hooks/UseObtenerGastos";
import {
    Lista,
    ElementoLista,
    ListaDeCategorias,
    ElementoListaCategorias,
    Categoria,
    Descripcion,
    Valor,
    Fecha,
    ContenedorBotones,
    BotonAccion,
    BotonCargarMas,
    ContenedorBotonCentral,
    ContenedorSubtitulo,
    Subtitulo
} from './../elements/ElementosLista'
import Iconos from './../elements/Iconos'
import convertirMoneda from './../funciones/convertirMoneda'
import {ReactComponent as IconoEditar} from './../images/pencil.svg'
import {ReactComponent as IconoBorrar} from './../images/trash.svg'
import { Link } from "react-router-dom";
import Boton from "../elements/Boton";

const ListaGastos = () => {
    const [gastos] = useObtenerGastos()
    return ( 
        <>
            <Helmet>
                <title>Lista de Gastos</title>
            </Helmet>

            <Header>
                    <BtnRegresar ruta="/" />
                    <Titulo>Lista de Gastos</Titulo>
            </Header>

            <Lista>
                {gastos.map((gasto)=>{
                    return(
                        <ElementoLista key={gasto.id}>
                            <Categoria>
                                <Iconos id={gasto.categoria} />
                                {gasto.descripcion}
                            </Categoria>
                            <Descripcion>
                                {gasto.descripcion}
                            </Descripcion>
                            <Valor>{convertirMoneda(gasto.cantidad)}</Valor>

                            <ContenedorBotones>
                                <BotonAccion as={Link} to={`/editar/${gasto.id}`} >
                                    <IconoEditar />
                                </BotonAccion>
                                <BotonAccion >
                                    <IconoBorrar />
                                </BotonAccion>
                            </ContenedorBotones>
                        </ElementoLista>
                    )
                })}

                <ContenedorBotonCentral>
                    <BotonCargarMas>Cargar Mas...</BotonCargarMas>
                </ContenedorBotonCentral>

                {gastos.length === 0 && 
                    <ContenedorSubtitulo>
                        <Subtitulo>No hay gastos que mostrar</Subtitulo>
                        <Boton as={Link} to='/'>Agregar Gasto</Boton>
                    </ContenedorSubtitulo>
                }
            </Lista>


            <BarraTotalGastado />
        </>
    );
}

export default ListaGastos;