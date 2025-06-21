import Container from "@/app/_components/container";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

import Marquee from "react-fast-marquee";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(0);

  const date = new Date();
  const year = date.getFullYear();  

  return (
    <>
      <Container>
      <Box sx={{m:'auto', mt:5}}>
        <Box sx={{mb:10}}>
            <center>
                <Typography variant='h2' color="secondary" sx={{fontWeight:"bold"}}>
                <Marquee>Works</Marquee>
                </Typography>
            </center>
        </Box>
      </Box>
      <Stack spacing={{ xs: 2, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" justifyContent="center" sx={{mt:5, mb:10}}>
        {morePosts.length > 0 && 
          <MoreStories posts={morePosts} />
        } 
       </Stack>  
      </Container>
    </>
  );
}