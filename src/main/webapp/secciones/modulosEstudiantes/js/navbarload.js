/*document.addEventListener('DOMContentLoaded', function () {
    // Definimos la ruta absoluta desde la raíz del proyecto
    const navbarPath = '/src/main/webapp/secciones/modulosEstudiantes/layout/navbar.html';

    fetch(navbarPath)
        .then(response => {
            if (!response.ok) throw new Error('Error al cargar el navbar: ' + response.status);
            return response.text();
        })
        .then(data => {
            document.querySelector('.wrapper').insertAdjacentHTML('afterbegin', data);
        })
        .catch(error => console.error(error));
});*/
import { loadNavbar } from './navbar.js';

document.addEventListener('DOMContentLoaded', function () {
  // Detecta si estás en indexEstudiantes.html o dentro del layout
  const isIndex = window.location.pathname.includes('indexEstudiantes.html');
  
  // Define la ruta del navbar de forma dinámica
  const navbarPath = isIndex 
    ? './secciones/modulosEstudiantes/layout/navbar.html' // Desde indexEstudiantes.html
    : '../layout/navbar.html'; // Desde archivos dentro del layout

  loadNavbar(navbarPath);
});

