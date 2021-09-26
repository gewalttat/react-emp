import { createTheme, FormControl, MenuItem, Select, SelectChangeEvent, Tab, Tabs, ThemeProvider, Button } from '@material-ui/core';
import React, { FC, useState } from 'react';
import './SortingFilter.scss'

export const SortingFilter: FC = () => {
    const [value, setValue] = useState<number>(0);
    const [filter, setFilter] = React.useState<string>('');
    const [error, setError] = useState<boolean>(false);

    const movieGenres = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];

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
    };

    if (error) {
        throw new Error('error');
    }

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
                        <Tab key={index} value={index} label={genre} sx={{ color: '#fff', fontWeight: 500, fontSize: 16 }} />
                    )}
                    <Tab
                        value='error'
                        label='error'
                        onClick={() => setError(() => true)}
                        sx={{ color: '#fff', fontWeight: 500, fontSize: 16 }} />
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
                            {movieGenres.map((genre: string, index: number) =>
                                <MenuItem
                                    key={index} value={index}>{genre}</MenuItem>
                            )}
                            <MenuItem
                                onClick={() => setError(() => true)}>Error boundry</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </ThemeProvider>
        </div>
    )
}