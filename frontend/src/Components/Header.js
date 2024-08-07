import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-blue-400 flex text-white p-4 shadow-md">
      <div className="mt-2">
        <h1 className="text-3xl font-bold">Movie Library</h1>
        <Link to="/home" className="text-white mr-4">Home</Link>
        <Link to="/login" className="text-white">Login</Link>
      </div>
    </div>
  );
};

export default Header;
