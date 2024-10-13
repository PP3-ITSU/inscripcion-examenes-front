document.addEventListener('DOMContentLoaded', function () {
  const navbarPath = '../../secciones/modulosEstudiantes/layout/navbar.html';
  loadNavbar(navbarPath);
});

function loadNavbar(navbarPath) {
  // Llama a la función loadNavbar del archivo navbarload.js
  import(navbarload).then(navbarload => {
    navbarload.loadNavbar(navbarPath);
  });
}
