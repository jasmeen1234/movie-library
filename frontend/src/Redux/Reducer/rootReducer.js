import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  filters: filterReducer,
});

export default rootReducer;
