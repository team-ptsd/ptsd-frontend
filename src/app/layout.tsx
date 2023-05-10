import { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import { ReactNode } from 'react';

import './globals.css';
import Header from '@/app/Header';

const baseFont = Noto_Sans_KR({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'PTSD',
  description: 'PTSD for portfolio',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    title: 'PTSD',
    description: 'PTSD for portfolio',
  },
  twitter: {
    title: 'PTSD',
    description: 'PTSD for portfolio',
  },
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='kr'>
      <body className={`${baseFont.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default Layout;
