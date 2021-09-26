import { Grid, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import ErrorBoundary from '../error-boundary/ErrorBoundary';
import { MovieCard } from '../movie-card/MovieCard';
import { SortingFilter } from '../sorting-filter/SortingFilter';
import './MoviesContainer.scss'

export const MoviesContainer: FC = () => {
  return (
    <div className='movies-container'>
      <ErrorBoundary>
        <SortingFilter />
        <hr style={{
          width: '90%',
          marginLeft: '0px',
          marginTop: '0px',
          borderColor: '#424242'
        }}></hr>
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
          color="text.secondary"><b>39</b> movies found
        </Typography>
        <div className='movies-grid'>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12.5 }}>
            {Array.from(Array(6)).map((_, index) => (
              <Grid
                item xs={2} sm={4} md={4}
                key={index}>
                <MovieCard />
              </Grid>
            ))}
          </Grid>
        </div>
      </ErrorBoundary>
    </div>
  )
}