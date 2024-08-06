import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LogIn from './LogIn';
import MovieDetail from './MovieDetail';
import ProtectedRoute from "./ProtectedRoute";
const MainRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<HomePage />} />
    {/* <Route path="/login" element={<LogIn />} /> */}
    <Route
          path="/movie/:id"
          element={
            <ProtectedRoute>
              <MovieDetail />
            </ProtectedRoute>
          }
        />
  </Routes>
  );
};

export default MainRoutes;
