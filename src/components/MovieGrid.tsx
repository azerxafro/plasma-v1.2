import React from 'react';
import { MovieCard } from './MovieCard';
import { Movie } from '../types/movie';

interface MovieGridProps {
  movies: Movie[];
  title: string;
}

export const MovieGrid: React.FC<MovieGridProps> = ({ movies, title }) => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};