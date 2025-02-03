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
            Imagine sleeping without ears. &nbsp;
          </Typography>
        </Marquee> 
      </Box>
      </Container>
    </>
  );
}
