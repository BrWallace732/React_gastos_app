import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader'
import Contenedor from  './elements/Contenedor'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import EditarGasto from './components/EditarGasto'
import GastosCategoria from './components/GastosCategoria'
import ListaGastos from './components/ListaGastos'
import Login from './components/Login'
import Registro from './components/Registro'



  WebFont.load({
    google: {
      families: ['Work Sans:400,500,700', 'sans-serif']
    }
  });


const Index = () => {
  return (

    <BrowserRouter>
      <Contenedor>
          <Switch>
            <Route path="/iniciar-sesion" component={Login} />
            <Route path="/registro" component={Registro} />
            <Route path="/categorias" component={GastosCategoria} />
            <Route path="/lista" component={ListaGastos} />
            <Route path="/editar" component={EditarGasto} />
            <Route path="/" component={App} />
          </Switch>
        </Contenedor>
    </BrowserRouter>
  );
}

ReactDOM.render(<Index /> ,document.getElementById('root'));
