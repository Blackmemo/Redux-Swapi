import {FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAIL } from "../actions";

const initialState = {
  characters: [],
  isFetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
    return {
      ...state,
      error: '',
      isFetching: true
    };
    case FETCH_SUCCESS:
    return {
      ...state,
      error: '',
      isFetching: false,
      characters: action.payload.results
    };
    case FETCH_FAIL:
    return{
      ...state,
      error: `Fetch has failed!: ${action.payload}`,
      isFetching: false
    }
    
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
