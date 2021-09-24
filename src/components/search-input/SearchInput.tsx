import React, { FC } from 'react';
import './SearchInput.scss';

export const SearchInput: FC = () => {
    return (
        <>
            <div className='search-input-panel'>
                <div className='search-input-header'>
                    <span>find your movie</span>
                </div>
                <div>
                    <input type="text" placeholder='What do you want to watch?' className='search-input'></input>
                    <div className='search-button' onClick={() => console.log('search event')}>
                        <span className='search-button-caption'>search</span>
                    </div>
                </div>
            </div>
        </>
    )
}