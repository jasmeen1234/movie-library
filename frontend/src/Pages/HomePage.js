// src/Pages/HomePage.js
import React from 'react';
import Sidebar from '../Components/Sidebar';
import MovieDetail from './MovieDetail';
import Header from '../Components/Header';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-300">
      <Header />
      <div className="flex p-1">
        <Sidebar />
        <div className="flex-1 p-4">
          <MovieDetail />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
