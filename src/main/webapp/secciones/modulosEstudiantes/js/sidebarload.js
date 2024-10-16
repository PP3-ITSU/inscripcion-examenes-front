import { loadSideNavbar } from './sidebar.js';

document.addEventListener('DOMContentLoaded', function () {
  const isIndexPage = window.location.pathname.includes('indexEstudiantes.html');
  
  // Guarda en la variable SidenavbarPath el valor de la ruta actual
  const SidenavbarPath = isIndexPage 
    ? './layout/sidenavbar.html'  // Cargar desde indexEstudiantes.html
    : './sidenavbar.html';  // Cargar desde dentro de layout

  loadSideNavbar(SidenavbarPath) // Pasa la ruta para cargar el sidebar
    .then(() => {
      // Ajustar los enlaces con la clase "dinamic-link"
      const links = document.querySelectorAll('.dinamic-link');
      links.forEach(link => {
        let href = link.getAttribute('href');
        if (isIndexPage) {
          link.setAttribute('href', `layout/${href}`);  // Añade "layout/" si está en index
        } else if (href.includes('indexEstudiantes.html')) {
          link.setAttribute('href', `../${href}`);  // Modifica ruta si es index
        }
      });

      // Ajustar las rutas de las imágenes con la clase "dynamic-img"
      const images = document.querySelectorAll('.dynamic-img');
      images.forEach(img => {
        let src = img.getAttribute('src');
        let serc2="../../../adminlte/dist/img/logo.jpg"
        if (!isIndexPage) {  // Si no está en index, agrega "../"
          img.setAttribute('src', serc2);         
        }
      });
    })
    .catch(error => console.error('Error al cargar el navbar:', error));
});


