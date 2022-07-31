import {
    FETCH_ALL_BANNER_SUCCESS, FETCH_ALL_BANNER_FAILED, FETCH_ALL_MOVIE_FAILED, FETCH_ALL_MOVIE_SUCCESS, START_LOADING, STOP_LOADING,
} from './types'
const initialState = {
    banner: [],
    listMovie: [],
    error: {},
    isLoading: false,


}
const homeReducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_ALL_BANNER_SUCCESS:
            state.banner = payload;
            return { ...state };
        case FETCH_ALL_BANNER_FAILED:
            state.error = payload;
            return { ...state };
        case FETCH_ALL_MOVIE_SUCCESS: 
            state.listMovie = payload;
            return { ...state };
        
        case FETCH_ALL_MOVIE_FAILED: 
            state.error = payload;
            return { ...state };
        
        case START_LOADING: 
            state.isLoading = true;
            return { ...state };
        
        case STOP_LOADING: 
            state.isLoading = false;
            return { ...state };
        
        default:
            return state;
    }

}
export default homeReducers;