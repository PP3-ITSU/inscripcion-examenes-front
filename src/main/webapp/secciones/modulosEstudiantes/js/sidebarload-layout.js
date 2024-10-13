import { loadSideNavbar } from './sidebar.js';

document.addEventListener('DOMContentLoaded', function () {
  const navbarPath = './sidenavbar.html'; // Ruta directa para los archivos dentro de layout
  loadSideNavbar(navbarPath).catch(error => console.error('Error al cargar el navbar:', error));
});

