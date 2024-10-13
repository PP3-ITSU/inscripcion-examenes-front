import { loadSideNavbar } from './sidebar.js';

document.addEventListener('DOMContentLoaded', function () {
  const isIndexPage = window.location.pathname.includes('indexEstudiantes.html');
  //guarda la en la variable SideNavbarpaht el valor de la ruta actual
  const SidenavbarPath = isIndexPage 
    ? './layout/sidenavbar.html'  // Cargar desde indexEstudiantes.html
    : './sidenavbar.html';  // Cargar desde dentro de layout

  loadSideNavbar(SidenavbarPath) //aca pasa el valor del la ruta para cargar el sidebar
    .then(() => {
      // Ajustar los enlaces con la clase "dinamic-link" después de cargar el navbar
      const links = document.querySelectorAll('.dinamic-link');

      links.forEach(link => {
        let href = link.getAttribute('href');

        if (isIndexPage) {
          //añade "layout/" a los enlaces para acceder si esta desde el index 
          link.setAttribute('href', `layout/${href}`);
        } else {
          //si esta en index modifica la ruta para que recague
          if (href.includes('indexEstudiantes.html')) {
            link.setAttribute('href', `../${href}`);            
          }
        }
      });
    })
    .catch(error => console.error('Error al cargar el navbar:', error));
});
