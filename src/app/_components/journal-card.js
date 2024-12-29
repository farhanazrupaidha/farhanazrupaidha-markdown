'use client'

import DateFormatter from "./date-formatter";
import CoverImage from './cover-image'
import Link from 'next/link'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Chip, Stack, Box } from '@mui/material';

export default function JournalCard ({
    title,
    excerpt,
    slug,
    coverImage,
    date
}) {


  return (
    <Card sx={{ maxWidth: 320 }}>
      <CardActionArea>
      <CardMedia>
      <CoverImage title={title} src={coverImage} slug={slug} />
        </CardMedia>
        <CardContent>
          <div>
            <Typography gutterBottom variant="h5" component="div">
              <Link href={`/posts/${slug}`} className="hover:underline">
                {title}
              </Link>
            </Typography>
          </div>
          <Box>
          <DateFormatter dateString={date} />
          </Box>
          <Stack spacing={{ xs: 1, sm: 1 }} direction="row" useFlexGap flexWrap="wrap" sx={{mt:2, mb:2}}>
              <Chip sx={{maxWidth:200}} color="secondary" label="works"  />
          </Stack>
          <div className="container-card">
            <Typography variant="body2" color="text.secondary">
              {excerpt}
            </Typography>
          </div>   
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="secondary" variant="outlined" sx={{mb:1, ml:1}} href={`/journals/${slug}`}>
        Learn More
      </Button>
      </CardActions>
    </Card>
  );
}