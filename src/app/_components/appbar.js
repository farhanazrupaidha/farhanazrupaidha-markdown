"use client"

import * as React from 'react';

import DrawerToggle from "./drawer"

import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  text: {
  fontSize: '2rem',
    '@media (min-width:600px)': {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3.5rem',
    },
  },
  box: {
    backgroundColor: 'secondary',
    color:'black'
    }
}));

function ElevationScroll(props, journal) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function ResponsiveAppBar(props) {

  return (

<React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Box sx={{ mr:2, display: { xs: 'flex', md: 'none' } }}>
                <DrawerToggle />
            </Box>

            <IconButton
                size="medium"
                edge="start"
                color="inherit"
                aria-label="menu"
                href="/"
                sx={{ mr: 1 }}
            >
                <Avatar
                    alt="Farhanaz Rupaidha"
                    src="/images/flowerfru - 2024 - 2.jpg"
                    sx={{width:32, height:32}}
                />
            </IconButton>
            <Typography
                variant="h6"
                noWrap
                sx={{
                    mr: 2,
                    flexGrow: 1,
                    fontWeight: '700'
                }}
            >
            <Link href="/" color="inherit" underline="hover">
                Farhanaz Rupaidha
            </Link>
            </Typography>

            <Box sx={{ flexGrow: 0, mr:3, display: { xs: 'none', md: 'flex' } }}>
              <Button
                      href="/works"
                      color= 'secondary'
                      sx={{ my: 2, display: 'block' }}
                  >
                      Works
              </Button>     
              <Button
                      href="https://farhanazrupaidha.bandcamp.com"
                      target="_blank" 
                      rel="noopener noreferrer"
                      color= 'secondary'
                      sx={{ my: 2, display: 'block' }}
                  >
                      Music
              </Button>  
              <Button
                      href="/others"
                      color= 'secondary'
                      sx={{ my: 2, display: 'block' }}
                  >
                      Others
              </Button> 
              <Button
                      href="/download"
                      color= 'secondary'
                      sx={{ my: 2, display: 'block' }}
                  >
                      Download
              </Button> 
              <Button
                      href="/about"
                      color= 'secondary'
                      sx={{ my: 2, display: 'block' }}
                  >
                      About
              </Button> 
              <Button
                      href="/contact"
                      color= 'secondary'
                      sx={{ my: 2, display: 'block' }}
                  >
                      Contact
              </Button>                  
            </Box>            
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
export default ResponsiveAppBar;