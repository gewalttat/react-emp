import React, { FC, useEffect, useState } from 'react';
import { SearchInput } from '../search-input/SearchInput';
import { AddMovie } from '../modals/AddMovie/AddMovie';
import { SelectedMovieInfo } from '../selected-movie-info/SelectedMovieInfo';
import { useGlobalContext } from '../main-page/MainPage';
import './AppHeader.scss'
import { MovieData } from '../movies-container/MoviesContainer';
import { useHistory } from 'react-router';

interface AppHeaderProps {
selectedMovie: MovieData | null
}

export const AppHeader: FC<AppHeaderProps> = ({selectedMovie}) => {
  const [openAddMovieDialog, setOpenAddMovieDialog] = useState<boolean>(false);
  const { showMovie } = useGlobalContext();
  const history = useHistory();

  const openAddDialog = () => {
    setOpenAddMovieDialog(true);
  };

  const closeDialog = () => {
    setOpenAddMovieDialog(false);
  };

  useEffect(() => {
    showMovie && history.push({
      pathname: '/search',
      search: `?movie=${selectedMovie?.id}`
  });
  }, [showMovie])


  return (

    <>
      {showMovie ? <SelectedMovieInfo selectedMovie={selectedMovie}/> :
        <div className='header'>
          <div className='header-text'>
            <span className='header-text__bold'>netflix</span>
            <span>roulette</span>
          </div>
          <div className='header-add-button' onClick={openAddDialog}>
            <span className='header-add-button__caption'>+ add movie</span>
          </div>
          <SearchInput />
          <AddMovie open={openAddMovieDialog} onClose={closeDialog} />
        </div>
      }
    </>
  )
}