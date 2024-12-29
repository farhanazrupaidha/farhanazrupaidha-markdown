import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const handleClick = () => {
  console.info('You clicked the Chip.');
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
        <Typography variant="h3">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </Typography>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
          <Chip sx={{maxWidth:200}} color="secondary" label="Portfolio" />
        </div>
      </div>
    </section>
  );
}
