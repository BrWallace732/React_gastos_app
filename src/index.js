import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader'
import Contenedor from  './elements/Contenedor'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EditarGasto from './components/EditarGasto'
import GastosCategoria from './components/GastosCategoria'
import ListaGastos from './components/ListaGastos'
import Login from './components/Login'
import Registro from './components/Registro'
import { Helmet } from 'react-helmet';
import favicon from './images/icon.png'
import { AuthProvider } from './context/AuthContext';
// import RutaProtegida from './components/RutaPrivada';

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
              <Routes>
                <Route path="/iniciar-sesion" element={<Login/>} />
                <Route path="/registro" element={<Registro/>} />
                <Route path="/categorias" element={<GastosCategoria/>}/>
                <Route path="/lista" element={<ListaGastos/>}/>
                <Route path="/editar/:id" element={<EditarGasto/>}/>
                <Route path="/" element={<App/>}/>
              </Routes>
            </Contenedor>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

ReactDOM.render(<Index /> ,document.getElementById('root'));
