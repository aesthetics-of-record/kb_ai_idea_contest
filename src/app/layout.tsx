import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/lib/providers/next-theme-provider';
import { DM_Sans, Song_Myung } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import Head from 'next/head';

const inter = Song_Myung({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: '경북 AI 아이디어 공모전',
  description: 'Welcom To Our Demo Project',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <Head>
        <link
          rel="icon"
          href="/favicon.ico"
        />
        <meta
          property="og:title"
          content="경북 AI 아이디어 공모전"
        />
        <meta
          property="og:description"
          content="Welcom To Our Demo Project"
        />
        <meta
          property="og:image"
          content="/favicon.ico"
        />
      </Head>
      <body className={twMerge('bg-background', inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
