import {
  ArrowDown,
  ArrowRight,
  Email,
  LinkIcon,
  QuoteIcon,
  SoftStar,
  Waves,
  X,
} from './components/Vectors';
import Link from 'next/link';
import Video from './components/Video';
import Header from './components/Header';

const team = [
  {
    name: 'Elissa Martial',
    subtitle: 'USC, She/her',
    image: null,
    role: ['Web Design', 'Dev', 'Research'],
    email: 'email@email.com',
    website: 'https://thebrowser.company',
    x: 'https://x.com/',
  },
  {
    name: 'Jan Rebolledo',
    subtitle: 'CPP, HE/HIM',
    image: null,
    role: ['Dev', 'Video'],
    email: 'email@email.com',
    website: 'https://thebrowser.company',
    x: 'https://x.com/',
  },
  {
    name: 'Hope Hsieh',
    subtitle: 'NEU, She/her',
    image: null,
    role: ['writing', 'Research'],
    email: 'email@email.com',
    website: 'https://thebrowser.company',
    x: 'https://x.com/',
  },
  {
    name: 'MILES DOBRENSKI',
    subtitle: 'Berkeley, he/him',
    image: null,
    role: ['graphics', 'Research'],
    email: 'email@email.com',
    website: 'https://thebrowser.company',
    x: 'https://x.com/',
  },
  {
    name: 'Selene Chang',
    subtitle: 'NYU, she/they',
    image: null,
    role: ['Research'],
    email: 'email@email.com',
    website: 'https://thebrowser.company',
    x: 'https://x.com/',
  },
  {
    name: 'Jacqueline Guo',
    subtitle: 'USC, she/her',
    image: null,
    role: ['Research'],
    email: 'email@email.com',
    website: 'https://thebrowser.company',
    x: 'https://x.com/',
  },
  {
    name: 'Kristen Choi',
    subtitle: 'CMU, she/her',
    image: null,
    role: ['Research'],
    email: 'email@email.com',
    website: 'https://thebrowser.company',
    x: 'https://x.com/',
  },
  {
    name: 'Julia Bock',
    subtitle: 'Quinnipiac, she/her',
    image: null,
    role: ['Marketing'],
    email: 'email@email.com',
    website: 'https://thebrowser.company',
    x: 'https://x.com/',
  },
];

