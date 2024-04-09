import { fetchMovieTitle, fetchMovieYears } from './data.mjs';

const titleSearch = document.querySelector('#titleSearch');
const yearSearch = document.querySelector('#yearSearch');
const searchResultBox = document.querySelector('#search-result-box');
const searchResultContent = document.querySelector('#search-result-content');
const contentBox = document.querySelector('#content-box');
const contentBoxContent = document.querySelector('#content-box-content');

titleSearch.addEventListener('input', async () => {
  const title = titleSearch.value;
  if (title.trim() !== '') {
    const movieData = await fetchMovieTitle(title);
    displayMovieInfo(movieData);
    searchResultBox.classList.add('show');
  } else {
    searchResultBox.classList.remove('show');
  }
});

yearSearch.addEventListener('input', async () => {
  const years = await fetchMovieYears();
  displayMovieYears(years);
  searchResultBox.classList.add('show');
});

function displayMovieInfo(movieData) {
  searchResultContent.innerHTML = 
  `<h3>${movieData.Title}</h3>
    <p>Year: ${movieData.Year}</p>
    <p>Director: ${movieData.Director}</p>
    <p>Actors: ${movieData.Actors}</p>`;
}

function displayMovieYears(years) {
  searchResultContent.innerHTML = 
  `<h3>Movie Years</h3>
    <div>${years.join(', ')}</div>`;
}