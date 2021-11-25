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
import { format, fromUnixTime } from "date-fns";
import { es } from "date-fns/locale";

const ListaGastos = () => {
    const [gastos] = useObtenerGastos()
    const fechaFromat = (fecha) => {
        return format(fromUnixTime(fecha), "dd 'de ' MMMM 'de ' yyyy", {locale: es})
    }

    const fechaEsIgual = (gastos, index, gasto) => {
        if(index !== 0){
            const fechaActual = fechaFromat(gasto.fecha)
            const fechaGastoAnterior = fechaFromat(gastos[index-1].fecha)

            if(fechaActual === fechaGastoAnterior){
                return  true
            } else{
                return false
            }
        }
    }

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
                {gastos.map((gasto, index)=>{
                    return(
                        <div key={gasto.id}>
                            {!fechaEsIgual(gastos, index, gasto) && 
                                <Fecha>{fechaFromat(gasto.fecha)}</Fecha>
                            } 
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
                        </div>
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