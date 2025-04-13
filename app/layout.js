import { Geist_Mono } from 'next/font/google';
import './globals.css';
import localFont from 'next/font/local';
import Image from 'next/image';

import bleed from '../public/bleed.png';

const sans = localFont({
  src: [
    {
      path: './fonts/PPNeueMontreal-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    // { path: './fonts/PPMori-SemiBold.otf', weight: '700', style: 'normal' },
    // { path: './fonts/PPMori-ExtraBold.otf', weight: '800', style: 'normal' },
  ],
  variable: '--font-pp-mori',
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Students and AI — The Browser Company',
  // description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${sans.variable} ${geistMono.variable} antialiased font-sans bg-background`}
      >
        {children}
        <div className='fixed top-0 left-0 right-0 bottom-0 grid grid-cols-2 pointer-events-none overflow-hidden'>
          <Image
            src={bleed}
            alt=''
            className='opacity-[.05] dark:opacity-[.3] object-fill w-full h-full mix-blend-multiply backdrop-blur-[0.5px]'
          />
          <Image
            src={bleed}
            alt=''
            className='opacity-[.05] dark:opacity-[.3] object-fill w-full h-full mix-blend-multiply backdrop-blur-[0.5px]'
          />
          <Image
            src={bleed}
            alt=''
            className='opacity-[.05] dark:opacity-[.3] object-fill w-full h-full mix-blend-multiply backdrop-blur-[0.5px]'
          />
          <Image
            src={bleed}
            alt=''
            className='opacity-[.05] dark:opacity-[.3] object-fill w-full h-full mix-blend-multiply backdrop-blur-[0.5px]'
          />
        </div>
      </body>
    </html>
  );
}
