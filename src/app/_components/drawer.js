"use client"

import * as React from 'react';
import dynamic from 'next/dynamic';

import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import DragHandleIcon from '@mui/icons-material/DragHandle';

function DrawerToggle () {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Button color="inherit" onClick={() => setOpen(true)} sx={{mr:1}}><DragHandleIcon /></Button>
      <Drawer open={open} anchor={"top"} onClose={() => setOpen(false)}>
        <Toolbar sx={{m:'auto'}}>
                <IconButton
                  size="medium"
                  edge="start"
                  color="primary"
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
            <Typography variant="h6" component="div" sx={{fontWeight: 'bold'}}>
                Farhanaz Rupaidha
            </Typography>
        </Toolbar>
        <Divider sx={{m:1}} />
          <List sx={{p:2}}>
            <ListItem disablePadding>
              <ListItemText>
                Profile
              </ListItemText>
            </ListItem>
              <Divider sx={{mr:5}} />
                <ListItem disablePadding>
                  <ListItemButton href="/about">
                    <ListItemText>
                      About 
                    </ListItemText>
                  </ListItemButton>
                </ListItem>  
                <ListItem disablePadding>
                  <ListItemButton href="/contact">
                    <ListItemText>
                      Contact 
                    </ListItemText>
                  </ListItemButton>
                </ListItem>            
          </List>            
        <Divider sx={{m:1}} />
          <List sx={{p:2}}>
            <ListItem disablePadding>
              <ListItemText>
                Explore
              </ListItemText>
            </ListItem>
              <Divider sx={{mr:5}} />
                <ListItem disablePadding>
                  <ListItemButton href="/works">
                    <ListItemText>
                      Works
                    </ListItemText>
                  </ListItemButton>
                </ListItem> 
                <ListItem disablePadding>
                  <ListItemButton href="https://farhanazrupaidha.bandcamp.com">
                    <ListItemText>
                      Music
                    </ListItemText>
                  </ListItemButton>
                </ListItem>             
          </List>        
        <Divider sx={{m:1}} />
          <List sx={{p:2}}>
            <ListItem disablePadding>
              <ListItemText>
                Others
              </ListItemText>
            </ListItem>
              <Divider sx={{mr:5}} />
                <ListItem disablePadding>
                  <ListItemButton href="https://studiofrugreenproject.com">
                    <ListItemText>
                      Studiofru | Green Project
                    </ListItemText>
                  </ListItemButton>
                </ListItem>             
          </List>
                     
        <Button color="inherit" onClick={() => setOpen(false)}>Close</Button>
      </Drawer>
    </div>
  );
}

export default DrawerToggle;