import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import ShareButton from "@/app/_components/socialsharebutton";

import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkDirective from 'remark-directive'
import rehypeRaw from "rehype-raw";
import remarkYoutube from 'remark-youtube';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Container>
        <Header />
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <Box sx={{width:'100%', maxWidth:1000, overflow:'auto', m:'auto'}}>
           <div className='max-w-4xl mx-auto markdown'>
              <Markdown remarkPlugins={[remarkGfm, remarkDirective, [remarkYoutube, { width: "100%", height: 500 }]]} rehypePlugins={[rehypeRaw]}>{post.content}</Markdown>
            </div>
          </Box>
        </article>
        <Box sx={{mt:7}}>
        <center>
        <Divider sx={{mt:5, mb:3, maxWidth:300, width:'100%' }} />
        <Typography variant='h5' color="#ff0055">Share this work</Typography>
            <Box sx={{mb:5, mt:2}}>
            <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                alignItems="center"
                sx={{mt:2, mb:5}}
            >
              <ShareButton />
            </Stack>  
             </Box> 
            </center>
            </Box>
            <center>
        <Divider sx={{mt:5, mb:3, maxWidth:300, width:'100%' }} />
        <Typography variant='h5' color="#ff0055">Back to Works</Typography>
        <Button variant="contained" color="secondary" sx={{mb:5, mt:2}} href="/works">Back</Button>
        </center>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Farhanaz Rupaidha`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
