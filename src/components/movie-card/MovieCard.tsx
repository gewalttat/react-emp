import React, { FC, useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { MovieCardMenu } from '../movie-card-menu/MovieCardMenu';
import cardImage from '../../assets/images/movie-card.jpg'
import './MovieCard.scss'
import { MovieData } from '../movies-container/MoviesContainer';
import {useGlobalContext} from '../main-page/MainPage';


interface MovieDataProps {
movieData: MovieData;
}

export const MovieCard: FC<MovieDataProps> = ({movieData}) => {

    const [showCardMenu, setShowCardMenu] = useState<boolean>(false);
    const {showMovie, setShowMovie, setSelectedMovie} = useGlobalContext();

    return (
        <div onMouseEnter={() => setShowCardMenu(true)}>
            {showCardMenu &&
                <div className='card-menu'>
                    <MovieCardMenu movieData={movieData} />
                </div>}

            <Card
                sx={{
                    backgroundColor: '#232323',
                    width: 323.41,
                    height: 600,
                    borderRadius: '0px',
                    boxShadow: 'none',
                    zIndex: 1,
                }}>
                <CardActionArea onClick={() => {
                    setShowMovie(true);
                    setSelectedMovie(movieData);
                }}>
                    <CardMedia
                        component="img"
                        height="486"
                        image={cardImage}
                        alt="card image"
                    />
                    <CardContent sx={{
                        backgroundColor: '#232323',
                        padding: '0px',
                        paddingTop: '20px'
                    }}>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{
                                color: '#fff',
                                opacity: 0.7,
                                fontFamily: 'Montserrat',
                                fontWeight: 500,
                                fontSize: '18px',
                                lineHeight: '22px',
                                display: 'inline-flex',
                            }}>
                                {movieData.name}
                            <div className='movie-year'>{movieData.year}</div>
                        </Typography>

                        <Typography
                            sx={{
                                color: '#fff',
                                opacity: 0.5,
                                fontFamily: 'Montserrat',
                                fontWeight: 500,
                                fontSize: '14px',
                                lineHeight: '17px'
                            }}
                            variant="body2"
                            color="text.secondary">
                                {movieData.genre}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}