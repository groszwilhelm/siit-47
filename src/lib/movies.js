export async function retrieveMovies(setMovies, accessToken, navigate) {
  const response = await fetch("http://localhost:3000/movies", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const moviesFromServer = await response.json();

  if (response.ok) {
    setMovies(moviesFromServer);
  }

  if (response.status === 401) {
    navigate('/login')
  }
}
