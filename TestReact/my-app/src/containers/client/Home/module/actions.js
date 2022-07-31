import {bannerApi} from 'apis/bannerApi'
import {movieApi} from 'apis/movieApi';
import {
    FETCH_ALL_BANNER_SUCCESS, FETCH_ALL_BANNER_FAILED, FETCH_ALL_MOVIE_FAILED, FETCH_ALL_MOVIE_SUCCESS, START_LOADING, STOP_LOADING,
} from './types'

export const actFetchAllBannerSuccess = (bannerList) => {
    return {
        type: FETCH_ALL_BANNER_SUCCESS,
        payload: bannerList,
    };
};

export const actFetchAllBannerFailed = (err) => {
    return {
        type: FETCH_ALL_BANNER_FAILED,
        payload: err,
    };
};
export const actFetchAllBannerApi = () => {
    return (dispatch) => {

        // call api
        bannerApi
            .fecthAllBannerApi()
            .then((response) => {
                dispatch(actFetchAllBannerSuccess(response.data.content));

            })
            .catch((errors) => {
                dispatch(actFetchAllBannerFailed(errors));

            });
    };
};
export const actStartLoading = () => ({
    type: START_LOADING,
});
export const actStopLoading = () => ({
    type: STOP_LOADING,
});

export const actFetchAllMovieSuccess = (movieList) => {
    return {
        type: FETCH_ALL_MOVIE_SUCCESS,
        payload: movieList,
    };
};

export const actFetchAllMovieFailed = (err) => {
    return {
        type: FETCH_ALL_MOVIE_FAILED,
        payload: err,
    };
};

// async action
export const actFetchAllMovieApi = () => {
    return (dispatch) => {
        dispatch(actStartLoading());
        // call api
        movieApi
            .fecthAllMovieApi()
            .then((response) => {
                dispatch(actFetchAllMovieSuccess(response.data.content));
                dispatch(actStopLoading());
            })
            .catch((errors) => {
                dispatch(actFetchAllMovieFailed(errors));
                dispatch(actStopLoading());
            });
    };
};
