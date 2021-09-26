import React, { FC } from 'react';
import ErrorBoundary from '../error-boundary/ErrorBoundary';
import { SortingFilter } from '../sorting-filter/SortingFilter';
import './MoviesContainer.scss'

export const MoviesContainer: FC = () => {
  return (
    <div className='movies-container'>
      <ErrorBoundary>
        <SortingFilter />
      </ErrorBoundary>
    </div>
  )
}