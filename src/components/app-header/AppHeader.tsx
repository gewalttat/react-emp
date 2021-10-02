import React, { FC, useState } from 'react';
import { SearchInput } from '../search-input/SearchInput';
import {AddMovie} from '../modals/AddMovie/AddMovie';
import './AppHeader.scss'

export const AppHeader: FC = () => {
  const [openDialogName, setOpenDialog] = useState<string | null>('');

  const openAddDialog = () => {
    setOpenDialog(() => 'add');
  };

  const closeDialog = () => {
    setOpenDialog(() => null);
  };

  return (
    <div className='header'>
      <div className='header-text'>
        <span className='header-text__bold'>netflix</span>
        <span>roulette</span>
      </div>
      <div className='header-add-button' onClick={openAddDialog}>
        <span className='header-add-button__caption'>+ add movie</span>
      </div>
      <SearchInput />
      <AddMovie open={openDialogName === 'add'} onClose={closeDialog} />
    </div>
  )
}