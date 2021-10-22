import { Grid, Typography } from '@material-ui/core';
import React, { FC, useEffect, useState } from 'react';
import ErrorBoundary from '../error-boundary/ErrorBoundary';
import { MovieCard } from '../movie-card/MovieCard';
import { SortingFilter } from '../sorting-filter/SortingFilter';
import './MoviesContainer.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies, filterMovies, filterAndSortMovies, sortMovies, selectTodos } from '../../redux/moviesReducer';

export interface MovieData {
  budget: number;
  genres: string[];
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

export interface ResponseMoviesType {
  data: MovieData[];
  limit: number;
  offset: number;
  totalAmount: number;
}

export const MoviesContainer: FC = () => {
  const [filteredMovies, setFilteredMovies] = useState<MovieData[]>();
  const [filter, filterChanged] = useState<string>();
  const [sortBy, sortByChanged] = useState<string>();
  const { movies } = useSelector(selectTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      filter && !sortBy ? filterMovies(filter.toLowerCase())
        : sortBy && !filter ? sortMovies(sortBy.toLowerCase())
          : filter && sortBy ? filterAndSortMovies({ sortBy: sortBy.toLowerCase(), filter: filter.toLowerCase() })
            : getMovies());
  }, [filter, sortBy]);

  useEffect(() => {
    setFilteredMovies(() => movies);
  }, [movies]);

  return (
    <div className='movies-container'>
      <ErrorBoundary>
        <SortingFilter filterChanged={filterChanged} sortByChanged={sortByChanged} />
        <hr style={{
          width: '90%',
          marginLeft: '0px',
          marginTop: '0px',
          borderColor: '#424242'
        }} />
        <Typography
          sx={{
            color: '#fff',
            fontFamily: 'Montserrat',
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: '24px',
            paddingTop: '30px'
          }}
          variant="body2"
          color="text.secondary">
          <b>{filteredMovies?.length}</b>movies found
        </Typography>
        <div className='movies-grid'>
          <Grid
            container
            spacing={{
              xs: 2,
              md: 3
            }}
            columns={{
              xs: 4,
              sm: 8,
              md: 12.5
            }}>
            {filteredMovies?.map((i, index) => (
              <Grid
                item
                xs={2}
                sm={4}
                md={4}
                key={index}>
                <MovieCard movieData={i} />
              </Grid>
            ))}
          </Grid>
        </div>
      </ErrorBoundary>
    </div>
  )
}