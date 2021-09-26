import React, { FC, useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { MovieCardMenu } from './MovieCardMenu';
import cardImage from '../../assets/images/movie-card.jpg'
import './MovieCard.scss'

export const MovieCard: FC = () => {

    const [showCardMenu, setShowCardMenu] = useState<boolean>(false);

    return (
        <div onMouseEnter={() => setShowCardMenu(() => true)}
            onMouseLeave={() => setShowCardMenu(() => false)}>

            {showCardMenu &&
                <div className='card-menu'>
                    <MovieCardMenu />
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
                <CardActionArea>
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
                            }}>Pulp Fiction
                            <div className='movie-year'>2004</div>
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
                            color="text.secondary">Action & Adventure
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}