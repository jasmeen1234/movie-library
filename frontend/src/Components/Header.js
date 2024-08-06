// src/Components/Header.js
import React from 'react';

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-blue-400 flex text-white p-4  shadow-md">
     
      <div className="mt-2">
      <h1 className="text-3xl font-bold">Movie Library</h1>
        <a href="/home" className="text-white mr-4">Home</a>
        <a href="/login" className="text-white">Login</a>
      </div>
    </div>
  );
};

export default Header;
