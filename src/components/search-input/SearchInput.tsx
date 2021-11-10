import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchMovie } from '../../redux/moviesReducer';
import { useHistory } from 'react-router';
import './SearchInput.scss';

export const SearchInput: FC = () => {
    const [searchInput, setSearchInput] = useState<string>('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
    };

    const handleSearchMovie = () => {
        dispatch(searchMovie(searchInput));
        history.push({
            pathname: '/search',
            search: `?${searchInput}`
        });
    }

    return (
        <>
            <div className='search-input-panel'>
                <div className='search-input-header'>
                    <span>find your movie</span>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder='What do you want to watch?'
                        value={searchInput}
                        onChange={handleSearchInputChange}
                        className='search-input' />
                    <div
                        className='search-button'
                        onClick={() => console.log('search event')}>
                        <span className='search-button-caption' onClick={handleSearchMovie}>search</span>
                    </div>
                </div>
            </div>
        </>
    )
}