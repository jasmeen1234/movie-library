import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import MainRoutes from './Pages/MainRoutes';
import MovieDetail from './Pages/MovieDetail';
import Header from './Components/Header';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LogIn from './Pages/LogIn';
const App = () => {
  return (
    <div className=" font-bodyFont bg-gray-100">
    <BrowserRouter>

    {/* // <Provider store={store}>
    //   <MainRoutes />
    // </Provider> */}
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/login' element={<LogIn/>}/>
    </Routes> 
    {/* <MovieDetail/> */}
   
    </BrowserRouter>
    </div>
  );
};

export default App;
