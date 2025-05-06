'use client';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { SoftStar, ArrowRight } from '../components/Vectors';
import Link from 'next/link';

export default function Page() {
  const [ui, setUi] = useState(-1);
  const questions = [
    {
      question:
        'We’re taking off into the unknown, outer space — what are you bringing with you?',
      answers: [
        {
          response: 'A notebook. Half sketchpad, half thought-catcher',
        },
        {
          response: 'A circuit board: to rewire, remix, and rebuild.',
        },
        {
          response: 'A manual, duh. What if the trip goes awry?',
        },
        {
          response: 'A polaroid of Earth, everything is packed already.',
        },
      ],
    },
  ];

  return (
    <main className='bg-background saturate-[1.2]'>
      <Header />
      {ui == -1 && (
        <section>
          <div>
            <div className='relative'>
              <SoftStar className='w-13 h-13 text-accent' />
              <h1>
                A Sp<span className='text-accent'>ai</span>ce Odyssey
              </h1>
            </div>
            <p className='font-mono text-secondary-body'>
              what type of ai user are you?
            </p>
            <Link
              href='/quiz'
              className='text-alt-background flex justify-between px-6 py-4 bg-button-fill font-mono items-center rounded-sm w-64 z-10'
            >
              <span>TAKE THE QUIZ</span>
              <ArrowRight />
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}
