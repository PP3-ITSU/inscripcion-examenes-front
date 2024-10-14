export function loadSideNavbar(SidenavbarPath) {//aca recibe la ruta para cargar el sidebar
  return fetch(SidenavbarPath) // toma la ruta del nav que le pasan los archivos
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al cargar el navbar: ' + response.status);
      }
      return response.text();
    })
    .then(data => {
      document.querySelector('.sidebar-container').insertAdjacentHTML('afterbegin', data);
    })
    .catch(error => console.error('Error en loadNavbar:', error));
}
