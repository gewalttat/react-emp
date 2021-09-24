import React, { FC } from 'react';

export const MovieCard: FC = () => {
    return (
        <div className='movie-card'>
            <div className='movie-card-poster'>
                <div className='circle-button'></div>
            </div>
            <div className='movie-name'></div>
            <div className='movie-genre'></div>
            <div className='movie-year'></div>
        </div>
    )
}