import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import imgSpiderman from '../assets/spiderman/20260407_055437.png';
import imgMan from '../assets/man/1775519899126.png';

gsap.registerPlugin(ScrollTrigger);

const BLENDS = [
  'mix-blend-luminosity brightness-75',
  'mix-blend-luminosity grayscale',
  'mix-blend-overlay brightness-125 saturate-150',
];

const RAW_MISSIONS = [
  {
    name: 'Intelligent Microclimate Monitoring & Prediction System',
    description: 'End-to-end IoT system with Arduino sensors streaming to a Flask backend, an ensemble ML model with weighted soft-voting for live weather classification and 2-hour forecasting, plus an automated retraining pipeline.',
    tech: ['C++', 'Arduino', 'Python', 'Flask', 'Scikit-learn'],
  },
  {
    name: 'Banking Transaction Microservice',
    description: 'Production-style Spring Boot microservice built during the J.P. Morgan simulation — REST APIs, JPA + H2 persistence, and event-driven Kafka messaging mirroring enterprise banking architecture.',
    tech: ['Spring Boot', 'Kafka', 'JPA', 'Maven'],
  },
  {
    name: 'Traffic Violation Detection System',
    description: 'AI-powered full-stack platform processing live video feeds for red-light and helmet violations, combining OpenCV and YOLOv8 with automated evidence collection in PostgreSQL.',
    tech: ['YOLOv8', 'FastAPI', 'React', 'PostgreSQL'],
  },
  {
    name: 'BookEasy Chatbot — RAG Architecture',
    description: 'Conversational AI for real-time book discovery and reservation, powered by a RAG pipeline with Pinecone vector search, WebSocket messaging, and a React + PostgreSQL stack.',
    tech: ['LLM', 'Pinecone', 'Node.js', 'WebSockets', 'React'],
  },
  {
    name: 'IIT Bombay Demo Website',
    description: 'Production-quality full-stack site with a Sanity CMS-driven backend, AI-powered search, and project, team, and event management — handled end-to-end through deployment.',
    tech: ['Next.js', 'React', 'Tailwind', 'Sanity CMS', 'LLM'],
  },
  {
    name: 'AI Traffic Light Optimization',
    description: 'Multi-intersection adaptive signal control using reinforcement learning on a Jetson Nano with YOLOv8 vehicle detection, trained in the SUMO traffic simulator for green-corridor optimization.',
    tech: ['C++', 'RL', 'YOLOv8', 'SUMO', 'Jetson Nano'],
  },
  {
    name: 'Autonomous RC Boat',
    description: 'Remote-controlled boat with GPS waypoint navigation and real-time obstacle avoidance using a Pixhawk flight controller and the MAVLink protocol for open-water autonomy.',
    tech: ['Pixhawk', 'MAVLink', 'GPS', 'IMU', 'Python'],
  },
  {
    name: 'Sand Rover — IIT Kharagpur',
    description: 'All-terrain 6WD rover with traction control optimized for sand navigation using ROS and LiDAR — qualified for the Techfest IIT Kharagpur Sand Rover Challenge.',
    tech: ['ROS', 'LiDAR', 'BLDC', 'C++', 'CAD'],
  },
  {
    name: 'Arduino Gaming Console',
    description: 'Handheld gaming device running Snake and Tetris on an ESP32 + TFT display with custom 3D-printed enclosure — full hardware-software co-design.',
    tech: ['ESP32', 'Arduino', 'C++', 'TFT', '3D Printing'],
  },
  {
    name: 'Personal Portfolio Website',
    description: 'Fully responsive portfolio at preeteshprofile.vercel.app — clean, mobile-compatible UI built with HTML, CSS, JavaScript, and Tailwind CSS, deployed on Vercel.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Tailwind', 'Vercel'],
  },
];

