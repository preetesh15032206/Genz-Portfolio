import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IconWrap = ({ children }) => (
  <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center text-violet-400">
    {children}
  </div>
);

const icons = {
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  chip: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
      <path d="M17.5 19a4.5 4.5 0 1 0-1.5-8.74A6 6 0 0 0 4 12.5 4.5 4.5 0 0 0 6.5 19h11z" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
      <line x1="6" y1="20" x2="6" y2="12" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="18" y1="20" x2="18" y2="14" />
    </svg>
  ),
  layout: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  ),
  wind: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
      <path d="M9.59 4.59A2 2 0 1 1 11 8H2" />
      <path d="M17 8a2.5 2.5 0 1 1 1.77 4.27H2" />
      <path d="M14.59 19.41A2 2 0 1 0 16 16H2" />
    </svg>
  ),
  server: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
      <rect x="3" y="3" width="18" height="7" rx="1" />
      <rect x="3" y="14" width="18" height="7" rx="1" />
      <line x1="7" y1="6.5" x2="7.01" y2="6.5" />
      <line x1="7" y1="17.5" x2="7.01" y2="17.5" />
    </svg>
  ),
};

const SKILLS = [
  { name: 'Python', desc: 'Advanced proficiency', icon: 'code' },
  { name: 'Java', desc: 'Proficient in object-oriented programming and backend logic', icon: 'chip' },
  { name: 'Spring Boot', desc: 'Intermediate knowledge in API development and microservices', icon: 'database' },
  { name: 'AWS', desc: 'Hands-on experience with EC2, S3, and Lambda', icon: 'cloud' },
  { name: 'Tableau', desc: 'Proficient in data visualization and dashboard creation', icon: 'chart' },
  { name: 'JavaScript', desc: 'Advanced in dynamic web functionality and DOM manipulation', icon: 'layout' },
  { name: 'Tailwind CSS', desc: 'Proficient in responsive, modern UI design', icon: 'wind' },
  { name: 'Node.js', desc: 'Intermediate backend development and API integration', icon: 'server' },
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current.querySelectorAll('.skill-card'), {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full bg-[#0b0b1f] py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tight text-white mb-14">
          Technical{' '}
          <span className="text-emerald-400">Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((s) => (
            <div
              key={s.name}
              className="skill-card rounded-2xl bg-[#15152e]/80 border border-white/5 p-8 text-center hover:border-violet-500/40 hover:bg-[#1a1a36]/80 transition-all duration-300"
            >
              <IconWrap>{icons[s.icon]}</IconWrap>
              <h3 className="text-lg font-semibold text-white mb-3">
                {s.name}
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
