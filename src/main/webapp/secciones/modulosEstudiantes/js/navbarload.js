import { loadNavbar } from './navbar.js';

document.addEventListener('DOMContentLoaded', function () {
  const isIndexPage = window.location.pathname.includes('indexEstudiantes.html');

  const navbarPath = isIndexPage 
    ? './layout/navbar.html'  // Cargar desde indexEstudiantes.html
    : './navbar.html';  // Cargar desde dentro de layout

  loadNavbar(navbarPath)
    .then(() => {
      // Ajustar los enlaces con la clase "dinamic-link" después de cargar el navbar
      const links = document.querySelectorAll('.dinamic-link');

      links.forEach(link => {
        let href = link.getAttribute('href');

        if (isIndexPage) {
          //añade "layout/" a los enlaces para acceder si esta desde el index 
          link.setAttribute('href', `layout/${href}`);
        } else {
          //si esta en index modifica la ruta para que recague la misma pagina
          if (href.includes('indexEstudiantes.html')) {
            link.setAttribute('href', `../${href}`);            
          }
        }
      });
    })
    .catch(error => console.error('Error al cargar el navbar:', error));
});
