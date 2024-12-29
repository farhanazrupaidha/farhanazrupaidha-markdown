'use client'
import Link from 'next/link'
import Typewriter from 'typewriter-effect';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <Typography variant="h4" sx={{mt:10, mb:10}}>
      <Link href="/" className="hover:underline">
                <Typewriter
                  options={{
                    strings: ['Works'],
                    autoStart: true,
                    loop: true,
                  }}
                />
      </Link>
    </Typography>
  )
}
