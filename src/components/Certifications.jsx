import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CERTS = [
  {
    title: 'Google Cloud Skills',
    issuer: 'Google Cloud',
    skills: ['Cloud Fundamentals', 'GCP Services', 'Cloud IAM', 'Security', 'Practical Labs'],
    link: 'https://www.skills.google/public_profiles/f77be697-eb2b-4a39-9d95-db901bcf65fb',
  },
  {
    title: 'Microsoft Learn Achievements',
    issuer: 'Microsoft Learn',
    skills: ['Azure', 'Power Platform', 'Microsoft 365', 'AI', 'Cloud', 'Data Analysis'],
    link: 'https://learn.microsoft.com/en-us/users/preeteshkumarchaudhary-0149/achievements?tab=tab-courses',
  },
  {
    title: 'Data Science Essentials with Python',
    issuer: 'Cisco Networking Academy',
    skills: ['Data Visualization', 'Pandas', 'Matplotlib', 'Jupyter Notebook'],
    link: 'https://www.credly.com/earner/earned/badge/c31834f3-fd8c-4d5b-bc8b-90fb2bd4a64a',
  },
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte Forage',
    skills: ['Data Analysis', 'Interpretation', 'Problem Solving', 'BI'],
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_9KK2rh8uLBp4AekuY_1749697987934_completion_certificate.pdf',
  },
  {
    title: 'Enterprise Data Science in Practice',
    issuer: 'IBM Professional Certificate',
    skills: ['Artificial Intelligence', 'Deep Learning', 'Computer Vision', 'Chatbots'],
    link: 'https://www.credly.com/earner/earned/badge/f5eb54cb-030c-4b0e-bc13-000d2c85af8f',
  },
  {
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM Professional Certificate',
    skills: ['AI Principles', 'Chatbots', 'Computer Vision', 'IBM Cloud'],
    link: 'https://www.credly.com/earner/earned/badge/60c3d97e-401d-42d4-80de-a0f389bfdb07',
  },
  {
    title: 'Machine Learning for Data Science Projects',
    issuer: 'IBM Professional Certificate',
    skills: ['Data Modeling', 'Feature Engineering', 'Model Training', 'Hyperparameter Optimization'],
    link: 'https://www.credly.com/earner/earned/badge/cac5a964-03c5-4699-9cf5-781fe7c27fe8',
  },
  {
    title: 'Software Engineering JS',
    issuer: 'J.P. Morgan Forage',
    skills: ['JavaScript', 'RESTful APIs', 'Client-Server', 'Debugging'],
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_9KK2rh8uLBp4AekuY_1749633778634_completion_certificate.pdf',
  },
  {
    title: 'GenAI Powered Data Analytics',
    issuer: 'Tata Group Forage',
    skills: ['GenAI', 'Data Analytics', 'No-Code Models', 'Risk Analysis'],
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_9KK2rh8uLBp4AekuY_1749698893391_completion_certificate.pdf',
  },
  {
    title: 'Automation Implementation Methodology',
    issuer: 'UiPath Academy',
    skills: ['RPA', 'Automation Design', 'Implementation Strategy'],
    link: 'https://www.linkedin.com/in/preetesh-chaudhary-75621a1b0/',
  },
  {
    title: 'National Space Hackathon 2025',
    issuer: 'Unstop • IIT Delhi',
    skills: ['Hackathon', 'Teamwork', 'Space Technology'],
    link: 'https://unstop.com/certificate-preview/d3d17e6f-b1ce-4be5-ab51-c7c8647584ae',
  },
  {
    title: 'Konnexions IT & Web Development Society',
    issuer: 'KIIT Student Activity Centre',
    skills: ['HTML', 'CSS', 'JavaScript', 'Web Project Management'],
    link: 'https://drive.google.com/drive/folders/1DrKvNdHXp_8_rWRjxyfY886X67uhhZrT',
  },
  {
    title: "Pravaah '25 Soccer Tournament",
    issuer: 'IIT Bhubaneswar',
    skills: ['Arduino IDE', 'Embedded Systems', 'Robotics'],
    link: 'https://www.linkedin.com/in/preetesh-chaudhary-75621a1b0/',
  },
  {
    title: 'KiiT Fest 8.0',
    issuer: 'KIIT, Bhubaneswar',
    skills: ['Event Participation', 'Coding', 'Teamwork'],
    link: 'https://www.linkedin.com/in/preetesh-chaudhary-75621a1b0/',
  },
  {
    title: 'Blixathon (Techfest) Runner-up',
    issuer: 'Blix Education • IIT Bombay',
    skills: ['Robotic Design', 'Team Collaboration', 'Electronics'],
    link: 'https://www.linkedin.com/in/preetesh-chaudhary-75621a1b0/',
  },
  {
    title: 'Tech Royale • KIIT FEST 7.0',
    issuer: 'KIIT, Bhubaneswar',
    skills: ['Arduino IDE', 'Robotics', 'Console Game Development'],
    link: 'https://www.linkedin.com/in/preetesh-chaudhary-75621a1b0/',
  },
  {
    title: 'Java (Certificate)',
    issuer: 'HackerRank',
    skills: ['Core Java', 'OOP', 'Data Structures', 'Problem Solving'],
    link: 'https://www.hackerrank.com/certificates/iframe/dabba64948d3',
  },
  {
    title: 'Python (Certificate)',
    issuer: 'HackerRank',
    skills: ['Python', 'Data Analysis', 'Scripting', 'Algorithms'],
    link: 'https://www.hackerrank.com/certificates/8e7f1df88520',
  },
  {
    title: 'SQL (Intermediate) Certificate',
    issuer: 'HackerRank',
    skills: ['Intermediate SQL', 'Joins', 'Query Optimization'],
    link: 'https://www.hackerrank.com/certificates/10fd30612619',
  },
];

export default function Certifications() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current.querySelectorAll('.cert-card'), {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.05,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative w-full bg-[#030303] py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="max-w-[90rem] mx-auto relative z-10">
        <div className="mb-16 border-b border-white/10 pb-8">
          <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold tracking-tighter text-white font-sans leading-none drop-shadow-lg">
            Certifications &{' '}
            <span className="font-serif italic font-light opacity-80 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white pr-2">
              Credentials
            </span>
          </h2>
          <p className="text-gray-400 font-light tracking-wide text-base md:text-lg max-w-xl mt-6 leading-relaxed">
            Verified credentials from Google, Microsoft, IBM, Cisco, AWS, J.P. Morgan, Tata, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {CERTS.map((c, i) => (
            <a
              key={i}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card group relative rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:border-red-500/40 hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-500 flex flex-col"
            >
              <h3 className="text-base font-semibold text-white mb-1 tracking-tight leading-snug">
                {c.title}
              </h3>
              <p className="text-xs text-red-400/80 font-mono tracking-wide uppercase mb-3">
                {c.issuer}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {c.skills.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] tracking-wide px-2 py-0.5 border border-white/10 rounded-full text-gray-400 group-hover:text-gray-200 transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <span className="absolute top-4 right-4 text-white/30 group-hover:text-red-400 transition-colors text-xs">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
