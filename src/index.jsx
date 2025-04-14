import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import Header from '../src/Components/Header/Header'
import Footer from '../src/Components/Footer/Footer'
import Content from '../src/Components/Content/Content'
import Pagina from '../src/Components/Pagina/Pagina'
import Contador from './Components/Contador/Contador';
import Formulario from './Components/Formulario/Formulario'
import MostrarOcultar from './Components/MostrarOcultar/MostrarOcultar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Pagina /> */}
    {/* <Formulario /> */}
    <Contador />
    {/* <MostrarOcultar /> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
