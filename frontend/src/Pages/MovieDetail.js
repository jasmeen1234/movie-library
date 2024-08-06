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
    <motion.div
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1 }}
    // exit={{ opacity: 1 }}
    // layout
    className="card relative w-full md:w-60 h-[410px] md:h-[360px] my-3 mx-4 md:my-5 md:mx-0 cursor-pointer rounded-xl overflow-hidden">
      {movies &&
        movies.map((item, i) => (
          <div className='absolute bottom-0 w-full flex justify-between items-end p-3 z-20'>
            <h3 className="movie-id">Movie ID: {item.id}</h3>
            <img className="movie-image" src={item.Poster} alt={item.Title} />
            <h1 className="movie-name">{item.Title}</h1>
            <p className="movie-year">Year: {item.Year}</p>
            <p className="movie-type">Type: {item.Type}</p>
            <p className="movie-rating">Rating: {item.rating}</p>
          </div>
        ))}
   </motion.div>
  );
};

export default MovieDetail;
