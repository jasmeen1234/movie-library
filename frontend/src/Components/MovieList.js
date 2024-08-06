import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const MovieList = () => {
  const { movies, isLoading, isError } = useSelector((state) => state.movie);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching movies</div>;

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
