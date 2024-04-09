import { fetchMovieYears, fetchMovieTitle } from './data.mjs';

// Add event listeners to the search bars
const yearSearch = document.querySelector('#yearSearch');
const genreSearch = document.querySelector('#genreSearch');
const titleSearch = document.querySelector('#titleSearch');

yearSearch.addEventListener('input', async () => {
  const years = await fetchMovieYears();
  displayMovieYears('#content-box', years);
});

titleSearch.addEventListener('input', async () => {
  const title = await fetchMovieTitle();
  displayMovieTitle('#content-box', title);
});

// Display functions
function displayMovieYears(containerSelector, years) {
  const contentBox = document.querySelector(containerSelector);
  contentBox.innerHTML = `<h2>Movie Years</h2><div>${years.join(', ')}</div>`;
  contentBox.style.display = 'block';
}

function displayMovieTitle(containerSelector, title) {
  const contentBox = document.querySelector(containerSelector);
  contentBox.innerHTML = `<h2>Movie Title</h2><p>${title}</p>`;
  contentBox.style.display = 'block';
}