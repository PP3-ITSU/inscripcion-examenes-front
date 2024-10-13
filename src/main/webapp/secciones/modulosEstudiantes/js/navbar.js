export function loadNavbar(navbarPath) {
  return fetch(navbarPath) // Asegúrate de que esta función devuelva la Promise
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
