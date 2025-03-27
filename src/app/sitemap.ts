import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/api';  // Make sure the function is correctly fetching posts

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const links: MetadataRoute.Sitemap = [
    {
      url: 'https://farhanazrupaidha.com',  // Homepage URL
      lastModified: new Date(),                 // Current date as last modified
      changeFrequency: 'yearly',                // Frequency of page updates
      priority: 1,                              // High priority for homepage
    },
  ];

  // Get the posts (ensure this is an async function returning posts)
  const posts = await getAllPosts();

  // Push each post's URL to the links array
  posts.forEach(post => {
    links.push({
      url: `https://farhanazrupaidha.com/posts/${post.slug}`,  // Correct URL structure
      lastModified: new Date(),  // Use the post's last modification date if possible
      changeFrequency: 'weekly', // Posts are more frequently updated
      priority: 0.7,             // Medium priority for posts
    });
  });

  return links;
}
