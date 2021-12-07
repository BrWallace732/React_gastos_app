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
import { Helmet } from 'react-helmet';
import favicon from './images/icon.png'
import { AuthProvider } from './context/AuthContext';
import RutaProtegida from './components/RutaPrivada';

  WebFont.load({google: {families: ['Work Sans:400,500,700', 'sans-serif']}});

const Index = () => {
  return (

    <>
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <AuthProvider>
        <BrowserRouter>
          <Contenedor>
              <Switch>
                <Route path="/iniciar-sesion" component={Login} />
                <Route path="/registro" component={Registro} />

                <RutaProtegida path="/categorias" >
                  <GastosCategoria />
                </RutaProtegida>
                <RutaProtegida path="/lista" >
                  <ListaGastos />
                </RutaProtegida>
                <RutaProtegida path="/editar" >
                  <EditarGasto />
                </RutaProtegida>
                <RutaProtegida path="/" >
                  <App />
                </RutaProtegida>
              </Switch>
            </Contenedor>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

ReactDOM.render(<Index /> ,document.getElementById('root'));
