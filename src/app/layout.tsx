import { GoogleTagManager } from '@next/third-parties/google'
import * as gtag from '../lib/gtag'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";

import ThemeRegistry from './_components/ThemeRegistry/ThemeRegistry';
import "../styles/globals.css"

import ResponsiveAppBar from "./_components/appbar"
import Footer from "./_components/footer"

const inter = Inter({ subsets: ["latin"] });
const title =
  "Farhanaz Rupaidha";
const description =
  "Artist, lives and works in Frankfurt, Germany.";
const image = "/images/Blue Neptune_ScreenShot_1.jpg";

export const metadata: Metadata = {
  title,
  description,
  icons: ["/images/favicon.ico"],
  openGraph: {
    title,
    description,
    images: [image],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
    creator: "@studiofruworks",
  },
  metadataBase: new URL("https://www.farhanazrupaidha.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleTagManager gtmId="G-DJL22REB3P" />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
              });
              `,
            }}
          />            
          <script
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />  
            {/* Global Site Tag (gtag.js) - Google Analytics */}   
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="revisit-after" content="3 days" />     
        <script src="https://media-library.cloudinary.com/global/all.js" /> 
        <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" />
        <link rel="apple-touch-icon" href="/apple-icon?<generated>" type="image/<generated>" sizes="<generated>" />   
        <link rel="mask-icon" href="/images/studiofru - favicon.ico" color="#000000" />
        <link rel="shortcut icon" href="/images/studiofru - favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={cn(inter.className, "dark:bg-slate-900 dark:text-slate-400")}
      >
        <ThemeRegistry>
        <ResponsiveAppBar />
        <main>{children}</main>
        <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
