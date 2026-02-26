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
    <Typography variant='h2' sx={{mb:7}}>Download</Typography>

    <Box sx={{bgcolor: 'background.default'}}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 5, sm: 2, md: 4 }}
        sx={{mb:10}}
        justifyContent="center"
        alignItems="center"
      >
        <Item>
            <Typography variant='h3' sx={{fontWeight:"bold", mb: 2}}>Night Sky Complex</Typography>
            <Typography variant="body1" color="secondary" sx={{mb:2}}><Link href="https://drive.google.com/drive/folders/1teYRuzVVKQ_1NlI7D71DkuVeKjstkbVK?usp=drive_link" target="_blank" rel="noopener noreferrer">Download here</Link></Typography>
            <Typography variant="body1" color="secondary" sx={{mb:5}}>A participatory software that will run on Microsoft Windows OS computer</Typography>
            <Typography variant="body1" sx={{mb:1}}>Keywords</Typography>
            <Stack spacing={{ xs: 1, sm: 1 }} direction="row" useFlexGap flexWrap="wrap" sx={{mt:1, mb:1}}>
                <Item2>
                    <Chip label="Game" variant="outlined"  />
                </Item2>
                <Item2>
                    <Chip label="Simulation" variant="outlined"  />
                </Item2>
                <Item2>
                    <Chip label="Landscape" variant="outlined"  />
                </Item2>
                <Item2>
                    <Chip label="Environment" variant="outlined"  />
                </Item2>
                <Item2>
                    <Chip label="Palm oil" variant="outlined"  />
                </Item2>
                <Item2>
                    <Chip label="Indonesia" variant="outlined"  />
                </Item2>
            </Stack>
        </Item>

        <Item>
            <Card>
                <CardMedia
                    sx={{ height: 350 }}
                    image="https://res.cloudinary.com/studiofruworks/image/upload/v1771671909/jackplan-user/cmbdnuxhoidgm192rofh.jpg"
                    title="Night Sky Complex"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Night Sky Complex
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        A participatory computer software that will reset every 6 minutes. First exhibited during Städelschule Rundgang 2026.
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="secondary" href="https://drive.google.com/drive/folders/1teYRuzVVKQ_1NlI7D71DkuVeKjstkbVK?usp=drive_link" target="_blank" rel="noopener noreferrer" variant="contained" sx={{mb:1}}>Download here</Button>
                    </CardActions>
            </Card>
      </Item>
    </Stack>    
    </Box>
  </Box>
  );
}