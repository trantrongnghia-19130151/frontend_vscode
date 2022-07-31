import {movieApi} from 'apis/movieApi';
import {
  FETCH_MOVIE_DETAIL_FAILED,
  FETCH_MOVIE_DETAIL_SUCCESS,
} from './types';

export const actFetchMovieDetailSuccess = (movieDetail) => {
  return {
      type: FETCH_MOVIE_DETAIL_SUCCESS,
      payload: movieDetail,
  };
};

export const actFetchMovieDetailFailed = (err) => {
  return {
      type: FETCH_MOVIE_DETAIL_FAILED,
      payload: err,
  };
};

export const actFetchMovieDetail = movieId => {
  return (dispatch)=>{
  movieApi
    .fetchMovieDetailApi(movieId)
    .then(res => {
     dispatch(actFetchMovieDetailSuccess(res.data.content));

    })
    .catch(err => {
      dispatch(actFetchMovieDetailFailed(err))
    })
  }
}


