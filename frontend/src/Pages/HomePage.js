import React from 'react';
import Sidebar from '../Components/Sidebar';
import MovieList from '../Components/MovieList';

const HomePage = () => {
  return (
    <div className="home-page">
      <Sidebar />
      <MovieList />
    </div>
  );
};

export default HomePage;
