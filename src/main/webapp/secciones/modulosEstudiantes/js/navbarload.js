import { loadNavbar } from './navbar.js';

document.addEventListener('DOMContentLoaded', function () {
  const isIndexPage = window.location.pathname.includes('indexEstudiantes.html');

  const navbarPath = isIndexPage 
    ? './layout/navbar.html'  // Cargar desde indexEstudiantes.html
    : './navbar.html';  // Cargar desde dentro de layout

  loadNavbar(navbarPath)
    .then(() => {
      // Ajustar los enlaces después de cargar el navbar
      const links = document.querySelectorAll('.dinamic-link');

      links.forEach(link => {
        let href = link.getAttribute('href');

        if (isIndexPage) {
          link.setAttribute('href', `layout/${href}`);
        } else {
          if (href.includes('indexEstudiantes.html')) {
            link.setAttribute('href', `../${href}`);
          }
        }
      });
    })
    .catch(error => console.error('Error al cargar el navbar:', error));
});
