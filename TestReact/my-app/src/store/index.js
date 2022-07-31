import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import homeReducers from 'containers/client/Home/module/reducers';
import movieDetailReducer from 'containers/client/MovieDetail/module/reducers';
import quanLyDatVeReducer from 'containers/client/SeatPlan/module/reducers';
import QuanLyUserReducer from 'containers/client/Infomation/module/reducers';
const rootReducer = combineReducers({
  homeReducers,
  movieDetailReducer,
  quanLyDatVeReducer,
  QuanLyUserReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),

);

export default store;