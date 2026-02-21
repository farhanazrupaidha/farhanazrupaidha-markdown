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

      </Container>
    </>
  );
}
