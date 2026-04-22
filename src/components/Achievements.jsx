import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import imgIeee from '@assets/image_1776890163444.png';
import imgBlix from '@assets/image_1776890256175.png';
import imgDecode from '@assets/image_1776890267024.png';
import imgKiitFest from '@assets/image_1776890274608.png';
import imgSandRover from '@assets/image_1776890282640.png';

gsap.registerPlugin(ScrollTrigger);

const ACHIEVEMENTS = [
  {
    title: 'Winner, IEEE 2025 Project Expo',
    description:
      'Secured 1st place at KIIT University for presenting an innovative AI-based system demonstrating originality, teamwork, and real-world application.',
    tags: ['AI', 'Research', 'Competition'],
    image: imgIeee,
  },
  {
    title: 'Runner-up, Kit Mastery (Senior)',
    description:
      'Blixathon, IIT Bombay. Designed and presented a fully functional prototype showcasing innovation in robotics and embedded systems.',
    tags: ['Robotics', 'Hardware', 'IIT Bombay'],
    image: imgBlix,
  },
  {
    title: 'Event Organizer, Decode and Dominate KIIT Fest 8.0',
    description:
      'Organized a major event featuring puzzle-based quizzes, logical questions, and a website redesign task for the KIIT portal, enhancing participants’ creativity and technical thinking.',
    tags: ['Event Management', 'Leadership', 'Technical'],
    image: imgDecode,
  },
  {
    title: 'Runner-up, IoT and Competitive Programming, KIIT Fest',
    description:
      'Demonstrated strong technical and analytical knowledge in IoT, electronics, and programming during an intense competitive coding and quiz event.',
    tags: ['IoT', 'Competitive Programming', 'Electronics'],
    image: imgKiitFest,
  },
  {
    title: 'Cleared Round 1, Techfest IIT Kharagpur (Sand Rover)',
    description:
      'Qualified in the design and simulation phase of an autonomous rover challenge, emphasizing mechanical control, system coding, and teamwork.',
    tags: ['Robotics', 'Autonomous Systems', 'IIT KGP'],
    image: imgSandRover,
  },
];

export default function Achievements() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.ach-card'),
        { opacity: 0, y: 50 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power3.out',
          immediateRender: false,
        }
      );
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
              className="ach-card group relative rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent overflow-hidden hover:border-red-500/40 transition-all duration-500"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute top-3 left-4 text-red-500 font-mono text-xs tracking-[0.3em]">
                  #{String(i + 1).padStart(2, '0')}
                </div>
              </div>
              <div className="p-6">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
