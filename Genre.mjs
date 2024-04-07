const url = 'https://moviesminidatabase.p.rapidapi.com/movie/byGen/%7Bgen%7D/'

fetch (url, {
    method: 'Get', 
    headers: {
            'X-RapidAPI-Key': 'a014021b92mshe7347fb401dc04ap1b51e2jsn2f1944359c36',
            'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
    }
})
.then(response => response.json())
.then(data=> console.log(data))
.catch(error => console.error('Error:' , error));


// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://moviesminidatabase.p.rapidapi.com/movie/byGen/%7Bgen%7D/',
//   headers: {
//     'X-RapidAPI-Key': 'a014021b92mshe7347fb401dc04ap1b51e2jsn2f1944359c36',
//     'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }


// fetchGenreData();
// function displayGenres(genres) {
//     const genreListElement = document.getElementById('genreList');
//     genreListElement.innerHTML = ''; // Clear existing genres
//     genres.forEach(genre => {
//         const genreElement = document.createElement('div');
//         genreElement.textContent = genre.name; // Assuming the genre object has a name property
//         genreListElement.appendChild(genreElement);
//     });
// }

// export { fetchGenres };