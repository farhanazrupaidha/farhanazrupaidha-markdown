import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <>
      <Box sx={{mb:2}}>
        <PostTitle>{title}</PostTitle>
      </Box>
      <Box sx={{mb:3}}>
      <div className="mb-6 text-lg">
      <DateFormatter dateString={date} />
      </div>
      <Chip sx={{maxWidth:200}} color="secondary" label="Works" />
      <div className="max-w-2xl mx-auto">
      </div>
      </Box>
      <div className="mb-8 -mx-5 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
    </>
  );
}
