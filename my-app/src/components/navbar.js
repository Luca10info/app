import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {red} from '@mui/material/colors'
import logo from '../img/logo_app_reverso.png'
import logo1 from '../img/logo_app.png'
function Navbar() {

  const color=red[500];

  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor: color}} position="static">
        <Toolbar sx={{display:"column", mx:"auto"}}>
          <img src={logo1}  height="45"/>
            <Typography sx={{ml:"5px"}} variant="h5">
              NoteShare
            </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;