import { Movie } from "../components/models";

const resolution = "400/300";

export const movies = [
  new Movie(
    "The great lands",
    `https://picsum.photos/id/237/${resolution}`,
    1993,
    "PG",
    "Movie",
    false,
    true
  ),
  new Movie(
    "The great lands",
    `https://picsum.photos/id/200/${resolution}`,
    1993,
    "PG",
    "Movie",
    false,
    true
  ),
  new Movie(
    "The great lands",
    `https://picsum.photos/id/100/${resolution}`,
    1993,
    "PG",
    "Movie",
    false,
    true
  ),
  new Movie(
    "The great lands",
    `https://picsum.photos/id/120/${resolution}`,
    1993,
    "PG",
    "Movie",
    false,
    true
  ),
  new Movie(
    "The great lands",
    `https://picsum.photos/id/60/${resolution}`,
    1993,
    "PG",
    "Movie",
    false,
    true
  ),
  new Movie(
    "The great lands",
    `https://picsum.photos/id/80/${resolution}`,
    1993,
    "PG",
    "Movie",
    false,
    false
  ),
  new Movie(
    "The great lands",
    `https://picsum.photos/id/90/${resolution}`,
    1993,
    "PG",
    "Movie",
    false,
    false
  ),
  new Movie(
    "The great lands",
    `https://picsum.photos/id/10/${resolution}`,
    1993,
    "PG",
    "Movie",
    false,
    false
  ),
  new Movie(
    "The great lands",
    `https://picsum.photos/id/21/${resolution}`,
    1993,
    "PG",
    "Movie",
    false,
    false
  ),
  new Movie(
    "The great lands",
    `https://picsum.photos/id/23/${resolution}`,
    1993,
    "PG",
    "Movie",
    false,
    false
  ),
  new Movie(
    "The great lands",
    `https://picsum.photos/id/198/${resolution}`,
    1993,
    "PG",
    "Movie",
    false,
    false
  ),
];

export const trendingMovies = movies.filter(({ trending }) => trending);
