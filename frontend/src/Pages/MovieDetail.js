import React from "react";
import { useParams } from "react-router-dom";
import { movies } from "../data";
import { motion } from 'framer-motion'
// import movies from "../data"; // Assuming movies data is in this file

const MovieDetail = () => {
  //   const id = useParams();
  //   const movie = movies.find((movie) => movie.id === Number(id));

  //   console.log(movie);
  //   console.log(id);
  //   if (!movie) {
  //     return <p>Movie not found</p>;
  //   }
  // const arr=movies
  console.log("movies", movies);

  return (
   
   <div className="max-w-screen-2xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-5 xl:gap-10 px-4 mx-auto">
      {movies &&
        movies.map((item, i) => (
          <div  className="bg-white h-auto border-[1px] border-gray-200 py-8 z-30 hover:border-transparent
          shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4">
            <h3 className="movie-id">Movie ID: {item.id}</h3>
            <img className="movie-image" src={item.Poster} alt={item.Title} />
            <h1 className="movie-name">{item.Title}</h1>
            <p className="movie-year">Year: {item.Year}</p>
            <p className="movie-type">Type: {item.Type}</p>
            <p className="movie-rating">Rating: {item.rating}</p>
          </div>
        ))}
   </div>
  );
};

export default MovieDetail;
