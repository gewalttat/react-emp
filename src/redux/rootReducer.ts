import { combineReducers } from '@reduxjs/toolkit';

import todosReducer from './moviesReducer';

export default combineReducers({
  movies: todosReducer
});