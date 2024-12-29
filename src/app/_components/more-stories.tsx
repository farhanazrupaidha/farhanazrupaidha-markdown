import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import  JournalCard from "./journal-card";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <>
        {posts.map((post) => (
          <JournalCard
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
    </>
  );
}
