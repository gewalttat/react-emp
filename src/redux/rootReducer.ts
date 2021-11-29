import { combineReducers } from '@reduxjs/toolkit';
import { all } from 'redux-saga/effects';
import { moviesSaga } from '../redux/saga';
import moviesReducer from './moviesReducer';


export function * rootSaga () {
  yield all([
    moviesSaga()
  ]);
}

export default combineReducers({
  movies: moviesReducer
});