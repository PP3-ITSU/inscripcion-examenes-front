export function loadSideNavbar(sidenavbarPath) {//aca recibe la ruta para cargar el sidebar
  return fetch(sidenavbarPath) // toma la ruta del nav que le pasan los archivos
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al cargar el navbar: ' + response.status);
      }
      return response.text();
    })
    .then(data => {
      document.querySelector('.wrapper').insertAdjacentHTML('afterbegin', data);
    })
    .catch(error => console.error('Error en loadNavbar:', error));
}
