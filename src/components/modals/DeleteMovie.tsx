import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import React, { FC } from 'react';

interface DeleteMovieProps {
    open: boolean,
    onClose: () => void
}


export const DeleteMovie: FC<DeleteMovieProps> = ({ open, onClose }) => {
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
                    {"delete movie"}
                </DialogTitle>

                <DialogContent sx={{ backgroundColor: '#232323' }}>

                    <DialogContentText
                        id="alert-dialog-description"
                        sx={{
                            color: '#fff',
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 300,
                            padding: '0px 50px 0px 50px'
                        }}>Are you sure you want to delete this movie?
                    </DialogContentText>
                </DialogContent>

                <DialogActions sx={{ backgroundColor: '#232323', color: '#fff' }}>
                    <Button
                        onClick={onClose}
                        variant="contained"
                        sx={{
                            margin: '40px 40px 40px 40px',
                            backgroundColor: '#f65261',
                            ":hover": { backgroundColor: '#f33242' }
                        }}>CONFIRM</Button>
                </DialogActions>

            </Dialog>
        </div>
    );
}