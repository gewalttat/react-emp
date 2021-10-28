import { Paper, Grid, ButtonBase, Typography, IconButton } from '@material-ui/core';
import React, { FC } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './SelectedMovieInfo.scss'
import { useGlobalContext } from '../main-page/MainPage';
import { MovieData } from '../movies-container/MoviesContainer';

interface SelectedMovieInfoProps {
    selectedMovie: MovieData | null;
}

export const SelectedMovieInfo: FC<SelectedMovieInfoProps> = ({selectedMovie}) => {

    const { showMovie, setShowMovie } = useGlobalContext();

    const handleBackToSearch = () => {
       return setShowMovie(!showMovie);
    }

    return (
        <Paper sx={{ p: 2, margin: 0, flexGrow: 1, backgroundColor: '#232323', color: '#fff' }}>
            <span className='logo-text'>netflixroulette</span>
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{ height: 486, paddingLeft: 12 }}>
                        <img alt="complex" src={selectedMovie?.poster_path} className='movie-img'/>
                    </ButtonBase>
                </Grid>

                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs sx={{ marginTop: 1 }}>
                            <div style={{ display: 'inline-flex', marginLeft: 40}}>
                                <span className='movie-info-header'>{selectedMovie?.title}</span>
                                <div className='movie-info-rating'><span className='rating-text'>{selectedMovie?.vote_average}</span></div>
                            </div>
                            <Typography variant="body2" gutterBottom sx={{marginLeft: 5, marginTop: 1}}>
                                <span className='genre'>{selectedMovie?.genres.join(', ')}</span>
                            </Typography>

                            <Typography variant="body2" color="text.secondary" sx={{marginLeft: 5, marginTop: 2}}>
                                <span className='date-rotate'>{selectedMovie?.release_date}&nbsp;&nbsp;&nbsp;</span>
                                <span className='date-rotate'>&nbsp;&nbsp;&nbsp;2h 36m</span>
                            </Typography>

                            <Typography variant="body2" color="text.secondary" sx={{marginTop: 3, marginLeft: 5}}>
                                <span className='description'>{selectedMovie?.overview}</span>
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                            <IconButton aria-label="search" onClick={handleBackToSearch}>
                                <SearchIcon sx={{ fill: '#f65261', height: '30px', width: '30px' }} />
                            </IconButton>
                        </Typography>
                    </Grid>

                </Grid>
            </Grid>
        </Paper>
    );
}