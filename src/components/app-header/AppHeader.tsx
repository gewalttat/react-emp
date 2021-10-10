import React, { FC, useState } from 'react';
import { SearchInput } from '../search-input/SearchInput';
import { AddMovie } from '../modals/AddMovie/AddMovie';
import { SelectedMovieInfo } from '../selected-movie-info/SelectedMovieInfo';
import { useGlobalContext } from '../main-page/MainPage';
import './AppHeader.scss'

export const AppHeader: FC = () => {
  const [openAddMovieDialog, setOpenAddMovieDialog] = useState<boolean>(false);
  const { showMovie } = useGlobalContext();

  const openAddDialog = () => {
    setOpenAddMovieDialog(true);
  };

  const closeDialog = () => {
    setOpenAddMovieDialog(false);
  };

  return (

    <>
      {showMovie ? <SelectedMovieInfo/> :
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