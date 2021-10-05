import React, { FC, useState, useContext, createContext } from 'react';
import { AppFooter } from '../app-footer/AppFooter';
import { AppHeader } from '../app-header/AppHeader';
import { MoviesContainer } from '../movies-container/MoviesContainer';


interface showMovieContext {
    showMovie: boolean;
    setShowMovie: (item: boolean) => void;
}

export const MyGlobalContext = createContext<showMovieContext>({
    showMovie: false,
    setShowMovie: () => { /**/ }
});

export const useGlobalContext: () => showMovieContext = () => useContext(MyGlobalContext);


export const MainPage: FC = () => {

    const [showMovie, setShowMovie] = useState<boolean>(false);


    return (
        <>
            <MyGlobalContext.Provider value={{ showMovie, setShowMovie }}>
                <AppHeader />
                <MoviesContainer />
                <AppFooter />
            </MyGlobalContext.Provider>
        </>
    )
}