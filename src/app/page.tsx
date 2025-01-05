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
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="55vh"
      >
        <Marquee direction="left">
          <Typography variant="h1" gutterBottom>
            Rundgang 2025, 7 – 9 February 2025, 10:00–20:00 &nbsp;
          </Typography>
        </Marquee> 
        <Marquee direction="right">
          <Typography variant="h1" gutterBottom>
          Städelschule, Dürerstaße 10, Frankfurt &nbsp;
          </Typography>
        </Marquee> 
      </Box>
      </Container>
    </>
  );
}
