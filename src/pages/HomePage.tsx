import React from 'react';
import { useQuery } from 'react-query';
import { getPopularMovies, getTrendingMovies } from '../services/api';
import { MovieGrid } from '../components/MovieGrid';

export const HomePage: React.FC = () => {
  const { 
    data: popularMovies = [], 
    isLoading: isLoadingPopular,
    error: popularError 
  } = useQuery('popularMovies', getPopularMovies);

  const { 
    data: trendingMovies = [], 
    isLoading: isLoadingTrending,
    error: trendingError 
  } = useQuery('trendingMovies', getTrendingMovies);

  if (isLoadingPopular || isLoadingTrending) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-700 rounded w-48 mb-6"></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="aspect-[2/3] bg-gray-700 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (popularError || trendingError) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <p className="text-red-400">Error loading movies. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <section className="mb-12">
        <MovieGrid title="Popular Movies" movies={popularMovies} />
      </section>
      
      <section>
        <MovieGrid title="Trending Now" movies={trendingMovies} />
      </section>
    </div>
  );
};