'use client'

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

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
import { Divider } from "@mui/material";
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

const [toggler, setToggler] = useState(false);
const [toggler1, setToggler1] = useState(false);
const [toggler2, setToggler2] = useState(false);

  return (
    <Box sx={{mt:15, mb:10, ml: 5, mr:5}}>
    <Typography variant='h2' sx={{mb:7}}>Other Projects</Typography>

    <Box sx={{bgcolor: 'background.default'}}>

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
                    image="https://res.cloudinary.com/studiofruworks/image/upload/v1773576613/studiofruworks/n6tn2eoun74psspkhmdp.png"
                    title="SheYang Sibo's Portfolio Website"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        SheYang Shibo's Portfolio Website
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        A portfolio website for showcasing the artworks of the artist SheYang Sibo.
                    </Typography>
                    </CardContent>
                     <Stack spacing={{ xs: 1, sm: 1 }} direction="row" useFlexGap flexWrap="wrap" sx={{mt:1, mb:1}}>
                        <CardActions>
                            <Button size="small" color="secondary" href="https://sheyangshibo.cargo.site" target="_blank" variant="contained" sx={{mb:1}}>See it live</Button>
                        </CardActions>
                        <CardActions>
                            <Button size="small" color="secondary" onClick={() => setToggler2(!toggler2)} variant="contained" sx={{mb:1}}>Full screenshot images</Button>
                        </CardActions>
                    </Stack>
            </Card>
                <FsLightbox
                    toggler={toggler2}
                    sources={[
                        "https://res.cloudinary.com/studiofruworks/image/upload/v1773576613/studiofruworks/n6tn2eoun74psspkhmdp.png",
                        "https://res.cloudinary.com/studiofruworks/image/upload/v1773576610/studiofruworks/lh325puittmngd8zm6be.png",
                        "https://res.cloudinary.com/studiofruworks/image/upload/v1773576623/studiofruworks/guybkjrsdgfcffbwn7c7.png",
                        "https://res.cloudinary.com/studiofruworks/image/upload/v1773576628/studiofruworks/mvox53oq5n9du5dbhq4b.png"
                    ]}
			/>
        </Item>
        <Item>
            <Typography variant='h3' sx={{fontWeight:"bold", mb: 2}}>Sheyang Sibo's Portfolio Website</Typography>
            <Typography variant="body1" color="secondary" sx={{mb:2}}><Link href="https://sheyangshibo.cargo.site">sheyangshibo.com</Link></Typography>
            <Typography variant="body1" color="secondary" sx={{mb:5}}>A portfolio website for showcasing the artworks of the artist SheYang Sibo.</Typography>
            <Typography variant="body1" sx={{mb:1}}>Technology used</Typography>
            <Stack spacing={{ xs: 1, sm: 1 }} direction="row" useFlexGap flexWrap="wrap" sx={{mt:1, mb:1}}>
                <Item2>
                    <Chip label="Cargo Collective" variant="outlined"  />
                </Item2>
                <Item2>
                    <Chip label="HTML" variant="outlined"  />
                </Item2>
                <Item2>
                    <Chip label="CSS" variant="outlined"  />
                </Item2>
            </Stack>
        </Item> 
    </Stack> 

    <Divider />

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 5, sm: 2, md: 4 }}
        sx={{mb:10, mt:10}}
        justifyContent="center"
        alignItems="center"
      >
        <Item>
            <Typography variant='h3' sx={{fontWeight:"bold", mb: 2}}>Studiofru | Green Project</Typography>
            <Typography variant="body1" color="secondary" sx={{mb:2}}><Link href="https://studiofrugreenproject.com">studiofrugreenproject.com</Link></Typography>
            <Typography variant="body1" color="secondary" sx={{mb:5}}>A digital platform</Typography>
            <Typography variant="body1" sx={{mb:1}}>Technology used</Typography>
            <Stack spacing={{ xs: 1, sm: 1 }} direction="row" useFlexGap flexWrap="wrap" sx={{mt:1, mb:1}}>
                <Item2>
                    <Chip label="Next.js" variant="outlined"  />
                </Item2>
                <Item2>
                    <Chip label="Markdown" variant="outlined"  />
                </Item2>
                <Item2>
                    <Chip label="Cloudinary" variant="outlined"  />
                </Item2>
                <Item2>
                    <Chip label="Material UI" variant="outlined"  />
                </Item2>
                <Item2>
                    <Chip label="Vercel" variant="outlined"  />
                </Item2>
                <Item2>
                    <Chip label="next-intl" variant="outlined" />
                </Item2>
            </Stack>
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
                         A field-based plant documentation project focusing on local knowledge, ecological observation, and cultural history of plants in Indonesia.
                    </Typography>
                    </CardContent>
                    <Stack spacing={{ xs: 1, sm: 1 }} direction="row" useFlexGap flexWrap="wrap" sx={{mt:1, mb:1}}>
                    <CardActions>
                            <Button size="small" color="secondary" href="https://www.studiofrugreenproject.com/" target="_blank" variant="contained" sx={{mb:1}}>See it live</Button>
                        </CardActions>
                        <CardActions>
                            <Button size="small" color="secondary" onClick={() => setToggler1(!toggler1)} variant="contained" sx={{mb:1}}>Full screenshot images</Button>
                        </CardActions>
                    </Stack>
            </Card>
			    <FsLightbox
                    toggler={toggler1}
                    sources={[
                        "https://res.cloudinary.com/studiofruworks/image/upload/v1773574330/studiofruworks/yka2vakizxwrp7comfdi.png",
                        "https://res.cloudinary.com/studiofruworks/image/upload/v1773575134/studiofruworks/gffgok4is2svavc1ngh8.jpg",
                        "https://res.cloudinary.com/studiofruworks/image/upload/v1773574772/studiofruworks/oelp1pscbjivz9sb3lsv.png"
                    ]}
			/>
      </Item>
    </Stack>

    <Divider />

    <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 5, sm: 2, md: 4 }}
        justifyContent="center"
        alignItems="center"
        sx={{mb:10, mt:10}}
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
                     <Stack spacing={{ xs: 1, sm: 1 }} direction="row" useFlexGap flexWrap="wrap" sx={{mt:1, mb:1}}>
                        <CardActions>
                            <Button size="small" color="secondary" href="https://www.yayasanwangsakerta.org" target="_blank" variant="contained" sx={{mb:1}}>See it live</Button>
                        </CardActions>
                        <CardActions>
                            <Button size="small" color="secondary" onClick={() => setToggler(!toggler)} variant="contained" sx={{mb:1}}>Full screenshot images</Button>
                        </CardActions>
                    </Stack>
            </Card>
                <FsLightbox
                    toggler={toggler}
                    sources={[
                        "https://res.cloudinary.com/studiofruworks/image/upload/v1773574330/studiofruworks/d58qniedpf3qbaqp5cvh.png",
                        "https://res.cloudinary.com/studiofruworks/image/upload/v1773574337/studiofruworks/t5ur7wsadspid4mj32gl.png",
                        "https://res.cloudinary.com/studiofruworks/image/upload/v1773577014/studiofruworks/na7l6j8tcuuwta41cgbu.png"
                    ]}
			/>
        </Item>
        <Item>
            <Typography variant='h3' sx={{fontWeight:"bold", mb: 2}}>Yayasan Wangsakerta</Typography>
            <Typography variant="body1" color="secondary" sx={{mb:2}}><Link href="https://www.yayasanwangsakerta.org">yayasanwangsakerta.com</Link></Typography>
            <Typography variant="body1" color="secondary" sx={{mb:5}}>A profile website</Typography>
            <Typography variant="body1" sx={{mb:1}}>Technology used</Typography>
            <Stack spacing={{ xs: 1, sm: 1 }} direction="row" useFlexGap flexWrap="wrap" sx={{mt:1, mb:1}}>
                <Item2>
                    <Chip label="Next.js" variant="outlined"  />
                </Item2>
                <Item2>
                    <Chip label="Hygraph CMS" variant="outlined"  />
                </Item2>
                <Item2>
                    <Chip label="Material UI" variant="outlined"  />
                </Item2>
                <Item2>
                    <Chip label="Vercel" variant="outlined"  />
                </Item2>
            </Stack>
        </Item> 
    </Stack>   

    </Box>
  </Box>
  );
}