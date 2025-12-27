import Container from "@/app/_components/container";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Marquee from "react-fast-marquee";

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
          <Marquee direction="right">
            <Typography variant="h1" gutterBottom>
              don't fold too much. &nbsp;
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
