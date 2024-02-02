'use client';
import CloseIcon from '@mui/icons-material/Close';
import { ClickAwayListener, DrawerProps, IconButton } from '@mui/material';
import React from 'react';
import { Box } from '..';
import { StyledDrawer } from './styles';

interface Props extends DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer: React.FC<Props> = ({ isOpen, onClose, ...props }) => {
  return (
    <StyledDrawer
      open={isOpen}
      anchor="right"
      className="drawer-mui"
      PaperProps={{
        sx: { width: '40%', color: 'white' },
      }}
      {...props}
    >
      <ClickAwayListener onClickAway={onClose}>
        <Box direction="column" padding="1.5rem" gap="1.5rem" height="100%">
          <Box>
            <IconButton onClick={onClose} sx={{ alignSelf: 'flex-start' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          {props.children}
        </Box>
      </ClickAwayListener>
    </StyledDrawer>
  );
};

export default Drawer;
