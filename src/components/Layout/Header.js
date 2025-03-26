import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <AppBar position='fixed' sx={{ zIndex: 1201 }}>
      <Toolbar>
        {!isSidebarOpen && (
          <IconButton color='inherit' edge='start' onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant='h6' noWrap>
          Mini variant drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
