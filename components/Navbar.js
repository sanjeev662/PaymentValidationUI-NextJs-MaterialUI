// components/Navbar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {
  return (
    <AppBar position="static"  style={{backgroundColor:"#39424e",alignItems: "center"}}>
      <Toolbar>
        <Typography variant="h6" component="div" style={{color: "var(--primary-color)",fontWeight:"bold"}}>
        Payment Validation
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
