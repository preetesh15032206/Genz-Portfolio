import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SKILLS = [
  { name: 'Python', level: 'Advanced proficiency' },
  { name: 'Java', level: 'Proficient in object-oriented programming and backend logic' },
  { name: 'Spring Boot', level: 'Intermediate knowledge in API development and microservices' },
  { name: 'AWS', level: 'Hands-on experience with EC2, S3, and Lambda' },
  { name: 'Tableau', level: 'Proficient in data visualization and dashboard creation' },
  { name: 'JavaScript', level: 'Advanced in dynamic web functionality and DOM manipulation' },
  { name: 'Tailwind CSS', level: 'Proficient in responsive, modern UI design' },
  { name: 'Node.js', level: 'Intermediate backend development and API integration' },
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.skill-card'),
        { opacity: 0, y: 40 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
          immediateRender: false,
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full bg-black py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="max-w-[90rem] mx-auto relative z-10">
        <div className="mb-16 border-b border-white/10 pb-8">
          <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold tracking-tighter text-white font-sans leading-none drop-shadow-lg">
            Technical{' '}
            <span className="font-serif italic font-light opacity-80 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white pr-2">
              Skills
            </span>
          </h2>
          <p className="text-gray-400 font-light tracking-wide text-base md:text-lg max-w-xl mt-6 leading-relaxed">
            The toolkit I use to build, ship, and analyze.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((s) => (
            <div
              key={s.name}
              className="skill-card group relative rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:border-red-500/40 hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                {s.name}
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">{s.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
