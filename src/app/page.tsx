import Container from "@/app/_components/container";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Marquee from "react-fast-marquee";
import Link from '@mui/material/Link';

export default function Index() {

  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  return (
    <>
      <Container>
        <Typography variant="h5" sx={{mt:5}}>2026</Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="25vh"
        >
          <Marquee direction="left">
            <Typography variant="h1" gutterBottom> 
              <Link href="https://www.farhanazrupaidha.com/posts/dont_fold_too_much">
              Don't fold too much. &nbsp;
              </Link>
            </Typography>
          </Marquee> 
        </Box>        
        <Typography variant="h5" sx={{mt:5}}>2025</Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="25vh"
        >
          <Marquee direction="right">
            <Typography variant="h1" gutterBottom> 
              <Link href="https://www.farhanazrupaidha.com/posts/aroma_pesisir">
               Crowds of people, young and old, men and women, pour into the streets, singing and dancing. &nbsp;
              </Link>
            </Typography>
          </Marquee> 
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="25vh"
        >
          <Marquee direction="left">
            <Typography variant="h1" gutterBottom>
              Imagine sleeping without ears. &nbsp;
            </Typography>
          </Marquee> 
        </Box>
        <Typography variant="h5" sx={{mt:5}}>2024</Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="25vh"
        >
          <Marquee direction="right">
            <Typography variant="h1" gutterBottom> 
              <Link href="https://www.farhanazrupaidha.com/posts/bark_studies">
               To date, more than one hundred plant species have been recorded and compiled on the website https://www.studiofrugreenproject.com  &nbsp;
              </Link>
            </Typography>
          </Marquee> 
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="25vh"
        >
          <Marquee direction="left">
            <Typography variant="h1" gutterBottom> 
              <Link href="https://www.farhanazrupaidha.com/posts/tapak_puya">
                Is there a return for the living generation?  &nbsp;
              </Link>
            </Typography>
          </Marquee> 
        </Box>
      <Typography variant="h5" sx={{mt:5}}>2024</Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="25vh"
        >
          <Marquee direction="right">
            <Typography variant="h1" gutterBottom> 
              <Link href="https://www.farhanazrupaidha.com/posts/bark_studies">
               To date, more than one hundred plant species have been recorded and compiled on the website https://www.studiofrugreenproject.com  &nbsp;
              </Link>
            </Typography>
          </Marquee> 
        </Box>
        <Typography variant="h5" sx={{mt:5}}>2023</Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="25vh"
        >
          <Marquee direction="left">
            <Typography variant="h1" gutterBottom> 
              <Link href="https://www.farhanazrupaidha.com/posts/blue_neptune">
                A game we love and the money to bet. &nbsp;
              </Link>
            </Typography>
          </Marquee> 
        </Box>
        <Typography variant="h5" sx={{mt:5}}>2020</Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="25vh"
        >
          <Marquee direction="right">
            <Typography variant="h1" gutterBottom> 
              <Link href="https://www.farhanazrupaidha.com/posts/deconstruction_reconstruction">
                The artist purposely wants to be as close as possible with the viewers. &nbsp;
              </Link>
            </Typography>
          </Marquee> 
        </Box>
        <Typography variant="h5" sx={{mt:5}}>2019</Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="25vh"
        >
          <Marquee direction="left">
            <Typography variant="h1" gutterBottom> 
              <Link href="https://www.farhanazrupaidha.com/posts/techno_inferno">
                We hurt the land of nature by extracting fuel then give back to it as a waste. &nbsp;
              </Link>
            </Typography>
          </Marquee> 
        </Box>
        <Typography variant="h5" sx={{mt:5}}>2015</Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="25vh"
        >
          <Marquee direction="right">
            <Typography variant="h1" gutterBottom> 
              <Link href="https://www.farhanazrupaidha.com/posts/learning_to_become">
                Furthermore, work is an artifact of the activities of psychotherapy. &nbsp;
              </Link>
            </Typography>
          </Marquee> 
        </Box>
        <Typography variant="h5" sx={{mt:5}}>2014</Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="25vh"
        >
          <Marquee direction="right">
            <Typography variant="h1" gutterBottom> 
              <Link href="https://www.farhanazrupaidha.com/posts/24_grids">
                 The creator donated most of the basic stories and insights that stem from the experience of living for 24 years in Cikarang. &nbsp;
              </Link>
            </Typography>
          </Marquee> 
        </Box>
      </Container>
    </>
  );
}
