"use client"

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import XIcon from '@mui/icons-material/X';

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  width:'100%',
  maxWidth:500
}));

export default function AppBottomBar () {
  const date = new Date();
  const year = date.getFullYear();  
  return (
  <>
  <Box justifyContent="center" alignItems="center" sx={{ml:2, mr:2}}>
     <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 60 }}
        justifyContent="center"
        alignItems="center"
      >
        <Item>
          <IconButton href="https://www.youtube.com/@farhanazrupaidha" color="secondary" aria-label="Follow me on YouTube">
            <YouTubeIcon />
          </IconButton>
          <IconButton href="https://www.instagram.com/farhanazrupaidha/" color="secondary" aria-label="Follow me on Instagram">
            <InstagramIcon />
          </IconButton>
        </Item>

        <Item>
            <Typography variant="caption" gutterBottom>
                © 2017 - {year} <Link href="https://www.farhanazrupaidha.com" color="secondary"> © Farhanaz Rupaidha</Link>. All rights reserved.
            </Typography>
        </Item>
      </Stack>
  </Box>

</>
  );
}