const MISSIONS = RAW_MISSIONS.map((m, i) => ({
  ...m,
  id: String(i + 1).padStart(2, '0'),
  image: i % 2 === 0 ? imgSpiderman : imgMan,
  blend: BLENDS[i % BLENDS.length],
  link: '#',
}));

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const imageRef = useRef(null);
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate mouse position strictly bounded within the card [-1, 1]
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    // Apply 3D tilt mapped against mouse offset (multiplied by degrees of max tilt)
    gsap.to(cardRef.current, {
      rotateY: x * 15, // tilt left/right up to 7.5 deg
      rotateX: -y * 15, // tilt up/down up to 7.5 deg
      transformPerspective: 1000,
      ease: 'power2.out',
      duration: 0.4
    });
    
    // Move the glow to follow the cursor exactly
    gsap.to(glowRef.current, {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
      duration: 0.2
    });
    
    // Inverse parallax on the image inside
    gsap.to(imageRef.current, {
      x: -x * 20,
      y: -y * 20,
      scale: 1.1,
      ease: 'power2.out',
      duration: 0.4
    });
  };

  const handleMouseLeave = () => {
    // Snap back everything cleanly
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      ease: 'power3.out',
      duration: 0.6
    });
    
    gsap.to(glowRef.current, {
      opacity: 0,
      duration: 0.4
    });
    
    gsap.to(imageRef.current, {
      x: 0,
      y: 0,
      scale: 1.0,
      ease: 'power3.out',
      duration: 0.6
    });
  };

  return (
    <div 
      className="project-card relative w-full h-[450px] rounded-xl overflow-hidden cursor-pointer group bg-black border border-white/10"
      style={{ transformStyle: 'preserve-3d' }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-zinc-900">
        <img 
          ref={imageRef}
          src={project.image} 
          alt={project.name} 
          className={`absolute inset-0 w-full h-[120%] -top-[10%] object-cover object-center ${project.blend} transition-all duration-[1.5s]`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
      </div>

      {/* Dynamic Hover Glow Layer Tracker */}
      <div 
        ref={glowRef}
        className="absolute w-64 h-64 bg-red-500/10 rounded-full blur-[80px] pointer-events-none z-10 -translate-x-1/2 -translate-y-1/2 opacity-0 mix-blend-screen"
      />
      
      {/* Laser Border overlay on Hover */}
      <div className="absolute inset-0 border border-red-500/0 group-hover:border-red-500/40 rounded-xl transition-colors duration-500 z-20 pointer-events-none" />

      {/* Foreground Content */}
      <div className="absolute inset-0 z-30 p-8 flex flex-col justify-end pointer-events-none" style={{ transform: 'translateZ(30px)' }}> {/* Push text outward on Z axis */}
        
        {/* Dossier Code */}
        <div className="text-red-500/80 font-mono text-xs tracking-[0.3em] mb-2 font-bold uppercase transition-transform duration-500 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
          File_ID // {project.id}
        </div>
        
        <h3 className="text-3xl font-bold tracking-tight text-white mb-3 leading-none drop-shadow-xl font-sans">
          {project.name}
        </h3>
        
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 font-light max-w-[90%]">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6 pointer-events-auto">
          {project.tech.map((tool) => (
            <span key={tool} className="text-[10px] uppercase tracking-widest px-3 py-1.5 border border-white/20 rounded-full text-gray-300 font-medium">
              {tool}
            </span>
          ))}
        </div>
        
        <div className="mt-auto pointer-events-auto w-fit">
          <a href={project.link} className="flex items-center space-x-2 text-sm uppercase tracking-[0.2em] font-medium text-white group/link relative">
            <span className="relative overflow-hidden block">
              <span className="block group-hover/link:-translate-y-full transition-transform duration-300">Access Record</span>
              <span className="block absolute inset-0 translate-y-full group-hover/link:translate-y-0 transition-transform duration-300 text-red-400">Access Record</span>
            </span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300 text-red-500">
              <line x1="5" y1="19" x2="19" y2="5"></line>
              <polyline points="10 5 19 5 19 14"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};


export default function Projects() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });
      
      // Header Animation
      tl.fromTo(headerRef.current.children,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
      );
      
      // Select cards via class
      const cards = sectionRef.current.querySelectorAll('.project-card');
      
      tl.fromTo(cards,
        { opacity: 0, y: 100, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, stagger: 0.15, ease: "power3.out" },
        "-=0.6"
      );
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="w-full min-h-screen bg-[#030303] py-32 px-6 md:px-12 lg:px-24 flex flex-col justify-center relative overflow-hidden"
    >
      <div className="max-w-[90rem] mx-auto w-full relative z-10">
        
        {/* Header Block */}
        <div ref={headerRef} className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold tracking-tighter text-white font-sans leading-none drop-shadow-lg mb-4">
              Featured <span className="font-serif italic font-light opacity-80 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white pr-2">Projects</span>
            </h2>
          </div>
          <p className="text-gray-400 font-light tracking-wide text-base md:text-lg max-w-sm mt-6 md:mt-0 leading-relaxed md:text-right">
            A selection of AI, robotics, and full-stack work spanning research, hackathons, and production prototypes.
          </p>
        </div>
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 place-items-center">
          {VISIONS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
      </div>
      
      {/* Background Ambience line-grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }} 
      />
    </section>
  );
}

// Ensure the mapping variable aligns exactly with the constant 
const VISIONS = MISSIONS;
