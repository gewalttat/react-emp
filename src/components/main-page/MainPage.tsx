import React, { FC, useState, useContext, createContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { selectMovies } from '../../redux/moviesReducer';
import { AppFooter } from '../app-footer/AppFooter';
import { AppHeader } from '../app-header/AppHeader';
import { MovieData, MoviesContainer } from '../movies-container/MoviesContainer';


interface showMovieContext {
    showMovie: boolean;
    setShowMovie: (item: boolean) => void;
    selectedMovie: MovieData | null;
    setSelectedMovie: (item: MovieData) => void;
}

export const MyGlobalContext = createContext<showMovieContext>({
    showMovie: false,
    setShowMovie: () => { /**/ },
    selectedMovie: null,
    setSelectedMovie: () => { /**/ }
});

export const useGlobalContext: () => showMovieContext = () => useContext(MyGlobalContext);


export const MainPage: FC = () => {

    const [showMovie, setShowMovie] = useState<boolean>(false);
    const [selectedMovie, setSelectedMovie] = useState<MovieData | null>(null);
    const { movies } = useSelector(selectMovies);
    const getSelectedMovieId = new URLSearchParams(useLocation().search).get('movie');

    useEffect(() => {
        const movieFromQuery = movies.filter(i => i.id === Number(getSelectedMovieId));
        setSelectedMovie(movieFromQuery[0]);
    }, [movies, getSelectedMovieId]);

    return (
        <>
            <MyGlobalContext.Provider value={{ showMovie, setShowMovie, selectedMovie, setSelectedMovie }}>
                <AppHeader selectedMovie={selectedMovie}/>
                <MoviesContainer />
                <AppFooter />
            </MyGlobalContext.Provider>
        </>
    )
}