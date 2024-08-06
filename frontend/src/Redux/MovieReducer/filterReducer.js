import { UPDATE_FILTERS } from './actionTypes';

const initialState = {
  filters: {
    ratings: [],
    order: '',
  },
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FILTERS:
      return {
        ...state,
        filters: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
