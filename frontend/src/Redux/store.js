import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk'; // Correct import for redux-thunk

import {authReducer} from './AuthReducer/reducer';
// import movieReducer from './MovieReducer/MovieReducer'; // Adjust path as per your structure
import filterReducer from './Reducer/filterReducer'; // Adjust path as per your structure
// import rootReducer from './Reducer/rootReducer';
import movieReducer from './Reducer/movieReducer';
// Combine the reducers into one root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  movies: movieReducer, // Renamed to match your previous structure
  filters: filterReducer, // New reducer for filtering
});

// Create the store with the combined reducer and apply middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
