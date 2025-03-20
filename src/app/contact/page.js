'use client'

import Typewriter from 'typewriter-effect';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ResponsiveStack() {
  return (
    <>
    <section id="about" data-stellar-background-ratio="0.5">
    <Box sx={{m:'auto', mt:5}}>
        <Box sx={{mb:10}}>
            <center>
                <Typography variant='h1' color="secondary" sx={{fontWeight:"bold"}}>
                    <Typewriter
                      options={{
                        strings: ['Contact'],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                </Typography>
            </center>
        </Box>
      </Box>
    </section>    
    <Box sx={{ maxWidth: 800, m:'auto', mb:10, mt:10, overflow: 'hidden' }}>
    <Box sx={{mr:2, ml:2}}>
      <Typography>email to: farhanaz.rupaidha@gmail.com</Typography>
      <Typography>or simply fill the form below</Typography>
    <iframe
             src="https://tally.so/embed/nGxgAp?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
             width="100%"
             height="700"
             frameBorder="0"
             marginHeight="0"
             marginWidth="0"
             margin="auto"
             title="Contact">
    </iframe>
    </Box>
    </Box>
    </>
  );
}