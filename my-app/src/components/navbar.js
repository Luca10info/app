import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {red} from '@mui/material/colors'
function Navbar() {

    const color=red[500];

  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor: color}} position="static">
        <Toolbar >
          <Typography  variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Notes
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;