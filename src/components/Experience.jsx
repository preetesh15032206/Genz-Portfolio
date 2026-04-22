import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EXPERIENCE = [
  {
    role: 'Deloitte Australia – Technology Simulation (Virtual)',
    org: 'Deloitte Forage',
    date: 'May 2025',
    bullets: [
      'Implemented modular programming logic to automate business workflows',
      'Developed a prototype demonstrating end-to-end system functionality',
      'Integrated APIs and backend services for seamless data communication',
      'Applied version control and debugging techniques for reliable performance',
    ],
  },
  {
    role: 'AWS APAC – Solutions Architecture Simulation (Virtual)',
    org: 'AWS Forage',
    date: 'May 2025',
    bullets: [
      'Designed a scalable and secure cloud hosting architecture using AWS',
      'Implemented cost-optimization strategies for resource efficiency',
      'Configured network and security settings to ensure reliability',
      'Documented architecture and deployment plans for maintainability',
    ],
  },
  {
    role: 'J.P. Morgan Software Engineering Skills Learned (Virtual)',
    org: 'J.P. Morgan Chase & Co. Forage',
    date: 'May 2025',
    bullets: [
      'Developed an interactive client interface using JavaScript and Python',
      'Integrated RESTful APIs to visualize live financial data',
      'Simulated a real-world trading environment to test system performance',
      'Enhanced debugging and data handling efficiency in client-server flow',
    ],
  },
  {
    role: 'Tata Group Data Analytics (Virtual)',
    org: 'Tata Group Forage',
    date: 'May 2025',
    bullets: [
      'Performed EDA using GenAI tools to assess financial risk indicators',
      'Proposed a no-code AI model for predicting customer delinquency',
      'Designed an ethical automated collections strategy using analytics',
      'Applied data-driven methods for business decision-making',
    ],
  },
  {
    role: 'Event Organizer & Host – Decode and Dominate',
    org: 'School of Computer Engineering | KIIT Fest 8.0',
    date: 'Feb 2025',
    bullets: [
      'Organized and hosted the Decode and Dominate coding challenge',
      'Managed event logistics, judges, and technical operations',
      'Created engaging, problem-solving rounds for participants',
      'Enhanced campus culture through innovative technical events',
    ],
  },
  {
    role: 'IIT Bombay – Blixathon (Kit Mastery) Seniors Category',
    org: 'IIT Bombay Blix-A-Thon',
    date: 'Dec 2024',
    bullets: [
      'Designed and assembled a functional prototype demonstrating robotics innovation',
      'Collaborated in team-based project development and debugging',
      'Secured Runner-Up position for creative design and technical execution',
      'Enhanced embedded systems and hardware integration skills',
    ],
  },
  {
    role: 'KIIT Fest 7.0 Finalist',
    org: 'KIIT Fest 7.0 | Bhubaneswar',
    date: 'Feb 2023',
    bullets: [
      'Represented institute in national-level coding and robotics competition',
      'Secured 2nd Runner-Up position among top-performing teams',
      'Showcased exceptional debugging and real-time problem-solving skills',
      'Demonstrated teamwork and technical leadership under pressure',
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current.querySelectorAll('.exp-item'), {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        opacity: 0,
        x: -30,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative w-full bg-[#030303] py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="max-w-[90rem] mx-auto relative z-10">
        <div className="mb-16 border-b border-white/10 pb-8">
          <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold tracking-tighter text-white font-sans leading-none drop-shadow-lg">
            Professional{' '}
            <span className="font-serif italic font-light opacity-80 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white pr-2">
              Experience
            </span>
          </h2>
          <p className="text-gray-400 font-light tracking-wide text-base md:text-lg max-w-xl mt-6 leading-relaxed">
            Virtual internships, hackathons, and events that shaped my engineering journey.
          </p>
        </div>

        <div className="relative pl-6 md:pl-10 border-l border-white/10 space-y-12">
          {EXPERIENCE.map((e, i) => (
            <div key={i} className="exp-item relative">
              <span className="absolute -left-[33px] md:-left-[45px] top-2 w-3 h-3 rounded-full bg-red-500 ring-4 ring-red-500/10" />
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                  {e.role}
                </h3>
                <span className="text-xs uppercase tracking-widest text-red-400 font-mono">
                  {e.date}
                </span>
              </div>
              <p className="text-sm text-gray-500 font-light italic mb-4">{e.org}</p>
              <ul className="space-y-2">
                {e.bullets.map((b, j) => (
                  <li key={j} className="text-gray-400 text-sm md:text-base font-light flex gap-3">
                    <span className="text-red-500/70 mt-1.5 flex-shrink-0">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
