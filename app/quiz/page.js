/* eslint-disable @next/next/no-img-element */
'use client';
import { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import {
  SoftStar,
  ArrowRight,
  Planet,
  Stars,
  CrossedOrbitalsLeft,
  CrossedOrbitals,
  SmallPlanet,
  Send,
} from '../components/Vectors';
import { motion, AnimatePresence } from 'motion/react';
import { motionProps } from '../lib/motionProps';
import { Architect, Tinkerer, Operator, Anchor } from '../components/Vectors';

export default function Page() {
  const [ui, setUi] = useState(-1);
  const questions = [
    {
      question:
        'We’re taking off into the unknown, outer space — what are you bringing with you?',
      answerLimit: 1,
      answers: [
        {
          response: 'A notebook. Half sketchpad, half thought-catcher.',
          value: 0,
        },
        {
          response: 'A circuit board: to rewire, remix, and rebuild.',
          value: 1,
        },
        { response: 'A manual, duh. What if the trip goes awry?', value: 2 },
        {
          response: 'A polaroid of Earth, everything is packed already.',
          value: 3,
        },
      ],
    },
    {
      question:
        'You’ve run into a snag mid-journey. It’s nothing mission-breaking, but enough to slow you down. You could use a hand. What kind of support do you reach for?',
      answerLimit: 1,
      answers: [
        { response: 'None, I got this!', value: 0 },
        {
          response:
            'I think I can fix this but maybe I’ll comm Mission Control…',
          value: 1,
        },
        {
          response: 'I’ll try to fix it and I’ll leave it otherwise',
          value: 2,
        },
        { response: 'Running to the nearest crew mate right now.', value: 3 },
      ],
    },
    {
      question:
        'The radar’s picking up a signal of unknown life form nearby, how are you thinking about it?',
      answerLimit: 1,
      answers: [
        {
          response:
            'Maybe they’ll know how to solve my little error from earlier',
          value: 0,
        },
        {
          response: 'Maybe it’ll help me brush up on my communication skills',
          value: 1,
        },
        { response: 'Maybe they’ll look just like us', value: 2 },
        { response: 'We’ll see when we reach it!', value: 3 },
      ],
    },
    {
      question:
        'You find something new laying around - along with some tools, looks like your crew mate was building something. What’s your move?',
      answerLimit: 1,
      answers: [
        { response: 'I’m not touching it, looks weird man.', value: 3 },
        { response: 'I inspect it but that’s their work, not mine.', value: 2 },
        {
          response:
            'Took it for a spin but the calibration’s off, I’ll come back later.',
          value: 1,
        },
        { response: 'That’s mine, oops, forgot to put it all away.', value: 0 },
      ],
    },
    {
      question:
        'Pick 2. The item you brought on the ship spontaneously combusts. What’s your reaction?',
      answerLimit: 2,
      answers: [
        { response: 'Cry, it was something you REALLY needed', value: 3 },
        {
          response: 'Pivot, it’s time to move on — the mission is of focus',
          value: 1,
        },
        {
          response: 'Get upset. You think someone else is to blame.',
          value: 2,
        },
        {
          response:
            'You’re rendered speechless, you refuse to believe it happened.',
          value: 3,
        },
        {
          response:
            'You’re chill, you have a backup — because you knew this would happen.',
          value: 2,
        },
        {
          response: 'You ask others if they have one, it’s worth a shot.',
          value: 0,
        },
        {
          response:
            'You look around and collect its pieces. Maybe you can fix it.',
          value: 1,
        },
        {
          response: 'You smile, the loss of it was a growing moment for you :)',
          value: 0,
        },
      ],
    },
    {
      question:
        'There’s a magic elixir on the ship, you’re a pretty clumsy person and this solves it — how often do you drink from it?',
      answerLimit: 1,
      answers: [
        { response: 'I drank from it, for preventative care', value: 0 },
        { response: 'Often, it’s helping me help others so why not', value: 1 },
        {
          response:
            'Sometimes, I think my body can take a few hits — but it’s nice to have',
          value: 2,
        },
        {
          response: 'Never, my body is a temple; who knows what’s in there',
          value: 3,
        },
      ],
    },
    {
      question:
        'That unknown life form before has now stirred a nightmare for you, what was that nightmare about?',
      answerLimit: 1,
      answers: [
        {
          response:
            'How it’ll take over humanity, it actually can shape-shift and look like my crew mates',
          value: 3,
        },
        {
          response:
            'Loss of control, it’s better at my on-ship duties than I am',
          value: 0,
        },
        {
          response:
            'Brainwashing my crew mates with false information about me',
          value: 2,
        },
        {
          response:
            'There’s something uncanny valley about it and no one else seems to notice!',
          value: 1,
        },
      ],
    },
    {
      question:
        'Remember that new build from before, have your thoughts on it changed?',
      answerLimit: 1,
      answers: [
        { response: 'Yeah, turns out it’s just for cooking…', value: 2 },
        {
          response:
            'I actually found out it measures the speed of the asteroids around the ship in some unknown unit I’m working to translate',
          value: 0,
        },
        {
          response:
            'It’s part pen and calibration tool, but I think it also solders joints!',
          value: 1,
        },
        { response: 'Nope! Still not touching it', value: 3 },
      ],
    },
    {
      question: 'Why did you come on this trip?',
      answerLimit: 1,
      answers: [
        {
          response: 'Because I believe that there’s more out there!',
          value: 1,
        },
        { response: 'I was forced into this trip 😭', value: 3 },
        {
          response:
            'I wasn’t sure, my friend is another crew mate, and I trust my friend',
          value: 2,
        },
        {
          response: 'I was bored, what’s the worst that could happen?',
          value: 0,
        },
      ],
    },
    {
      question:
        'Turns out it was all a dream 😞 What are you going to do with this experience?',
      answerLimit: 1,
      answers: [
        {
          response:
            'Go back to sleep, you really want this to be real, it was exciting!',
          value: 0,
        },
        { response: 'Wake up: that was fun, but now it’s a new day', value: 2 },
        {
          response:
            'Look up any existing space missions you might be able to learn more about',
          value: 1,
        },
        {
          response:
            'Snooze the alarm, a huge sigh of relief. At least you don’t have all that responsibility in real life',
          value: 3,
        },
      ],
    },
  ];

  const [responses, setResponses] = useState(new Array(questions.length));
  const [personality, setPersonality] = useState();

  return (
    <main className='bg-background h-lvh overflow-hidden' data-theme='dark'>
      <Header />
      <div className='absolute -top-[45rem] left-0 right-0 overflow-hidden flex justify-center items-center z-0 pointer-events-none'>
        <div className='z-0 gradient' />
      </div>
      <BackgroundStars />
      <div className='max-h-lvh h-lvh relative overflow-hidden'>
        <AnimatePresence>
          {ui == -1 && <LandingView ui={ui} setUi={setUi} />}
        </AnimatePresence>
        {ui >= 0 && ui < questions.length && (
          <QuestionView
            ui={ui}
            setUi={setUi}
            questions={questions}
            responses={responses}
            setResponses={setResponses}
            setPersonality={setPersonality}
          />
        )}
        {personality && <ResultsView personality={personality} />}
      </div>
    </main>
  );
}

function QuestionView({
  ui,
  setUi,
  questions,
  responses,
  setResponses,
  setPersonality,
}) {
  const questionsContainerRef = useRef(null);
  const responseContainer = useRef(null);
  const [fadeVisible, setFadeVisible] = useState(false);
  const [passedInitialScreen, setPassedInitialScreen] = useState(false);

  function selectAnswer(q) {
    setPassedInitialScreen(true);
    var tempResponses = [...responses];
    if (
      responses[ui] != undefined &&
      ((responses[ui][0] != undefined &&
        q.response == responses[ui][0].response) ||
        (responses[ui][1] != undefined &&
          q.response == responses[ui][1].response))
    ) {
      tempResponses[ui] = tempResponses[ui].filter(
        (i) => i.response != q.response
      );
      setResponses(tempResponses);
      return;
    }

    if (questions[ui].answerLimit == 2) {
      tempResponses[ui] = tempResponses[ui] ? [q, tempResponses[ui][0]] : [q];
    } else {
      tempResponses[ui] = [q];
    }
    setResponses(tempResponses);
  }

  function handleScroll() {
    if (questionsContainerRef.current.scrollTop > 50) {
      setFadeVisible(true);
    } else {
      setFadeVisible(false);
    }
  }

  function incrementUi() {
    if (ui + 1 == questions.length) {
      determinePersonality();
      setTimeout(() => {
        setUi(ui + 1);
      }, 2000);
    } else {
      setUi(ui + 1);
    }
    setTimeout(
      () =>
        questionsContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' }),
      0
    );
  }

  function determinePersonality() {
    var results = { 0: 0, 1: 0, 2: 0, 3: 0 };

    responses.map((i) => {
      if (i[0] != undefined) {
        results = { ...results, [i[0].value]: results[i[0].value] + 1 };
      }
      if (i[1] != undefined) {
        results = { ...results, [i[1].value]: results[i[1].value] + 1 };
      }
    });

    var personality = null;
    var personalityCount = 0;

    for (let i = 0; i < 4; i++) {
      if (results[i] > personalityCount) {
        personality = i;
        personalityCount = results[i];
      }
    }
    const personalities = {
      0: {
        name: 'Architect',
        description:
          'You’re full throttle for the unknown, you’re game for anything new and put 110% into it. You have lots of of hope for the future, and are able to seize whatever opportunity comes your way.',
        tags: ['STRATEGIC', 'DECISIVE', 'DRIVEN', 'COMMANDING'],
        result:
          'You’ve got vision, structure, and a plan - AI is just a vessel for all your potential.',
        icon: <Architect />,
      },
      1: {
        name: 'Tinkerer',
        description:
          'You think about the unknown often, and while you’re not sure how to tackle it — you know you want to. You’re privy to the future and what it holds, and you like taking the time to play with it.',
        tags: ['CURIOUS', 'INVENTIVE', 'FLEXIBLE', 'RESOURCEFUL'],
        result:
          'AI is a playground, you don’t need it to be perfect, you just need it to be open.',
        icon: <Tinkerer />,
      },
      2: {
        name: 'Operator',
        description:
          'You like where you are, and you know what you need. You’ll ask for help occasionally, but you’re content - prioritizing clarity and consistency. No need to fix what’s not broken, am I right?',
        tags: ['PRACTICAL', 'RELIABLE', 'GROUNDED', 'TRADITIONAL'],
        result:
          'AI is useful, but not the center of your world, you’re sticking to what you know.',
        icon: <Operator />,
      },
      3: {
        name: 'Anchor',
        description:
          'You’re hesitant but that’s not a bad thing. After all, slow and steady will win the race. You may not always raise your voice but you’re quietly asking the hard questions and raising the ethical flags. ',
        tags: ['CAUTIOUS', 'THOUGHTFUL', 'ETHICAL', 'CONNECTED'],
        result:
          'You might not use AI much, but you’re always paying attention.',
        icon: <Anchor />,
      },
    };
    setPersonality(personalities[personality]);
  }
  return (
    <section
      className='px-page pt-40 lg:pt-32 2xl:pt-48 block h-lvh overflow-y-auto'
      ref={questionsContainerRef}
      onScroll={handleScroll}
    >
      <AnimatePresence>
        {fadeVisible && (
          <motion.div
            {...motionProps(0)}
            transition={{ duration: 0.2, ease: 'linear' }}
            className='pointer-events-none fixed top-0 left-0 right-0 bg-gradient-to-t from-background/0 via-background/65 to-background/65 h-60 z-10'
          />
        )}
      </AnimatePresence>
      <motion.div
        {...motionProps(0, null)}
        transition={{ duration: 0.2, ease: 'linear' }}
        className='pointer-events-none fixed bottom-0 left-0 right-0 bg-gradient-to-t to-background/0 via-background/65 from-background/65 h-60 z-10'
      />
      <div className='flex flex-col min-h-max h-max pb-48 relative pt-60 lg:pt-44'>
        <AnimatePresence>
          {questions[ui].question && (
            <motion.div
              className={`flex gap-2.5 message absolute top-0 flex-col md:flex-row ${
                ui == 0 && !passedInitialScreen ? 'animation-delay-1000' : ''
              }`}
              key={questions[ui].question}
              initial={{ translateY: 0, opacity: 1 }}
              exit={{
                translateY: -50,
                opacity: 0,
                display: 'none',
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <SoftStar className='text-accent bg-tag rounded-full p-3 w-11 h-11 lg:w-14 lg:h-14 min-w-11 lg:min-w-14 aspect-square animate-spin' />
              <div>
                <div
                  className={`message-container overflow-hidden rounded-2xl mb-2 max-w-[calc(100svw-var(--page)*2)] md:max-w-[calc(100svw-var(--page)*2-54px)] lg:max-w-[calc(100svw-var(--page)*2-66px)] xl:max-w-[40rem] ${
                    ui == 0 && !passedInitialScreen
                      ? 'animation-delay-1000'
                      : ''
                  }`}
                >
                  <p className='text-primary-title bg-accent p-6 body !leading-[120%] w-max max-w-[calc(100svw-var(--page)*2)] md:max-w-[calc(100svw-var(--page)*2-54px)] lg:max-w-[calc(100svw-var(--page)*2-66px)] xl:max-w-[40rem]'>
                    {questions[ui].question}
                  </p>
                </div>
                <p className='text-accent font-mono'>
                  {ui + 1}/{questions.length}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className='flex flex-col items-end gap-5' ref={responseContainer}>
          <AnimatePresence>
            {questions[ui].answers.map((q, index) => (
              <motion.p
                className={`rounded-2xl px-12 py-6 body !leading-[120%] transition-all w-full md:max-w-max cursor-pointer lg:hover:bg-[#75717B] hover:text-primary-title text-right ${
                  responses[ui] != undefined &&
                  responses[ui].filter(
                    (i) => i != undefined && i.response == q.response
                  )[0] != undefined
                    ? 'bg-button-fill text-background border-accent border-2'
                    : 'bg-tag text-primary-title border-transparent border-2'
                }`}
                key={q.response}
                {...motionProps(
                  (ui == 0 && passedInitialScreen == false ? 25 : 15) + index,
                  'down',
                  false
                )}
                exit={{
                  opacity: 0,
                  translateY: 50,
                  transition: { delay: 0.1 + index * 0.1 },
                }}
                onClick={() => selectAnswer(q)}
              >
                {q.response}
              </motion.p>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <motion.footer
        className='flex items-center justify-center gap-5 fixed left-0 right-0 bottom-16 z-20 px-12 md:px-page'
        {...motionProps(30)}
      >
        <button
          onClick={() => setUi(ui - 1)}
          disabled={ui == 0}
          className='text-secondary-body flex px-6 py-4 justify-end font-mono !font-normal cursor-pointer items-center rounded-sm w-64 pointer-events-auto'
        >
          BACK
        </button>
        <button
          onClick={incrementUi}
          disabled={
            !(
              responses[ui] && responses[ui].length == questions[ui].answerLimit
            )
          }
          className='text-background flex justify-between px-6 py-4 disabled:text-secondary-body disabled:bg-tag bg-[#F8F5EF] font-mono !font-normal cursor-pointer items-center rounded-sm w-64 pointer-events-auto transition-all'
        >
          <span>NEXT</span>
          <ArrowRight />
        </button>
      </motion.footer>
      <img src='/assets/mask.gif' className='hidden' alt='' />
    </section>
  );
}

function ResultsView({ personality }) {
  const [clipboardToast, setClipboardToast] = useState(null);
  async function handleCopyToClipboard() {
    if (navigator.canShare) {
      try {
        const data = {
          url: window.location,
          title: 'Students and AI — Personality Quiz',
        };
        await navigator.share(data);
        setClipboardToast('SHARING');
      } catch {
        setClipboardToast('AN ERROR OCCURRED :(');
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location);
        setClipboardToast('COPIED TO CLIPBOARD');
      } catch {
        setClipboardToast('AN ERROR OCCURRED :(');
      }
    }

    setTimeout(() => {
      setClipboardToast(null);
    }, 2000);
  }
  return (
    <section
      className={`absolute top-0 left-0 right-0 bottom-0 z-20 h-lvh overflow-y-auto ${personality.name.toLowerCase()}`}
    >
      <motion.div
        className='bg-splash w-full absolute top-0 left-0 right-0 bottom-0 z-30'
        {...motionProps(0)}
      >
        <div className='w-full h-full' />
      </motion.div>
      <motion.div
        className='px-page mt-30 pt-20 xl:mt-[calc(var(--page)/2)] xl:pt-[calc(var(--page)/2)] flex flex-col gap-20 pb-48 z-40 relative bg-background drawer'
        {...motionProps(11, 'down')}
      >
        <div className='absolute -top-[45rem] left-0 right-0 overflow-hidden flex justify-center items-center z-0 pointer-events-none'>
          <div className='z-0 gradient' />
        </div>
        <div className='max-w-[704px] mx-auto z-10'>
          <motion.p
            className='font-mono text-secondary-body text-center mb-3'
            {...motionProps(13, 'down')}
          >
            YOUR ARCHETYPE IS
          </motion.p>
          <motion.h1
            className='text-primary-title flex gap-6 [&>svg]:w-20 [&>svg]:h-20 lg:[&>svg]:w-40 lg:[&>svg]:h-40 items-center justify-center'
            {...motionProps(17, 'down')}
          >
            {personality.icon} {personality.name}
          </motion.h1>
          <motion.p
            className='body text-center text-white my-12 !leading-[200%]'
            {...motionProps(18, 'down')}
          >
            {personality.description}
          </motion.p>
          <div className='flex justify-center gap-4 flex-wrap'>
            {personality.tags.map((i, index) => (
              <motion.p
                key={i}
                className='text-secondary-body px-4 py-2 bg-tag font-mono uppercase rounded-sm w-max'
                {...motionProps(20 + index, 'down')}
              >
                {i}
              </motion.p>
            ))}
          </div>
        </div>
        <motion.div
          className='rounded-2xl bg-background-gradient p-12 flex flex-col gap-6 items-center'
          {...motionProps(19 + personality.tags.length, 'down')}
        >
          <p className='font-mono text-secondary-body flex justify-center gap-3'>
            <SoftStar className='w-[1.125rem] h-[1.125rem]' /> YOUR TAKE ON AI
          </p>
          <h3 className='text-white text-center max-w-[704px]'>
            {personality.result}
          </h3>
        </motion.div>
        <motion.button
          className='text-button-text flex justify-between px-6 py-4 bg-button-fill font-mono !font-normal items-center rounded-sm w-64 z-10 cursor-pointer mx-auto'
          {...motionProps(20 + personality.tags.length, 'down')}
          onClick={handleCopyToClipboard}
        >
          <span>share this quiz</span>
          <Send />
        </motion.button>
        <div
          className={`font-mono transition-all text-center -mt-16 duration-300 ${
            clipboardToast != null ? 'text-secondary-body' : 'text-transparent'
          }`}
        >
          {clipboardToast}
        </div>
      </motion.div>
      {/* gradient bg */}
      <div className='px-page mt-36 xl:mt-[calc(var(--page)/2)] h-lvh overflow-y-auto flex flex-col gap-20 pb-48 z-30 absolute top-0 left-0 right-0 drawer glow' />
    </section>
  );
}

function BackgroundStars() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const mouseMoveHandler = (e) => {
    setMouseX(e.pageX / 100);
    setMouseY(e.pageY / 100);
  };

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler);
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);
  return (
    <motion.div
      className='absolute left-0 right-0 top-0 bottom-0 overflow-hidden h-lvh w-lvw z-30 pointer-events-none'
      {...motionProps(1, 'up')}
    >
      <Stars
        className='relative left-0 right-0 top-0 bottom-0'
        style={{ transform: `translate(${mouseX}px, ${mouseY}px)` }}
      />
    </motion.div>
  );
}

function LandingView({ ui, setUi }) {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const mouseMoveHandler = (e) => {
    setMouseX(e.pageX / 100);
    setMouseY(e.pageY / 100);
  };

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler);
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);
  return (
    <section className='h-full flex flex-col pointer-events-none'>
      <div className='py-42 pt-72 md:pt-42 flex flex-col justify-between h-full z-10'>
        <div>
          <motion.h1
            className='relative text-center pointer-events-auto p-1'
            {...motionProps(0, 'down')}
          >
            <SoftStar className='w-10 h-10 lg:w-13 lg:h-13 text-accent left-0 right-0 -top-4 xl:top-0 mx-auto absolute' />
            A Sp<span className='text-accent'>ai</span>ce Odyssey
          </motion.h1>
          <motion.p
            className='font-mono text-secondary-body text-center z-20 pointer-events-auto'
            {...motionProps(1, 'down')}
          >
            what type of ai user are you?
          </motion.p>
        </div>
        <motion.button
          onClick={() => setUi(ui + 1)}
          className='text-background flex justify-between px-6 py-4 bg-[#F8F5EF] font-mono !font-normal cursor-pointer items-center rounded-sm w-64 mx-auto pointer-events-auto'
          {...motionProps(2, 'down')}
        >
          <span>TAKE THE QUIZ</span>
          <ArrowRight />
        </motion.button>
      </div>
      <motion.footer
        className='text-center mx-auto mt-auto pb-16 z-10'
        {...motionProps(4)}
      >
        <p className='font-mono text-accent pointer-events-auto'>
          a whimsical personality quiz
          <br />
          presented by the school of browser
        </p>
      </motion.footer>
      <motion.div
        {...motionProps(2, 'up')}
        className='absolute -right-[60%] top-0 md:right-0 z-0'
      >
        <CrossedOrbitals
          style={{
            transform: `translate(${mouseX * 5}px, ${mouseY * 5 - 100}px)`,
          }}
        />
      </motion.div>
      <motion.div
        {...motionProps(1, 'up')}
        className='absolute -right-16 top-1/4 md:top-[15%] md:right-[20%] z-0'
      >
        <SmallPlanet
          style={{ transform: `translate(${mouseX * 3}px, ${mouseY * 3}px)` }}
        />
      </motion.div>
      <motion.div
        {...motionProps(0.5, 'up')}
        className='absolute -left-10 md:top-0 md:left-0 z-0'
      >
        <CrossedOrbitalsLeft
          style={{
            transform: `translate(${mouseX * 3.5 - 50}px, ${
              mouseY * 3.5 - 30
            }px)`,
          }}
        />
      </motion.div>
      <motion.div
        {...motionProps(0, 'down')}
        className='absolute left-0 right-0 bottom-0 z-0 max-w-lvw flex items-center justify-center scale-200 md:scale-100'
      >
        <Planet
          style={{ transform: `translate(${mouseX / 2}px, ${mouseY / 2}px)` }}
        />
      </motion.div>
    </section>
  );
}
