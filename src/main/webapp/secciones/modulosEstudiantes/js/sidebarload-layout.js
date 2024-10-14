import { loadSideNavbar } from './sidebar.js';

document.addEventListener('DOMContentLoaded', function () {
  const isInsideLayout = window.location.pathname.includes('/layout/');
  const SidenavbarPath = './sidenavbar.html'; // Ruta fija dentro de layout

  loadSideNavbar(SidenavbarPath)
    .then(() => {
      // Ajustar las rutas de las imágenes
      const images = document.querySelectorAll('img');

      images.forEach(img => {
        let src = img.getAttribute('src');

        if (isInsideLayout) {
          // Agregar "../" a las rutas de imágenes si están dentro de layout
          img.setAttribute('src', `../${src}`);
        }
      });
    })
    .catch(error => console.error('Error al cargar el navbar:', error));
});


