import { Paper, Grid, ButtonBase, Typography, IconButton } from '@material-ui/core';
import cardImage from '../../assets/images/movie-card.jpg'
import React, { FC } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './SelectedMovieInfo.scss'
import { useGlobalContext } from '../main-page/MainPage';

export const SelectedMovieInfo: FC = () => {

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
                        <img alt="complex" src={cardImage} />
                    </ButtonBase>
                </Grid>

                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs sx={{ marginTop: 1 }}>
                            <div style={{ display: 'inline-flex', marginLeft: 40}}>
                                <span className='movie-info-header'>PULP FICTION</span>
                                <div className='movie-info-rating'><span className='rating-text'>8.9</span></div>
                            </div>
                            <Typography variant="body2" gutterBottom sx={{marginLeft: 5, marginTop: 1}}>
                                <span className='genre'>Action & Adventure</span>
                            </Typography>

                            <Typography variant="body2" color="text.secondary" sx={{marginLeft: 5, marginTop: 2}}>
                                <span className='date-rotate'>1994&nbsp;&nbsp;&nbsp;</span>
                                <span className='date-rotate'>&nbsp;&nbsp;&nbsp;2h 36m</span>
                            </Typography>

                            <Typography variant="body2" color="text.secondary" sx={{marginTop: 3, marginLeft: 5}}>
                                <span className='description'>Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra</span>
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