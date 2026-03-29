"use client";

import { usePathname } from "next/navigation";
import Stack from "@mui/material/Stack";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  RedditIcon,
  EmailShareButton, 
  EmailIcon,
  TelegramShareButton, 
  TelegramIcon,
  ThreadsShareButton,
  ThreadsIcon
} from "react-share";

type SocialShareProps = {
  postSlug: string;
  postTitle: string;
  postExcerpt: string;
};

export default function SocialShare({ postSlug, postTitle, postExcerpt }: SocialShareProps) {
  const pathname = usePathname(); // current path, e.g., /en/posts/slug
  const segments = pathname.split("/");

  // Build full share URL with current locale
  const shareUrl = `https://www.farhanazrupaidha/posts/${postSlug}`;

  return (
    <Stack direction="row" spacing={1}>
      <EmailShareButton
        subject={postTitle}
        body={postExcerpt}
        url={shareUrl}
        aria-label="Share by email"
      >
        <EmailIcon size={32} round />
      </EmailShareButton>

      <FacebookShareButton url={shareUrl} title={postTitle}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton url={shareUrl} title={postTitle}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <WhatsappShareButton url={shareUrl} title={postTitle}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      <LinkedinShareButton url={shareUrl} title={postTitle}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      <RedditShareButton url={shareUrl} title={postTitle}>
        <RedditIcon size={32} round />
      </RedditShareButton>

      <TelegramShareButton title={postTitle} url={shareUrl} aria-label="Share on Telegram">
        <TelegramIcon size={32} round />
      </TelegramShareButton>

      <ThreadsShareButton title={postTitle} url={shareUrl} aria-label="Share on Threads">
        <ThreadsIcon size={32} round />
      </ThreadsShareButton>
    </Stack>
  );
}