import React, { FC } from 'react';
import { SearchInput } from '../search-input/SearchInput';
import './AppHeader.scss'

export const AppHeader: FC = () => {
  return (
    <div className='header'>
      <div className='header-text'>
        <span className='header-text__bold'>netflix</span> <span>roulette</span>
      </div>
      <div className='header-add-button' onClick={() => console.log('add event')}>
        <span className='header-add-button__caption'>+ add movie</span>
      </div>
      <SearchInput />
    </div>
  )
}