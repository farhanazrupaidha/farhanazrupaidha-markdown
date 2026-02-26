"use client"

import * as React from 'react';

import AppBottomBar from './appbottombar';
import Typewriter from 'typewriter-effect';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';

export default function Footer () {

  return (
<>
<Divider />
 <Box elevation={2} sx={{p:3}}>
     <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 4, sm: 2, md: 1 }}
        sx={{ml:3, mr:3}}
        justifyContent="center"
        alignItems="left"
      >
        <Box sx={{maxWidth:800, width:'100%'}}>
        <Typography variant='h3' sx={{height:'80px', mt:1, mb:3}}>
        <Typewriter
              options={{
                strings: ['Farhanaz', 'Rupaidha'],
                autoStart: true,
                loop: true,
              }}
            />
        </Typography>  
        </Box>
        <Box sx={{maxWidth:170, width:'100%'}}>
            <Typography variant="h6" sx={{fontWeight: 'bold'}} gutterBottom>
                Profile
            </Typography>
            <Typography variant="body1" gutterBottom>
                <Link href="/about" underline="hover" color='inherit'>
                    About
                </Link>
            </Typography>
            <Typography variant="body1" gutterBottom>
                <Link href="/contact" underline="hover" color='inherit'>
                    Contact
                </Link>
            </Typography>
        </Box>
        <Box sx={{maxWidth:170, width:'100%'}}>
            <Typography variant="h6" sx={{fontWeight: 'bold'}} gutterBottom>
                Explore
            </Typography>
            <Typography variant="body1" gutterBottom>
                <Link href="/works" underline="hover" color='inherit'>
                    Works
                </Link>
            </Typography>
          <Typography variant="body1" gutterBottom>
                <Link href="https://farhanazrupaidha.bandcamp.com" target="_blank" rel="noopener noreferrer" underline="hover" color='inherit'>
                    Music
                </Link>
            </Typography>
        </Box>        
        <Box sx={{maxWidth:270, width:'100%'}}>
            <Typography variant="h6" sx={{fontWeight: 'bold'}} gutterBottom>
                Download
            </Typography>
            <Typography variant="body1" gutterBottom>
                <Link href="/download" underline="hover" color='inherit'>
                    Download the Works
                </Link>
            </Typography>
        </Box>
      </Stack>
    </Box>
    <Divider />    
    <AppBottomBar />
</>
  );
}