function Quote({ title, quote, className }) {
  return (
    <blockquote
      className={`text-secondary-body p-12 flex flex-col gap-8 text-center items-center justify-center tracking-tighter rounded-rounding border border-accent ${className}`}
    >
      {title ? (
        <p className='text-secondary-body font-mono uppercase'>{title}</p>
      ) : (
        <QuoteIcon className='text-accent' />
      )}
      <h3 className='leading-[150%] text-primary-body'>{quote}</h3>
    </blockquote>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      {/* hero */}
      <section>
        <div className='flex flex-col gap-16 p-4 items-center justify-center z-10 pt-section'>
          <div className='flex justify-center flex-col text-center items-center'>
            <p className='text-secondary-body font-mono'>
              SCHOOL OF BROWSER PRESENTS
            </p>
            <h1 className='max-w-max'>
              <span className='relative'>
                Students
                <Waves className='absolute -bottom-2 text-accent hidden md:block left-0 right-0 w-full' />
              </span>{' '}
              and{' '}
              <span className='relative'>
                AI
                <SoftStar className='absolute -top-3 md:-right-6 xl:-right-7 hidden md:block md:w-8 xl:w-10 text-accent' />
              </span>
            </h1>
          </div>
          <p className='text-secondary-body uppercase md:w-[38rem] text-center font-mono'>
            How do students feel about AI? What wonderful, wacky things are they
            doing with it? What are they afraid of?
            <br />
            <br />
            The students of{' '}
            <b className='text-primary-body'>School of Browser</b> did some
            digging, and we&apos;ve put together this experience exploring the
            state of AI among{' '}
            <b className='text-primary-body'>65+ college students</b> across{' '}
            <b className='text-primary-body'>25+ schools</b> in the U.S. today.
            <br />
            <br />
            ARE YOU Ready?
          </p>
          <ArrowDown className='text-primary-body' />
        </div>
        <div className='absolute -top-[45rem] left-0 right-0 overflow-hidden flex justify-center items-center -z-10'>
          <div className='z-0 gradient' />
        </div>
      </section>
      {/* quiz section */}
      <section className='relative flex flex-col my-32 gap-16 mx-4 rounded-rounding mb-section bg-alt-background px-page justify-center text-center items-center py-32'>
        <h2 className='text-alt-primary-title'>What&apos;s your persona?</h2>
        <p className='font-mono text-alt-primary-body'>
          Are you a purist who never uses ai? an explorer digging for new use
          cases? a power adopter, who asks ai for relationship advice?
        </p>
        <Link
          href='/'
          className='text-button-text flex justify-between px-6 py-4 bg-button-fill font-mono items-center rounded-sm w-64'
        >
          <span>TAKE THE QUIZ</span>
          <ArrowRight />
        </Link>
        <p>🚧 working</p>
      </section>
      {/* bridge */}

      <p className='font-mono text-primary-body mx-auto p-6 text-center lg:w-[35rem] mb-section'>
        We talked to students all across the united states with one question in
        mind: what do they think about ai?
        <br />
        <br />
        here&apos;s what they said:
      </p>
      {/* video section */}

      <section className='mb-section mx-4'>
        <Video />
        <p className='font-mono uppercase px-page text-right mt-6 text-secondary-body'>
          VIdeo editing by jan
          <br />
          featuring footage from cpp, usc, ucla
        </p>
      </section>
      {/* article section */}
      <section className='mx-4 px-page flex flex-col gap-6 whitespace-pre-wrap mb-section'>
        <h2 className='text-primary-title'>
          Straight From the Source: The State of AI Amongst Students
        </h2>
        <p className='font-mono text-secondary-body mb-16'>
          February 27th, 2024
          <br />
          WRITTEN BY HOPE HSIEH
        </p>
        <p className='text-primary-body body mb-32'>
          <b>Artificial intelligence is rapidly reshaping industries</b>, and an
          important question is how the younger generations are learning to
          adapt to the shifts as they grow alongside the technology. As student
          ambassadors for The Browser Company, we conducted research to explore
          the nuances of how students—from high school to graduate school—regard
          and use AI in their daily lives. Through surveys and conversations, we
          gathered data and viewed trends on both the value AI can provide and
          the attitudes of the students.
          <br />
          <br />
          The results were complex: Students see AI as both a powerful tool and
          a potential crutch. Because of this, they worry about overreliance on
          the technology, misinformation, and the potential for privacy risks.
          <br />
          <br />
          Despite this, they also use AI daily, integrating usage into their
          academic, professional, personal workflows. Here&apos;s a closer look
          at what we found and why it matters.
        </p>
        <Quote
          title='tl;dr: STUDENTS SEE AI AS...'
          quote='A powerful tool, and a potential crutch.'
          className='mb-32'
        />
        <h3 className='text-primary-title'>
          AI as a Tool, Not a Voice/Collaborator
        </h3>
        <p className='text-primary-body body mb-32'>
          One of the most interesting takeaways was that students don&apos;t see
          AI use as an all-or-nothing proposition. Many don&apos;t feel the need
          to disclose the full breadth of their AI—especially in cases of
          assistance—in their academic work. Not because they&apos;re being
          dishonest, but because they only use it for what they consider
          “menial” tasks: summarizing readings, proofreading drafts.
          <br />
          <br />
          In the eyes of students, there&apos;s a common consensus that these
          aren&apos;t seen as acts of intellectual creation, but as clerical
          work that they can offload for AI to handle.
          <br />
          <br />
          “Being able to organize and communicate your own thoughts in your own
          words is a valuable skill to refine, AI or not,” one student said. “As
          long as people aren&apos;t letting their critical thinking, speaking,
          writing, and other skills fall by the wayside [then that&apos;s
          fine].”
        </p>
        <Quote
          quote='Being able to organize and communicate your own thoughts in your own words is a valuable skill to refine.'
          className='mb-32'
        />
        <h3 className='text-primary-title'>
          The Limits of AI-Generated Writing
        </h3>
        <p className='text-primary-body body mb-32'>
          AI is used to troubleshoot code or refine writing. But when it comes
          to personal expression, crafting the actual argument of an essay or
          selecting ideas and making art, students want to maintain full
          control. “I use AI to brainstorm and sometimes workshop [my] writing,
          but I never take huge AI-generated chunks [because] it&apos;s usually
          not that good [or] doesn&apos;t sound like me,” a student says.
          Another agrees by clarifying that she doesn&apos;t use AI for full
          writing, just editing.
          <br />
          <br />
          This hesitation and lack of full buy-in is widespread. Many students
          described AI-generated writing as too stiff and that it overly
          explains everything.
          <br />
          <br />
          A key insight here was that many students cited using and preferring
          Grammarly for small fixes to their writing because other tools such as
          ChatGPT or Claude tend to rewrite too much and strip away the
          student&apos;s natural style.
          <br />
          <br />
          Because of this, students tend to use AI as a structural tool rather
          than a writing one. They might ask an assistant to generate an outline
          or to rephrase a line for clarity—but when it comes to fully formed
          sentences, they step in. Some will even rewrite the outputs entirely,
          and regard the AI&apos;s response as a peer&apos;s rough draft rather
          than a final product.
          <br />
          <br />
          This wariness of AI “voice” ties into a broader issue of trust: if AI
          can&apos;t convincingly replicate human nuance in writing, how can
          students trust it for more complex tasks? Such skepticism plays a
          significant role in why students have such strict limits on AI&apos;s
          involvement in both their creative and intellectual work.
        </p>
        <h3 className='text-primary-title'>The Fear of Skill Atrophy</h3>
        <p className='text-primary-body body mb-32'>
          However, a recurring theme that appeared in the research was a concern
          that AI is making students less willing or able to engage deeply with
          material.
          <br />
          <br />
          “I&apos;m concerned about my over-reliance on AI, I want to keep my
          critical thinking sharp and I fear that using too much of it in my
          workflow will cause my skills to atrophy,” one student voiced more
          concern over soft skills whilst another fretted over the degradation
          of more basic ones such as arithmetic and algebra.
          <br />
          <br />
          A third student took a more definitive stance by saying she does not
          and will never pay for anything AI-related because it is already
          difficult to develop her critical thinking skills. If she begins to
          rely on AI, she won&apos;t pay to “get stupider”.
          <br />
          <br />
          The instant availability of AI-generated responses that students value
          about the technology is a double-edged sword as it makes it tempting
          to bypass the steps and effort of working through complex problems,
          leading to a growing fear of an erosion of independent thought.
          <br />
          <br />
          Also in student minds is the broader concern over learned habits. One
          student touched on expectations: “[Large Learning Models] spit out
          answers within milliseconds, which is impressive, but this can
          decrease our attention span in the long run.” In regard to this
          conversation, there is slight discourse as others argue that AI can be
          used to enhance, rather than replace, understanding.
          <br />
          <br />
          Another student dissected their engagements with AI, saying that
          “[when using AI] I examine the process it is using so that I
          understand and comprehend how to do the problem, rather than just
          copying the output…I aim to use it in a way that still educates me on
          the subject at hand,”.
        </p>
        <h3 className='text-primary-title'>
          Future Uncertainties and the Value of [Human] Work
        </h3>
        <p className='text-primary-body body mb-32'>
          Extrapolating that fear outwards, many students expressed unease about
          the prospects of the future job market, as AI automates more tasks.
          <br />
          <br />
          Some were broad: “I worry humans will forget how to do human things
          and we&apos;ll lose our culture”.
          <br />
          <br />
          Others were more specific: “What scares me the most is [AI&apos;s]
          capacity to eventually replace humans in the workplace and in other
          facilities”. In tandem with this fear, held in balanced conflict with
          the desire to have AI be efficient, is the fear of skills being
          devalued with quotes such as “I think AI shrinks the gap between the
          capable and less capable” and “The value of hard work will be lost
          because many things will become easy [for everyone]”.
        </p>
        <Quote
          quote="I worry humans will forget how to do human things and we'll lose our culture."
          className='mb-32'
        />

        <p className='text-primary-body body mb-32'>
          And the roles students are most fearful of becoming integrated with
          AI? The creative ones.
          <br />
          <br />
          Many students were adamant that AI-generated art and music lacked
          depth and resonance— because they believe the human aspect is yet to
          be fully replicated by the technology and also because they believe
          the aforementioned humanity is what makes art “beautiful and
          valuable”.
          <br />
          <br />
          The theme appears to be that critical thought and creativity are
          traits associated with being a human and even the possibility of
          losing that control to AI strikes deep fear with most students.
        </p>
        <h3 className='text-primary-title'>
          Privacy and Safety, Trust and Misinformation
        </h3>
        <p className='text-primary-body body mb-32'>
          Finally, as with the larger society, students have the same fears as
          most do about emerging tech, primarily in regards to privacy and
          transparency. Many students expressed discomfort and subsequent
          hesitancy to share personal data with AI companies, some stemming from
          the recent virality of AI and some from the current social and
          geo-political influences. “
          <br />
          <br />
          It&apos;s scary to think about how [companies] handle [your
          information], especially since it&apos;s not really regulated,” one
          student said. For the most part, this fear surrounding privacy emerges
          from a distrust that is coupled with misinformation: as students noted
          that the research insights that LLMs might pull as responses can
          contain errors that seem simple and yet are indicative of a larger gap
          to stability.
        </p>
        <Quote
          quote="It's scary to think about how companies handle your information, since it's not really regulated."
          className='mb-32'
        />
        <p className='text-primary-body body mb-32'>
          One student did caveat this margin of error by saying first that AI
          “doesn&apos;t always have the most accurate information and I have to
          always check if the output is right which takes away from using AI in
          the first place. I still learn this way so maybe it&apos;s a great
          thing!”.
        </p>
        <h3 className='text-primary-title'>
          Wrapping things up: How Students Actually Use AI Today
        </h3>
        <p className='text-primary-body body mb-32'>
          Despite these concerns, AI is deeply intertwined with student
          routines. In summary, here&apos;s how they use it: summarizing and
          explaining concepts for school, solving and debugging specific errors
          in work and coding instances, organization and as a sounding board for
          personal uses, and sometimes as a replacement for Google for quick
          queries and answers. Interestingly, those who use AI more tend to be
          more adept at steering and tailoring the technology through advanced
          prompting strategies. While other students, more wary of limitations
          and weaknesses, use it sparingly and yield more variable results.
        </p>
        <div>
          <p className='font-mono text-secondary-body text-center'>
            INFOGRAPHIC TITLE
          </p>
          <div className='rounded-rounding bg-accent w-full h-[530px] my-6' />
          <p className='font-mono text-secondary-body text-center'>
            Optional cool description about this infographic.
          </p>
        </div>
        <p className='text-primary-body body mb-32'>
          Ultimately, students are neither blindly optimistic nor entirely
          dismissive of AI. They see potential, and effectiveness in regards to
          enhanced learning and productivity, but they are also keenly aware of
          the pitfalls.
          <br />
          <br />
          Many have drawn an unspoken boundary: AI is for repetitive and tedious
          grunt work, while meaningful thinking is best left to humans.
          <br />
          <br />
          This nuanced approach suggests that the future of AI in education and
          for students isn&apos;t about banning or embracing it wholesale.
          Students believe that change is coming for the schooling system,
          whether by choice or by force of the tides, and so the focus ought to
          be on how to teach discernment surrounding AI.
          <br />
          <br />
          If students continue to view AI as a supplement rather than a
          substitute for their own intellect, it could develop into a powerful
          asset without diminishing the human ability to think critically and
          create meaningfully.
        </p>
      </section>
      <footer className='px-page mb-section'>
        <div>
          <p>🚧 working</p>
        </div>
        <div className='flex gap-x-8 gap-y-16 flex-wrap'>
          {team.map((member, index) => (
            <div key={index} className='flex gap-6 p-4 flex-1/4 justify-center'>
              <div className='w-[4.875rem] h-[4.875rem] aspect-square rounded-full bg-accent' />
              <div>
                <p className='font-bold font-mono text-primary-body'>
                  {member.name}
                </p>
                <p className='font-mono text-secondary-body'>
                  {member.subtitle}
                </p>
                <div className='flex flex-wrap gap-1 my-3'>
                  {member.role.map((i) => (
                    <p
                      key={i}
                      className='text-secondary-body px-2 py-1 bg-tag font-mono uppercase rounded-[0.125rem] w-max'
                    >
                      {i}
                    </p>
                  ))}
                </div>
                <div className='flex gap-2.5'>
                  {member.email && (
                    <Link href={member.email}>
                      <Email />
                    </Link>
                  )}
                  {member.website && (
                    <Link href={member.website}>
                      <LinkIcon />
                    </Link>
                  )}
                  {member.x && (
                    <Link href={member.x}>
                      <X />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </footer>
    </main>
  );
}
