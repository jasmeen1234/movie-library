import { combineReducers } from 'redux';
import moviesReducer from './movieReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  filters: filterReducer,
});

export default rootReducer;
