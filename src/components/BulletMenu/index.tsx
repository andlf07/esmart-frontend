"use client";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu } from "@mui/material";
import React from "react";
import { Box } from "..";

interface Props {
  children: React.ReactNode;
  handlers: any;
}

const BulletMenu: React.FC<Props> = ({ children, handlers }) => {
  const { handleClick, handleClose, open, anchorEl } = handlers;

  return (
    <Box>
      <IconButton
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {children}
      </Menu>
    </Box>
  );
};

export default BulletMenu;
