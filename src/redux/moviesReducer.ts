import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './configureStore';
import { MovieData, ResponseMoviesType } from '../components/movies-container/MoviesContainer';
import axios from 'axios';

export const getMovies = createAsyncThunk('getMovies', async () => {
  const response = await axios.get<ResponseMoviesType>("http://localhost:4000/movies").then(res => res.data.data);
  return response;
});

export const filterMovies = createAsyncThunk('filterMovies', async (filter: string) => {
  const response = await axios.get<ResponseMoviesType>(`http://localhost:4000/movies?filter=${filter}`).then(res => res.data.data);
  console.log(response);
  return response;
});

export const sortMovies = createAsyncThunk('sortMovies', async (sortBy: string) => {
  const response = await axios.get<ResponseMoviesType>(`http://localhost:4000/movies?sortBy=${sortBy}&sortOrder=desc`).then(res => res.data.data);
  return response;
});

export const filterAndSortMovies = createAsyncThunk('filterAndSortMovies', async (params: {sortBy: string, filter: string}) => {
  const { filter, sortBy } = params;
  const response = await axios.get<ResponseMoviesType>(`http://localhost:4000/movies?sortBy=${sortBy}&sortOrder=desc&filter=${filter}`).then(res => res.data.data);
  console.log(response, 'ssss')
  return response;
});

const initialState = {
  loadingState: 'initial',
  movies: []
} as MoviesSliceType;

const moviesSlice = createSlice({
  name: 'moviesSlice',
  initialState,
  reducers: {
    resetState: () => initialState
  },
  extraReducers: (builder) => {

    builder.addCase(getMovies.pending, (state) => {
      state.loadingState = 'loading'
    });
    builder.addCase(getMovies.fulfilled, (state, action: PayloadAction<MovieData[]>) => {
      state.loadingState = 'ready';
      state.movies = action.payload;
    });
    builder.addCase(getMovies.rejected, (state) => {
      state.loadingState = 'error';
    });

    builder.addCase(filterMovies.pending, (state) => {
      state.loadingState = 'loading'
    });
    builder.addCase(filterMovies.fulfilled, (state, action: PayloadAction<MovieData[]>) => {
      state.loadingState = 'ready';
      state.movies = action.payload;
    });
    builder.addCase(filterMovies.rejected, (state) => {
      state.loadingState = 'error';
    });

    builder.addCase(sortMovies.pending, (state) => {
      state.loadingState = 'loading'
    });
    builder.addCase(sortMovies.fulfilled, (state, action: PayloadAction<MovieData[]>) => {
      state.loadingState = 'ready';
      state.movies = action.payload;
    });
    builder.addCase(sortMovies.rejected, (state) => {
      state.loadingState = 'error';
    });

    builder.addCase(filterAndSortMovies.pending, (state) => {
      state.loadingState = 'loading'
    });
    builder.addCase(filterAndSortMovies.fulfilled, (state, action: PayloadAction<MovieData[]>) => {
      state.loadingState = 'ready';
      state.movies = action.payload;
    });
    builder.addCase(filterAndSortMovies.rejected, (state) => {
      state.loadingState = 'error';
    });

  }
});

export const selectTodos: (state: RootState) => MoviesSliceType = (state: RootState) => state.movies;

export const { resetState } = moviesSlice.actions;

export default moviesSlice.reducer;

type MoviesSliceType = {
  loadingState: string;
  movies: MovieData[];
}
