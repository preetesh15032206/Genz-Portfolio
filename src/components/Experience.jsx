import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EXPERIENCE = [
  {
    role: 'J.P. Morgan Chase & Co. — Software Engineering Simulation',
    org: 'Virtual Software Engineering Intern · Forage · Remote',
    date: 'Jun 2025',
    bullets: [
      'Developed an interactive full-stack client interface using JavaScript and Python; integrated RESTful APIs to fetch and visualize live financial data in real time',
      'Simulated a real-world trading environment and improved client-server data handling and debugging efficiency by optimizing API request-response flow',
      'Wrote clean, well-documented code following enterprise engineering standards',
    ],
  },
  {
    role: 'Deloitte Australia — Technology & Data Analytics Simulation',
    org: 'Virtual Technology Intern · Forage · Remote',
    date: 'Jun 2025',
    bullets: [
      'Implemented modular programming logic to automate business workflows',
      'Integrated APIs and backend services for seamless data communication and applied Git version control throughout',
      'Delivered a fully working end-to-end prototype with documented architecture plans meeting enterprise IT standards',
    ],
  },
  {
    role: 'Tata Group — GenAI Powered Data Analytics Simulation',
    org: 'Virtual Data Analytics Intern · Forage · Remote',
    date: 'Jun 2025',
    bullets: [
      'Performed EDA using GenAI tools to assess financial risk indicators',
      'Proposed an ethical no-code AI model for customer delinquency prediction',
      'Designed an automated collections strategy driven by analytics insights',
    ],
  },
  {
    role: 'AWS APAC — Solutions Architecture Simulation',
    org: 'Virtual Cloud Architecture Intern · Forage · Remote',
    date: 'Jun 2025',
    bullets: [
      'Designed a scalable, secure cloud architecture using AWS (EC2, S3, Lambda)',
      'Implemented cost-optimization and security configurations across the stack',
      'Produced full deployment documentation and architecture plans',
    ],
  },
  {
    role: 'KIIT Fest 8.0 — Decode and Dominate',
    org: 'Event Organizer & Host · Bhubaneswar, India',
    date: 'Feb 2025',
    bullets: [
      'Organized a national-level technical event with 100+ participants spanning competitive coding, quizzes, logical rounds, and a KIIT portal redesign task',
      'Managed end-to-end logistics, judges, and on-ground operations',
      'Created engaging, problem-solving rounds to enhance campus tech culture',
    ],
  },
  {
    role: 'Pravaah ’25 — Robotics Challenge',
    org: 'Team Lead · Top 8 Qualifier · IIT Bhubaneswar, India',
    date: 'Apr 2025',
    bullets: [
      'Led the team to a top-8 finish at IIT Bhubaneswar',
      'Applied Arduino IDE and embedded systems in a live competitive challenge',
      'Coordinated technical strategy and rapid debugging under timed conditions',
    ],
  },
  {
    role: 'Blixathon — Kit Mastery (Seniors)',
    org: 'Technical Competitor · Runner-Up · IIT Bombay Techfest, India',
    date: 'Dec 2024',
    bullets: [
      'Designed and assembled a functional robotics prototype showcasing embedded systems and hardware integration under timed conditions',
      'Secured Runner-Up at IIT Bombay’s international Techfest',
      'Demonstrated teamwork and creative problem-solving under pressure',
    ],
  },
  {
    role: 'KIIT Fest 7.0 — Tech Royale',
    org: 'Finalist · Coding, Robotics & Console Assembly · Bhubaneswar, India',
    date: 'Feb 2024',
    bullets: [
      'Competed in quiz, competitive coding, gaming, and Arduino Uno console assembly',
      'Built a custom gaming console and secured 2nd Runner-Up in the final round',
      'Represented the institute among top-performing teams nationally',
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
