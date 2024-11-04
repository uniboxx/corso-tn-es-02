// assegno l'elemento con id "search-btn" alla variabile "searchBtn"
const searchBtn = document.getElementById('search-btn');

// cliccando sull'elemento searchBtn (la lente) gli dico di prevenire l'azione di default del browser che tra le altre cose prevede un refresh della pagina
searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
});
