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
    // {
    //   path: './fonts/PPNeueMontreal-Book.woff2',
    //   weight: '600',
    //   style: 'normal',
    // },
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
  title: 'Students and AI — School of Browser',
  description:
    "We talked to students all across the United States with one question in mind: what do they think about AI? Here's what they said:",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${sans.variable} ${geistMono.variable} antialiased font-sans bg-background`}
      >
        {children}
        <div className='fixed top-0 left-0 right-0 bottom-0 grid md:grid-cols-2 pointer-events-none overflow-hidden z-50 mix-blend-color-burn backdrop-saturate-[110%] backdrop-blur-[0.5px]'>
          <div className='w-full h-full overflow-hidden'>
            <Image src={bleed} alt='' className='object-fill w-full h-full' />
          </div>
          <div className='w-full h-full overflow-hidden'>
            <Image src={bleed} alt='' className='object-fill w-full h-full' />
          </div>
          <div className='w-full h-full overflow-hidden hidden md:block'>
            <Image src={bleed} alt='' className='object-fill w-full h-full' />
          </div>
          <div className='w-full h-full overflow-hidden hidden md:block'>
            <Image src={bleed} alt='' className='object-fill w-full h-full' />
          </div>
        </div>
      </body>
    </html>
  );
}
