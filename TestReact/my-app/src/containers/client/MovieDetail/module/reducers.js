import {
  FETCH_MOVIE_DETAIL_FAILED,
  FETCH_MOVIE_DETAIL_SUCCESS,
} from './types';

const initialState = {
  movieDetail: {},
  loading: false,
  error: '',
};

const movieDetailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIE_DETAIL_SUCCESS:{
      state.movieDetail = payload;
      return {...state};
    }
    case FETCH_MOVIE_DETAIL_FAILED:{
      state.error = payload;
      return { ...state};
    }
    default:
      return state;
  }
};

export default movieDetailReducer;
