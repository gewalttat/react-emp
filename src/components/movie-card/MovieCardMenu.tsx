import { IconButton, Menu, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { DeleteMovie } from '../modals/DeleteMovie';
import React, { FC, useState } from 'react';

const options = [
  'Edit',
  'Delete',
];

const ITEM_HEIGHT = 48;

export const MovieCardMenu: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openDialogName, setOpenDialog] = React.useState<string | null>('');

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openDeleteDialog = () => {
    setOpenDialog(() => 'delete');
    handleClose();
  };

  const openEditDialog = () => {
    setOpenDialog(() => 'edit');
    handleClose();
  };

  const closeDialog = () => {
    setOpenDialog(() => null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls="long-menu"
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
            backgroundColor: '#232323',
            color: '#fff'
          },
        }
        }
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === 'Pyxis'}
            onClick={openDeleteDialog}
            sx={{
              ":hover": {
                backgroundColor: '#f65261'
              }
            }}>
            {option}
          </MenuItem>
        ))}
      </Menu>
      <DeleteMovie open={openDialogName === 'delete'} onClose={closeDialog} />
    </div>
  );
}