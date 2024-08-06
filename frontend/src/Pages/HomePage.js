import React from 'react';
import Sidebar from '../Components/Sidebar';
import MovieList from '../Components/MovieList';
import MovieDetail from './MovieDetail';

const HomePage = () => {
  return (
    <div className="home-page">
      <Sidebar />
      <MovieList />
      <MovieDetail/>
      
    </div>
  );
};

export default HomePage;
