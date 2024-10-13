function loadNavbar(navbarPath) {
  fetch(navbarPath)
    .then(response => {
      if (!response.ok) throw new Error('Error al cargar el navbar: ' + response.status);
      return response.text();
    })
    .then(data => {
      document.querySelector('.wrapper').insertAdjacentHTML('afterbegin', data);
    })
    .catch(error => console.error(error));
}

export { loadNavbar };