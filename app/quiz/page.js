'use client';
import { useEffect } from 'react';
import Header from '../components/Header';

export default function page() {
  const questions = [
    {
      question:
        'We’re taking off into the unknown, outer space — what are you bringing with you?',
      answers: [
        'A notebook. Half sketchpad, half thought-catcher',
        'A circuit board: to rewire, remix, and rebuild.',
        'A manual, duh. What if the trip goes awry?',
        'A polaroid of Earth, everything is packed already.',
      ],
    },
  ];

  return (
    <main className='bg-background'>
      <Header />
      <div></div>
    </main>
  );
}
