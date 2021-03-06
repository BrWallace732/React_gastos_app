import React from 'react';
import { Helmet } from 'react-helmet';
import {Header, Titulo, ContenedorBotones, ContenedorHeader} from './elements/Header'
import Boton from './elements/Boton';
import BotnoCerrarSesion from './elements/BotonCerrar';
import FormularioGasto from './components/FormularioGasto';
import BarraTotalGastado from './components/BarraTotal';



const App = () => {
  return ( 
    <>
      <Helmet>
        <title>Agregar gastos</title>
      </Helmet>
    <Header>
      <ContenedorHeader>
        <Titulo>Agregar Gasto</Titulo>
        <ContenedorBotones>
          <Boton to='/categorias' >Categorias</Boton>
          <Boton to='/lista' >Lista de gastos</Boton>
          <BotnoCerrarSesion />
        </ContenedorBotones>
      </ContenedorHeader>
    </Header>

    <FormularioGasto />
    
    <BarraTotalGastado />

    </>
  );
}

export default App;