import { Grid, Typography } from '@material-ui/core';
import React, { FC, useEffect, useState } from 'react';
import ErrorBoundary from '../error-boundary/ErrorBoundary';
import { MovieCard } from '../movie-card/MovieCard';
import { SortingFilter } from '../sorting-filter/SortingFilter';
import './MoviesContainer.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies, filterMovies, filterAndSortMovies, sortMovies, selectMovies } from '../../redux/moviesReducer';
import { useHistory, useLocation } from 'react-router';
import store from "../../redux/configureStore";

export interface MovieData {
  budget?: number;
  genres?: string[];
  id?: number;
  overview?: string;
  poster_path?: string;
  release_date?: string | null;
  revenue?: number;
  runtime?: number;
  tagline?: string;
  title?: string;
  vote_average?: number;
  vote_count?: number;
}

export interface ResponseMoviesType {
  data: MovieData[];
  limit: number;
  offset: number;
  totalAmount: number;
}

export const usePathname: (() => string) = () => {
  const location = useLocation();
  return location.pathname;
}

export const MoviesContainer: FC = () => {
  const [filteredMovies, setFilteredMovies] = useState<MovieData[]>();
  const [filter, filterChanged] = useState<string>();
  const [sortBy, sortByChanged] = useState<string>();
  const { movies } = useSelector(selectMovies);
  const dispatch = useDispatch();
  const history = useHistory();

  const getGenre = new URLSearchParams(useLocation()?.search).get('genre');
  const getSorting = new URLSearchParams(useLocation()?.search).get('sortBy');

  useEffect(() => {
    dispatch(
      filter && !sortBy ? filterMovies(filter.toLowerCase())
        : sortBy && !filter ? sortMovies(sortBy.toLowerCase())
          : filter && sortBy ? filterAndSortMovies({ sortBy: sortBy.toLowerCase(), filter: filter.toLowerCase() })
            : getMovies());

    filter && history.push({
      pathname: '/search',
      search: `?genre=${filter}`
    });

    sortBy && history.push({
      pathname: '/search',
      search: `?sortBy=${sortBy}`
    });

    filter && sortBy && history.push({
      pathname: '/search',
      search: `?sortBy=${sortBy}&genre=${filter}`
    });

    if (getGenre && !filter) {
      filterChanged(getGenre);
    }

    if (getSorting && !sortBy) {
      sortByChanged(getSorting);
    }

  }, [filter, sortBy, getGenre, getSorting]);

  useEffect(() => {
    setFilteredMovies(() => movies);
  }, [movies]);

  return (
    <div className='movies-container'>
      <ErrorBoundary>
        <SortingFilter propsFilter={filter} propsSorting={sortBy} filterChanged={filterChanged} sortByChanged={sortByChanged} />
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
          <b>{movies?.length}</b>movies found
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
            {movies?.map((i, index) => (
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