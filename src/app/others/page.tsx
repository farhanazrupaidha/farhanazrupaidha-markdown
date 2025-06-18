'use client'

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  maxWidth: 700,
  width:'100%',
}));

const Item2 = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1)
}));

export default function Index() {

  return (
    <Box sx={{mt:15, mb:10, ml: 5, mr:5}}>
    <Typography variant='h2' sx={{mb:7}}>Other Projects</Typography>

    <Box sx={{bgcolor: 'background.default'}}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 5, sm: 2, md: 4 }}
        sx={{mb:10}}
        justifyContent="center"
        alignItems="center"
      >
        <Item>
            <Typography variant='h3' sx={{fontWeight:"bold", mb: 2}}>Studiofru | Green Project</Typography>
            <Typography variant="body1" color="secondary" sx={{mb:2}}><Link href="https://studiofrugreenproject.com">studiofrugreenproject.com</Link></Typography>
            <Typography variant="body1" color="secondary" sx={{mb:5}}>A digital platform</Typography>
        </Item>

        <Item>
            <Card>
                <CardMedia
                    sx={{ height: 350 }}
                    image="https://res.cloudinary.com/studiofruworks/image/upload/v1739436583/studiofrugreenproject/knlp4hkrxp6ocjpzjgfb.jpg"
                    title="Studiofru | Green Project"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Studiofru | Green Project
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                         A digital platform or website that focuses on topics related to flora, fauna, environmental science, health, culinary culture, and local knowledge—especially within the context of Indonesia. It functions like an encyclopedia or educational portal, offering articles, photographs, and scientific as well as cultural notes.
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="secondary" href="https://www.studiofrugreenproject.com/" variant="contained" sx={{mb:1}}>See it live</Button>
                    </CardActions>
            </Card>
      </Item>
    </Stack>

    <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 5, sm: 2, md: 4 }}
        justifyContent="center"
        alignItems="center"
        sx={{mb:10}}
      >  
        <Item>
            <Card>
                <CardMedia
                    sx={{ height: 350 }}
                    image="https://www.yayasanwangsakerta.org/images/Wangsakerta%20-%205.jpg"
                    title="Yayasan Wangsakerta"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Yayasan Wangsakerta
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        a profile website serving to present Yayasan Wangsakerta Foundation’s identity, activities, and social mission.
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="secondary" href="https://www.yayasanwangsakerta.org" variant="contained" sx={{mb:1}}>See it live</Button>
                    </CardActions>
            </Card>
        </Item>
        <Item>
            <Typography variant='h3' sx={{fontWeight:"bold", mb: 2}}>Yayasan Wangsakerta</Typography>
            <Typography variant="body1" color="secondary" sx={{mb:2}}><Link href="https://www.yayasanwangsakerta.org">yayasanwangsakerta.com</Link></Typography>
            <Typography variant="body1" color="secondary" sx={{mb:5}}>A profile website</Typography>
        </Item> 
    </Stack>      
    </Box>
  </Box>
  );
}