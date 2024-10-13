import { loadNavbar } from './navbar.js';

document.addEventListener('DOMContentLoaded', function () {
  const navbarPath = './navbar.html'; // Ruta directa para los archivos dentro de layout
  loadNavbar(navbarPath).catch(error => console.error('Error al cargar el navbar:', error));
});

