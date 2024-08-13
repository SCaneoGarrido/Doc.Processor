import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importar los estilos

// Inicializar AOS
AOS.init({
  duration: 1000, // Duración de la animación en milisegundos
});

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); // Crea el contenedor de raíz

// Renderiza tu aplicación usando root.render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);