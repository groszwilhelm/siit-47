export async function retrieveMovies(setMovies) {
  const response = await fetch("http://localhost:3000/movies");
  const moviesFromServer = await response.json();

  setMovies(moviesFromServer);
}
