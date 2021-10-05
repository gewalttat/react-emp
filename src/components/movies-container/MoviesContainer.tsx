import { Grid, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import ErrorBoundary from '../error-boundary/ErrorBoundary';
import { MovieCard } from '../movie-card/MovieCard';
import { SortingFilter } from '../sorting-filter/SortingFilter';
import moment from 'moment';
import './MoviesContainer.scss';

export interface MovieData {
  name: string,
  year: string,
  genre: string,
  rating: string,
  runtime: string,
  overview: string
}

export const MoviesContainer: FC = () => {

  const movieData: MovieData = {
    name: 'Pulp Fiction',
    year: moment().subtract(10, 'days').calendar(),
    genre: 'CRIME',
    rating: '7.8',
    runtime: '137',
    overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  };

  return (
    <div className='movies-container'>
      <ErrorBoundary>
        <SortingFilter />
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
          <b>39</b>movies found
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
            {Array.from(Array(6)).map((_, index) => (
              <Grid
                item
                xs={2}
                sm={4}
                md={4}
                key={index}>
                <MovieCard movieData={movieData} />
              </Grid>
            ))}
          </Grid>
        </div>
      </ErrorBoundary>
    </div>
  )
}