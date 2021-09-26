import React, { FC } from 'react';
import { AppFooter } from '../app-footer/AppFooter';
import { AppHeader } from '../app-header/AppHeader';
import { MoviesContainer } from '../movies-container/MoviesContainer';

export const MainPage: FC = () => {
    return (
        <>
            <AppHeader />
            <MoviesContainer/>
            <AppFooter />
        </>
    )
}