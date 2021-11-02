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
import DataService from '../../../services/service'
import './EditMovie.scss';

interface EditMovieProps {
    open: boolean,
    onClose: () => void,
    movieData: MovieData;
}

export const EditMovie: FC<EditMovieProps> = ({ open, onClose, movieData }) => {

    const [genre, setGenre] = useState<string>('');
    const [availableGenres, setAvailableGenres] = useState<(string | undefined)[]>([]);
    const [editedMovie, setEditedMovie] = useState<MovieData>();
    const [isFilled, setIsFilled] = useState<boolean | undefined>(false);

    useEffect(() => {
        DataService.getAllMovies().then((res: MovieData[]) => {
            const genresSet: (string | undefined)[] = Array.from(new Set(res.map(i => i.genres).flat()));
            setAvailableGenres(genresSet);
        })
        setEditedMovie({
            title: movieData.title,
            release_date: movieData.release_date,
            overview: movieData.overview,
            poster_path: movieData.poster_path,
            genres: movieData.genres,
            vote_average: movieData.vote_average,
            runtime: movieData.runtime
        })
    }, []);

    const handleDropDownChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGenre(event.target.value);
        setEditedMovie({ ...editedMovie, genres: [genre] })
    };

    useEffect(() => {
        const isEmpty = editedMovie && Object.values(editedMovie).every(x => !!x);
        setIsFilled(isEmpty);
    }, [editedMovie])

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
                    {"edit movie"}
                </DialogTitle>

                <DialogContent sx={{ backgroundColor: '#232323' }}>

                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <div className='title'>
                                <span>title</span>
                                <br />
                                <TextField
                                    error={!editedMovie?.title}
                                    helperText='Title is required'
                                    className='textfield'
                                    style={{ width: '320px', backgroundColor: '#424242' }}
                                    required
                                    id="outlined-required"
                                    placeholder="Movie name"
                                    value={editedMovie?.title}
                                    onChange={(event) => setEditedMovie({ ...editedMovie, title: event.target.value })}
                                />
                            </div>
                            <div className='release-date'>
                                <br />
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DesktopDatePicker
                                        label="Custom input"
                                        value={movieData.release_date}
                                        onChange={(newValue) => {
                                            setEditedMovie({ ...editedMovie, release_date: newValue });
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
                                <span>rating</span>
                                <br />
                                <TextField
                                    error={!editedMovie?.vote_average || typeof (!editedMovie?.vote_average) !== 'number'}
                                    helperText='Average is required and must be integer'
                                    style={{ backgroundColor: '#424242' }}
                                    className='textfield'
                                    required
                                    id="outlined-required"
                                    placeholder="7.8"
                                    value={editedMovie?.vote_average}
                                    onChange={(event) => setEditedMovie({ ...editedMovie, vote_average: Number(event?.target?.value) })}
                                />
                            </div>
                            <div className='movie-url'>
                                <span>movie-url</span>
                                <br />
                                <TextField
                                    error={!editedMovie?.poster_path}
                                    helperText='Poster path is required'
                                    className='textfield'
                                    style={{ width: '320px', backgroundColor: '#424242' }}
                                    id="outlined-read-only-input"
                                    placeholder="https://"
                                    value={editedMovie?.poster_path}
                                    onChange={(event) => setEditedMovie({ ...editedMovie, poster_path: event?.target?.value })}
                                />
                            </div>
                            <div className='genre'>
                                <span>genre</span>
                                <br />
                                <TextField
                                    error={!editedMovie?.genres}
                                    helperText='At least one genre is required'
                                    className='genre-selector'
                                    style={{ width: '320px', backgroundColor: '#424242' }}
                                    id="outlined-select-currency"
                                    select
                                    value={movieData?.genres?.join(', ')}
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
                                    error={!editedMovie?.runtime || typeof (editedMovie?.runtime) !== 'number'}
                                    helperText='Runtime is required and must be integer'
                                    className='textfield'
                                    style={{ backgroundColor: '#424242' }}
                                    id="outlined-read-only-input"
                                    placeholder="minutes"
                                    value={editedMovie?.runtime}
                                    onChange={(event) => setEditedMovie({ ...editedMovie, runtime: Number(event?.target?.value) })}
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
                            value={editedMovie?.overview}
                            onChange={(event) => setEditedMovie({ ...editedMovie, overview: event?.target?.value })}
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
                        disabled={!isFilled}
                        onClick={() => {
                            onClose;
                            DataService.updateMovie(editedMovie);
                        }}
                        variant="contained"
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