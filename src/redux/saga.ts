/* eslint-disable @typescript-eslint/ban-ts-comment */
import { all, takeLatest, put } from 'redux-saga/effects';
import { setMovies } from '../redux/moviesReducer';
import DataService from '../services/service'

const FETCH_MOVIES_SAGA = 'FETCH_MOVIES_SAGA';

export function * fetchMoviesSaga () {
  const moviesQuery = {
    _start: 0,
    _limit: 10
  };
  // eslint-disable-next-line no-console
  console.log('query', moviesQuery);

  // @ts-ignore
  // const response = yield call(async () => await JSONService.getTodos(todosQuery));
  const response = yield DataService.getMovies(moviesQuery);
  // eslint-disable-next-line no-console
  console.log('response', response);
  yield put(setMovies(response));
}

export function * watchMovies () {
  yield takeLatest(FETCH_MOVIES_SAGA, fetchMoviesSaga);
}

export function * moviesSaga () {
  yield all([
    watchMovies()
  ])
}