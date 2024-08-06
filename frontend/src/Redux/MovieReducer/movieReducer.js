const initialState = {
    isLoading: false,
    isError: false,
    movies: [],
  };
  
  const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_MOVIES_REQUEST':
        return { ...state, isLoading: true };
      case 'FETCH_MOVIES_SUCCESS':
        return { ...state, isLoading: false, movies: action.payload };
      case 'FETCH_MOVIES_FAILURE':
        return { ...state, isLoading: false, isError: true };
      default:
        return state;
    }
  };
  
  export default moviesReducer;
  