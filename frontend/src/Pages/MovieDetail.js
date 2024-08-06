import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { movies as movieData } from "../data"; // Ensure this path is correct
import { motion } from 'framer-motion';

const MovieDetail = () => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const { ratings = [], order = '' } = useSelector((state) => state.filters);

  useEffect(() => {
    let filtered = movieData || []; // Default to empty array if movieData is undefined

    // Filter by rating
    if (ratings.length > 0) {
      filtered = filtered.filter((movie) => ratings.includes(Math.round(movie.rating)));
    }

    // Sort by year
    if (order === 'asc') {
      filtered.sort((a, b) => a.Year - b.Year);
    } else if (order === 'desc') {
      filtered.sort((a, b) => b.Year - a.Year);
    }

    setFilteredMovies(filtered);
  }, [ratings, order]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-10 p-4">
      {filteredMovies.length > 0 ? (
        filteredMovies.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img className="w-full h-60 object-cover" src={item.Poster} alt={item.Title} />
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-xl font-bold">{item.Title}</h2>
              <p className="text-gray-600">Year: {item.Year}</p>
              <p className="text-gray-600">Type: {item.Type}</p>
              <p className="text-yellow-500">
                {"★".repeat(Math.round(item.rating))}
              </p>
            </div>
          </motion.div>
        ))
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default MovieDetail;
