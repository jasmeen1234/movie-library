import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import MainRoutes from './Pages/MainRoutes';
import MovieDetail from './Pages/MovieDetail';

const App = () => {
  return (
    // <Provider store={store}>
    //   <MainRoutes />
    // </Provider>
    <MovieDetail/>
    
  );
};

export default App;
