import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Box,
    TextField,
    TextareaAutosize,
    MenuItem,
} from '@material-ui/core';
import { DesktopDatePicker } from '@material-ui/lab';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import React, { FC, useEffect, useState } from 'react';
import { MovieData } from '../../movies-container/MoviesContainer';
import DataService from '../../../services/service';
import '../EditMovie/EditMovie.scss';

interface AddMovieProps {
    open: boolean,
    onClose: () => void
}

export const AddMovie: FC<AddMovieProps> = ({ open, onClose }) => {

    const [value, setValue] = useState<Date | null>(null);
    const [genre, setGenre] = useState<string>('');
    const [availableGenres, setAvailableGenres] = useState<(string | undefined)[]>([]);
    const [movie, setMovie] = useState<MovieData>();

    console.log(movie?.title);
    console.log(movie, 'your movie');

    useEffect(() => {
        DataService.getAllMovies().then((res: MovieData[]) => {
            const genresSet: (string | undefined)[] = Array.from(new Set(res.map(i => i.genres).flat()));
            setAvailableGenres(genresSet);
        })
    }, []);

    const handleDropDownChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGenre(event.target.value);
        setMovie({...movie, genres: [event.target.value]})
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">

                <DialogTitle
                    id="alert-dialog-title"
                    sx={{
                        backgroundColor: '#232323',
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: 300,
                        fontSize: '40px',
                        lineHeight: '49px',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        color: '#FFFFFF',
                        padding: '40px 40px 40px 70px'
                    }}>
                    {"add movie"}
                </DialogTitle>

                <DialogContent sx={{ backgroundColor: '#232323' }}>
                    <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }} noValidate autoComplete="off">
                        <div>
                            <div className='title'>
                                <span>title</span>
                                <br />
                                <TextField
                                    className='textfield'
                                    style={{ width: '320px', backgroundColor: '#424242' }}
                                    required
                                    id="outlined-required"
                                    onChange={(event) => setMovie({...movie, title: event.target.value})}
                                    placeholder="Movie name" />
                            </div>
                            <div className='release-date'>
                                <br />
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DesktopDatePicker
                                        label="Custom input"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                            setMovie({...movie, release_date: newValue?.toISOString().slice(0,10)});
                                        }}
                                        renderInput={({ inputRef, inputProps, InputProps }) => (
                                            <Box className='datepicker'>
                                                <span>release date</span>
                                                <input ref={inputRef} {...inputProps} placeholder='Select date' />
                                                {InputProps?.endAdornment}
                                            </Box>
                                        )}
                                    />
                                </LocalizationProvider>
                            </div>
                            <div className='rating'>
                                <span>overview</span>
                                <br />
                                <TextField
                                    style={{ backgroundColor: '#424242' }}
                                    className='textfield'
                                    required
                                    id="outlined-required"
                                    placeholder="7.8"
                                    onChange={(event) => setMovie({...movie, vote_average: Number(event.target.value)})}
                                />
                            </div>
                            <div className='movie-url'>
                                <span>movie-url</span>
                                <br />
                                <TextField
                                    className='textfield'
                                    style={{ width: '320px', backgroundColor: '#424242' }}
                                    id="outlined-read-only-input"
                                    placeholder="https://"
                                    onChange={(event) => setMovie({...movie, poster_path: event.target.value})}
                                />
                            </div>
                            <div className='genre'>
                                <span>genre</span>
                                <br />
                                <TextField
                                    className='genre-selector'
                                    style={{ width: '320px', backgroundColor: '#424242' }}
                                    id="outlined-select-currency"
                                    select
                                    value={genre}
                                    onChange={handleDropDownChange}
                                >
                                    {availableGenres?.map((genre: string | undefined) => (
                                        <MenuItem key={genre} value={genre}>
                                            {genre}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div>
                            <div className='runtime'>
                                <span>runtime</span>
                                <br />
                                <TextField
                                    className='textfield'
                                    style={{ backgroundColor: '#424242' }}
                                    id="outlined-read-only-input"
                                    placeholder="minutes"
                                    onChange={(event) => setMovie({...movie, runtime: Number(event.target.value)})}
                                />
                            </div>
                        </div>
                    </Box>

                    <div className='overview'>
                        <span>overview</span>
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={3}
                            className='overview__textarea'
                            placeholder='Movie description'
                            onChange={(event) => setMovie({...movie, overview: event.target.value})}
                        />
                    </div>
                </DialogContent>

                <DialogActions sx={{ backgroundColor: '#232323', color: '#fff' }}>
                    <Button
                        onClick={onClose}
                        variant="contained"
                        sx={{
                            margin: '20px 20px 40px 40px',
                            backgroundColor: 'transparent',
                            border: '1px solid #f65261',
                            color: '#f65261',
                            ":hover": { background: 'transparent', color: '#fff', border: '1px solid #fff' }
                        }}>RESET</Button>

                    <Button
                        onClick={() => {
                            onClose();
                            DataService.createMovie(movie);
                        }}
                        variant="contained"
                        type='submit'
                        sx={{
                            margin: '20px 20px 40px 40px',
                            backgroundColor: '#f65261',
                            ":hover": { backgroundColor: '#f33242' }
                        }}>SUBMIT</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}