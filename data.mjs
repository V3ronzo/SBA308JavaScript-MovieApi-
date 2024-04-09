export async function fetchMovieYears() {
    const url = `http://www.omdbapi.com/?apikey=439eba48&y`;
    const options = { method: 'GET' };
  
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const error = await response.text();
        throw new Error(`API request failed with status code ${response.status}: ${error}`);
      }
      const data = await response.json();
      return data.Search.map(movie => movie.Year);
    } catch (error) {
      console.error('Error fetching movie years:', error);
      throw error;
    }
  }

  export async function fetchMovieTitle() {
    const url = `http://www.omdbapi.com/?apikey=439eba48&s`;
    const options = { method: 'GET' };
  
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const error = await response.text();
        throw new Error(`API request failed with status code ${response.status}: ${error}`);
      }
      const data = await response.json();
      return data.Search.map(movie => movie.Title);
    } catch (error) {
      console.error('Error fetching movie Title:', error);
      throw error;
    }
  }



