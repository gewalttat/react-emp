import { combineReducers } from '@reduxjs/toolkit';

import moviesReducer from './moviesReducer';

export default combineReducers({
  movies: moviesReducer
});