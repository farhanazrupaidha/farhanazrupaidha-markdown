'use client'

import Typewriter from 'typewriter-effect';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Contact() {
  return (
    <>
      <section id="about" data-stellar-background-ratio="0.5">
        <Box sx={{ m: 'auto', mt: 5 }}>
          <Box sx={{ mb: 10 }}>
            <center>
              <Typography variant='h1' color="secondary" sx={{ fontWeight: 'bold' }}>
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

      <Box sx={{ maxWidth: 800, mx: 'auto', mb: 6, px: 2 }}>
        <Card variant="outlined" sx={{ borderRadius: 3 }}>
          <CardContent sx={{ p: 3 }}>
            <Grid container spacing={2}>

              <Grid item xs={12}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <LocationOnIcon color="primary" />
                  <Typography variant="body1">
                    Cirebon, Indonesia & Frankfurt am Main, Germany
                  </Typography>
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <EmailIcon color="primary" />
                  <Link
                    href="mailto:studiofru.work@gmail.com"
                    underline="hover"
                    color="inherit"
                  >
                    studiofru.work@gmail.com
                  </Link>
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <LanguageIcon color="primary" />
                  <Link
                    href="https://www.farhanazrupaidha.com"
                    underline="hover"
                    color="inherit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    farhanazrupaidha.com
                  </Link>
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <Divider sx={{ my: 1 }} />
                <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                  <IconButton
                    href="https://www.instagram.com/farhanazrupaidha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="secondary"
                    aria-label="Instagram"
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton
                    href="https://www.youtube.com/@farhanazrupaidha"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="secondary"
                    aria-label="YouTube"
                  >
                    <YouTubeIcon />
                  </IconButton>
                </Stack>
              </Grid>

            </Grid>
          </CardContent>
        </Card>
      </Box>

      <Box sx={{ maxWidth: 800, mx: 'auto', mb: 10, px: 2 }}>
        <Typography variant="body1" sx={{ mb: 1 }}>
          or simply fill the form below
        </Typography>
        <iframe
          src="https://tally.so/embed/nGxgAp?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          width="100%"
          height="700"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Contact"
        >
        </iframe>
      </Box>
    </>
  );
}