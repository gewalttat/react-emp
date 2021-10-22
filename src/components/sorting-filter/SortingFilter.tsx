import { createTheme, FormControl, MenuItem, Select, SelectChangeEvent, Tab, Tabs, ThemeProvider } from '@material-ui/core';
import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { ResponseMoviesType } from '../movies-container/MoviesContainer';
import './SortingFilter.scss'

interface SortingFilterProps {
    sortByChanged: (newValue: string) => void;
    filterChanged: (newValue: string) => void;
}
export const SortingFilter: FC<SortingFilterProps> = ({ filterChanged, sortByChanged }) => {
    const [value, setValue] = useState<number>(0);
    const [filter, setFilter] = React.useState<string>('');
    const [movieGenres, setMovieGenres] = useState<string[]>([]);

    useEffect(() => {
        axios.get<ResponseMoviesType>(`http://localhost:4000/movies`).then((res) => {
            setMovieGenres(Array.from(new Set(res.data.data.map(i => i.genres).flat())));
        })
    }, []);

    const theme = createTheme({
        palette: {
            primary: {
                main: '#fff',
            },
            secondary: {
                main: '#f65261',
            },
        },
    });

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleDropDownChange = (event: SelectChangeEvent) => {
        setFilter(event.target.value);
        sortByChanged(event.target.value);
    };

    return (
        <div className='sorting-filter-container'>
            <ThemeProvider theme={theme}>
                <Tabs
                    value={value}
                    onChange={handleTabChange}
                    textColor="primary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example">
                    {movieGenres.map((genre: string, index: number) =>
                        <Tab
                            key={index}
                            value={index}
                            label={genre}
                            sx={{ color: '#fff', fontWeight: 500, fontSize: 16 }}
                            onClick={() => filterChanged(genre)} />
                    )}
                </Tabs>

                <span className='sort-label'>sort by</span>
                <div className='filter-wrapper'>
                    <FormControl
                        variant="standard"
                        sx={{
                            m: 1,
                            minWidth: 120,
                            width: 150,
                            color: '#fff',
                            backgroundColor: '#232323',
                            borderBottom: '0px solid #f65262',
                            svg: { fill: '#f65262' },
                        }}>
                        <Select
                            sx={{ color: '#fff', borderBottom: 'none', ":after": { borderBottom: 'none' }, ":before": { borderBottom: 'none' }, ":hover": { borderBottom: 'none' } }}
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={filter}
                            onChange={handleDropDownChange}>
                            <MenuItem value={'release_date'}>Release date</MenuItem>
                            <MenuItem value={'vote_average'}>Rating</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </ThemeProvider>
        </div>
    )
}