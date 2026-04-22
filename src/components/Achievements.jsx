import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ACHIEVEMENTS = [
  {
    title: 'Winner, IEEE 2025 Project Expo',
    description:
      'Secured 1st place at KIIT University for presenting an innovative AI-based system demonstrating originality, teamwork, and real-world application.',
    tags: ['AI', 'Research', 'Competition'],
  },
  {
    title: 'Runner-up, Kit Mastery (Senior)',
    description:
      'Blixathon, IIT Bombay. Designed and presented a fully functional prototype showcasing innovation in robotics and embedded systems.',
    tags: ['Robotics', 'Hardware', 'IIT Bombay'],
  },
  {
    title: 'Event Organizer, Decode and Dominate KIIT Fest 8.0',
    description:
      'Organized a major event featuring puzzle-based quizzes, logical questions, and a website redesign task for the KIIT portal.',
    tags: ['Event Management', 'Leadership', 'Technical'],
  },
  {
    title: 'Runner-up, IoT and Competitive Programming, KIIT Fest',
    description:
      'Demonstrated strong technical and analytical knowledge in IoT, electronics, and programming during an intense coding and quiz event.',
    tags: ['IoT', 'Competitive Programming', 'Electronics'],
  },
  {
    title: 'Cleared Round 1, Techfest IIT Kharagpur (Sand Rover)',
    description:
      'Qualified in the design and simulation phase of an autonomous rover challenge, emphasizing mechanical control and system coding.',
    tags: ['Robotics', 'Autonomous Systems', 'IIT KGP'],
  },
];

export default function Achievements() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current.querySelectorAll('.ach-card'), {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        opacity: 0,
        y: 50,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative w-full bg-black py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="max-w-[90rem] mx-auto relative z-10">
        <div className="mb-16 border-b border-white/10 pb-8">
          <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold tracking-tighter text-white font-sans leading-none drop-shadow-lg">
            Key{' '}
            <span className="font-serif italic font-light opacity-80 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white pr-2">
              Achievements
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((a, i) => (
            <div
              key={i}
              className="ach-card group relative rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6 hover:border-red-500/40 transition-all duration-500"
            >
              <div className="text-red-500 font-mono text-xs tracking-[0.3em] mb-3">
                #{String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 tracking-tight leading-snug">
                {a.title}
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed mb-5">
                {a.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {a.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] uppercase tracking-widest px-2.5 py-1 border border-white/15 rounded-full text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
