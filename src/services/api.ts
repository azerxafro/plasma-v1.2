import axios from 'axios';
import { Movie, MovieDetails } from '../types/movie';
import { BASE_URL, API_KEY } from './config';
import { transformMovieData, transformMovieDetailsData } from './transformers';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getPopularMovies = async (): Promise<Movie[]> => {
  try {
    const response = await api.get('/movie/popular');
    return response.data.results.map(transformMovieData);
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};

export const getTrendingMovies = async (): Promise<Movie[]> => {
  try {
    const response = await api.get('/trending/movie/week');
    return response.data.results.map(transformMovieData);
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};

export const getMovieDetails = async (id: string): Promise<MovieDetails | null> => {
  try {
    const response = await api.get(`/movie/${id}`, {
      params: {
        append_to_response: 'credits',
      },
    });
    return transformMovieDetailsData(response.data);
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};