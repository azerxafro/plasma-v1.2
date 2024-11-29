import { Movie, MovieDetails } from '../types/movie';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from './config';

export const transformMovieData = (movie: any): Movie => ({
  id: String(movie.id),
  title: movie.title,
  overview: movie.overview,
  posterUrl: movie.poster_path ? `${IMAGE_BASE_URL}/${POSTER_SIZE}${movie.poster_path}` : '',
  backdropUrl: movie.backdrop_path ? `${IMAGE_BASE_URL}/${BACKDROP_SIZE}${movie.backdrop_path}` : '',
  releaseDate: movie.release_date,
  rating: movie.vote_average,
  genres: movie.genres?.map((g: any) => g.name) || [],
});

export const transformMovieDetailsData = (movie: any): MovieDetails => ({
  ...transformMovieData(movie),
  runtime: movie.runtime,
  director: movie.credits?.crew?.find((c: any) => c.job === 'Director')?.name || '',
  cast: movie.credits?.cast?.slice(0, 10).map((c: any) => c.name) || [],
  streamingPlatforms: [],
});