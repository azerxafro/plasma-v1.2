export interface Movie {
  id: string;
  title: string;
  overview: string;
  posterUrl: string;
  backdropUrl: string;
  releaseDate: string;
  rating: number;
  genres: string[];
}

export interface MovieDetails extends Movie {
  runtime: number;
  director: string;
  cast: string[];
  streamingPlatforms: StreamingPlatform[];
}

export interface StreamingPlatform {
  name: string;
  url: string;
  price?: number;
}