import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="group relative overflow-hidden rounded-lg">
      <div className="aspect-[2/3] w-full">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 p-4 text-white">
          <h3 className="text-lg font-semibold">{movie.title}</h3>
          <div className="flex items-center gap-2 mt-2">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>{movie.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};