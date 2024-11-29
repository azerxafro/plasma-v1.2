import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Film, TrendingUp, PlayCircle } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-black/95 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <PlayCircle className="w-8 h-8 text-red-600" />
            <span className="text-white text-xl font-bold">Plasma Play</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white flex items-center space-x-1">
              <Film className="w-4 h-4" />
              <span>Movies</span>
            </Link>
            <Link to="/trending" className="text-gray-300 hover:text-white flex items-center space-x-1">
              <TrendingUp className="w-4 h-4" />
              <span>Trending</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search movies..."
                className="bg-gray-800 text-white px-4 py-2 pl-10 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};