import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import MovieDetail from './MovieDetail';
import Header from '../Components/Header';
import { calcLength } from 'framer-motion';

const HomePage = () => {
  let [order,setOrder]=useState("");
  let [starRatings,setStarRatings]=useState([])
  return (
    <div className="min-h-screen bg-gray-300">
      <Header />
      <div className="flex p-1">
        <Sidebar order={order} setOrder={setOrder} setStarRatings={setStarRatings} />
        {console.log(starRatings)}
        <div className="flex-1 p-4">
          <MovieDetail order={order} starRatings={starRatings} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
