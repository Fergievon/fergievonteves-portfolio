import { useRef, useEffect, useCallback, useState } from 'react';
import { gsap } from 'gsap';
import './MagicBento.css';
import { FiCode, FiLayers, FiLayout } from 'react-icons/fi';
import Carousel from './Carousel';
import { motion } from 'framer-motion';

import linkedin from '../assets/logos/linkedin.png';
import Resume from '../assets/TEVES_RESUME.pdf';
import Arduino from '../assets/logos/arduino.png';
import CSharp from '../assets/logos/csharp.png';
import CSS from '../assets/logos/css.png';
import Figma from '../assets/logos/figma.png';
import HTML from '../assets/logos/html.png';
import JavaScript from '../assets/logos/javascript.png';
import Python from '../assets/logos/python.png';
import ReactJS from '../assets/logos/reactjs.png';
import SQL from '../assets/logos/SQL.png';
import Photoshop from '../assets/logos/psd.png';
import Illustrator from '../assets/logos/illustrator.png';
import MATLAB from '../assets/logos/matlab.png';
import RaspberryPi from '../assets/logos/raspi.png';
import SupaBase from '../assets/logos/SupaBase.png';
import WPF from '../assets/logos/wpf.png';
import Tinkercad from '../assets/logos/tinkercad.png';
import EagleCAD from '../assets/logos/eaglecad.png';
import Git from '../assets/logos/git.png';
import Vuforia from '../assets/logos/Vuforia.png';
import blender from '../assets/logos/blender.png';


import Project3 from '../assets/project_photos/Project3.png';
import Project31 from '../assets/project_photos/Project31.jpg';
import Project32 from '../assets/project_photos/Project32.jpg';
import Project33 from '../assets/project_photos/Project33.png';
import Project34 from '../assets/project_photos/Project34.png';
import Project35 from '../assets/project_photos/Project35.png';
import Project36 from '../assets/project_photos/Project36.png';
import Project37 from '../assets/project_photos/Project37.png';

import Project4 from '../assets/project_photos/Project4.png';
import Project41 from '../assets/project_photos/Project41.png';
import Project42 from '../assets/project_photos/Project42.png';
import Project43 from '../assets/project_photos/Project43.png';
import Project44 from '../assets/project_photos/Project44.jpg';

import Project11 from '../assets/project_photos/Project11.png';
import Project12 from '../assets/project_photos/Project12.png';
import Project13 from '../assets/project_photos/Project13.png';
import Project14 from '../assets/project_photos/Project14.png';
import Project15 from '../assets/project_photos/Project15.png';

import Project21 from '../assets/project_photos/Project21.png';
import Project22 from '../assets/project_photos/Project22.png';

import Project51 from '../assets/project_photos/Project51.jpg';
import Project52 from '../assets/project_photos/Project52.jpg';
import Project53 from '../assets/project_photos/Project53.png';
import Project54 from '../assets/project_photos/Project54.png';
import Project55 from '../assets/project_photos/Project55.png';
import Project56 from '../assets/project_photos/Project56.png';

import Project6 from '../assets/project_photos/Project6.png';
import Project61 from '../assets/project_photos/Project61.png';
import Project62 from '../assets/project_photos/Project62.png';
import Project63 from '../assets/project_photos/Project63.png';
import Project64 from '../assets/project_photos/Project64.png';
import Project65 from '../assets/project_photos/Project65.png';

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '234, 16, 132';
const MOBILE_BREAKPOINT = 768;

const cardData = [
  {
    subject: 'Software Development Project',
    title: 'RCCharter Flight Management System Application',
    description: 'RCCharter Flight Management System is a C# WPF application with SQL integration that allows admins to manage flight charters, assign crew, and track financial payments, developed as a final requirement for Software Development.',
    descriptionforcard:'RCCharter Flight Management System is a comprehensive application developed as a final project for my Software Development course. The system enables administrators to charter aircraft, select the crew for each flight, and monitor financial payments, providing a practical platform for managing flight operations. Built using C#, WPF, and SQL, the project emphasizes database management and SQL implementation, strengthening both front-end and back-end skills. I served as the sole developer, handling all aspects of design, development, and database integration, ensuring a fully functional and user-friendly system.',
    showThumbnail: false,
    stack:[WPF, CSharp, SQL],
    carouselImages: [
      { id: 1,image: Project11 },
      { id: 2,image: Project12 },
      { id: 3,image: Project13 },
      { id: 4,image: Project14 },
      { id: 5,image: Project15 },
    ]
  },
  {
    subject: 'Data Structures and Algorithms Project',
    title: 'Polynomial Equations Calculator Application',
    description: 'The Polynomial Calculator is a logic-driven application developed using C# and WPF that evaluates polynomial expressions through infix-to-postfix conversion, supporting basic polynomial operations with a strong focus on data structures and algorithms.',
    descriptionforcard:'The Polynomial Calculator is a logic-intensive project developed as a final requirement for the Data Structures and Algorithms course. The application implements infix-to-postfix conversion to efficiently parse and evaluate polynomial expressions, demonstrating the practical application of stacks and other fundamental data structures. It supports polynomial addition, subtraction, multiplication, and division, with emphasis on algorithmic correctness and performance. I was the sole developer of this project, responsible for the system design, algorithm implementation, and user interface development. The application was built using C# and WPF, highlighting strong problem-solving skills and a deep focus on logical and algorithmic implementation.',
    showThumbnail: false,
    stack:[WPF, CSharp],
    carouselImages: [
      { id: 1,image: Project21 },
      { id: 2,image: Project22 },
    ]
  },
  {
    subject: 'SI-P Commmunity Project',
    title: 'Attendance Monitoring System with RFID Scanner',
    description: 'The RFID Attendance Monitoring System is a hardware-software project that uses RFID technology to automatically track student entry and exit, providing real-time and accurate attendance monitoring for Vicente Hizon Sr. Elementary School.',
    descriptionforcard: 'The RFID Attendance Monitoring System is a hardware-software integrated project developed in collaboration with the ARRUPE Office for our community partner, Vicente Hizon Sr. Elementary School. The system uses RFID technology to automatically record student entry and exit, providing accurate and real-time attendance tracking. It also enables the monitoring of class sections and assigned teachers, helping improve efficiency, security, and record management within the school environment. In addition, the system sends real-time SMS messages to a students parent whenever an entry or exit scan is detected. This is a group project developed in collaboration with the ARRUPE Office of Ateneo de Davao University. Our group consists of six members, and I was responsible for developing the software (front-end), performing quality checks for both hardware and software, and creating the 3D model of the hardware case. The project was built using Arduino for the hardware component and C# WPF for the front-end application.',
    showThumbnail: true,
    image: Project3,
    stack:[Arduino, CSharp,WPF,Tinkercad,EagleCAD,Git,SQL],
    carouselImages: [
      { id: 1,image: Project31 },
      { id: 2,image: Project32 },
      { id: 3,image: Project33 },
      { id: 4,image: Project34 },
      { id: 5,image: Project35 },
      { id: 6,image: Project36 },
      { id: 7,image: Project37 },
    ]
  },
  {
    subject: 'SHS Capstone Project',
    title: 'AR Learning Application for Basic Biological Structures',
    description: 'An augmented reality mobile application that uses flash cards to display interactive 3D models of basic biological structures, developed as a Senior High School capstone project using C#, Vuforia SDK, and Blender.',
    descriptionforcard: 'The Augmented Reality Mobile Application for Learning Basic Biological Structures is an educational mobile application that utilizes augmented reality and flash cards to present interactive 3D models of fundamental biological structures. When scanned, each flash card triggers a corresponding 3D model with labeled parts and descriptive information, allowing learners to better visualize and understand complex biological concepts. This project was developed as a Senior High School STEM capstone research project by a team of five members, where I served as the group leader and co-developer responsible for the applications coding and system integration. The application was built using C# and the Vuforia SDK for AR functionality, while Blender was used to create and optimize the 3D biological models. The project achieved 3rd Place at the STEM SHS Capstone Exposium held at Mapúa Malayan Colleges Mindanao and was successfully published as a research project, recognizing its contribution to technology-enhanced learning.',
    showThumbnail: true,
    image: Project4,
    stack:[CSharp, Vuforia, blender],
    carouselImages: [
      { id: 1,image: Project41 },
      { id: 2,image: Project42 },
      { id: 3,image: Project43 },
      { id: 4,image: Project44 },
    ]
  },
  {
    subject: 'COMPUTER ENGINEERING DRAFTING & DESIGN Project',
    title: 'Pendulum Stop Watch',
    description: 'Pendulum Stopwatch is a hardware-based midterm project featuring a photoelectric sensor to track pendulum swings and a 4-segment display to measure time in milliseconds. I handled the PCB design, component assembly, and 3D modeling of the case.',
    descriptionforcard:'Pendulum Stopwatch is a midterm project for my Computer Engineering Drafting and Design class, developed in collaboration with a partner. The project features a photoelectric sensor to detect pendulum swings and a 4-segment display to measure the time in milliseconds upon the third swing. I was responsible for the hardware aspects, including designing the circuit board, creating the PCB, assembling all components, and 3D modeling the project case. This project demonstrates the integration of electronics design, precise measurement, and practical engineering skills, combining both hardware and mechanical elements in a functional prototype.',
    showThumbnail: false,
    stack:[Arduino, EagleCAD,Tinkercad],
    carouselImages: [
      { id: 1,image: Project52 },
      { id: 2,image: Project51 },
      { id: 3,image: Project53 },
      { id: 4,image: Project54 },
      { id: 5,image: Project55 },
      { id: 6,image: Project56 },
    ]
  },
  {
    subject: 'TECHNOPRENEURSHIP Project',
    title: 'GuideAble: Mobile Application for PWD in Davao City Prototype',
    description: 'GuideAble is a prototype mobile application designed to help persons with disabilities navigate establishments in Davao City, featuring accessibility-focused UI/UX elements to support mobility and independence.',
    descriptionforcard:'GuideAble is a prototype mobile application developed as a final project for the Technopreneurship course. The application is designed to assist persons with disabilities (PWD) in navigating establishments within Davao City by providing accessibility-centered navigation features. Emphasis was placed on inclusive and user-friendly UI/UX design, incorporating tools such as text-to-speech functionality and other accessibility-enhancing features to improve ease of use, mobility, and independence for PWD users. I am the sole developer for this prototype where I developed the UI/UX and the functioning protoype using Figma and Adobe applications for the graphics.',
    showThumbnail: false,
    stack:[Figma, Photoshop, Illustrator],
    isTall: true,
    carouselImages: [
      { id: 1,image: Project61 },
      { id: 2,image: Project6 },
      { id: 3,image: Project62 },
      { id: 4,image: Project63 },
      { id: 5,image: Project64 },
      { id: 6,image: Project65 },
    ]
  },
];
const popUpVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 260, 
      damping: 20 
    } 
  }
};
const createParticleElement = (x, y, color = DEFAULT_GLOW_COLOR) => {
  const el = document.createElement('div');
  el.className = 'particle';
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const calculateSpotlightValues = radius => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75
});

const updateCardGlowProperties = (card, mouseX, mouseY, glow, radius) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty('--glow-x', `${relativeX}%`);
  card.style.setProperty('--glow-y', `${relativeY}%`);
  card.style.setProperty('--glow-intensity', glow.toString());
  card.style.setProperty('--glow-radius', `${radius}px`);
};

const ParticleCard = ({
  children,
  className = '',
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  clickEffect = false,
  enableMagnetism = false
}) => {
  const cardRef = useRef(null);
  const particlesRef = useRef([]);
  const timeoutsRef = useRef([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef([]);
  const particlesInitialized = useRef(false);
  const magnetismAnimationRef = useRef(null);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;

    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(Math.random() * width, Math.random() * height, glowColor)
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();

    particlesRef.current.forEach(particle => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'back.in(1.7)',
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        }
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;

    if (!particlesInitialized.current) {
      initializeParticles();
    }

    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;

        const clone = particle.cloneNode(true);
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });

        gsap.to(clone, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: 'none',
          repeat: -1,
          yoyo: true
        });

        gsap.to(clone, {
          opacity: 0.3,
          duration: 1.5,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true
        });
      }, index * 100);

      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;

    const element = cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 5,
          rotateY: 5,
          duration: 0.3,
          ease: 'power2.out',
          transformPerspective: 1000
        });
      }
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }

      if (enableMagnetism) {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    const handleMouseMove = e => {
      if (!enableTilt && !enableMagnetism) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
          rotateX,
          rotateY,
          duration: 0.1,
          ease: 'power2.out',
          transformPerspective: 1000
        });
      }

      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.05;
        const magnetY = (y - centerY) * 0.05;

        magnetismAnimationRef.current = gsap.to(element, {
          x: magnetX,
          y: magnetY,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    const handleClick = e => {
      if (!clickEffect) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height)
      );

      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `;

      element.appendChild(ripple);

      gsap.fromTo(
        ripple,
        {
          scale: 0,
          opacity: 1
        },
        {
          scale: 1,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          onComplete: () => ripple.remove()
        }
      );
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('click', handleClick);

    return () => {
      isHoveredRef.current = false;
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('click', handleClick);
      clearAllParticles();
    };
  }, [animateParticles, clearAllParticles, disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor]);

  return (
    <div
      ref={cardRef}
      className={`${className} particle-container`}
      style={{ ...style, position: 'relative', overflow: 'hidden' }}
    >
      {children}
    </div>
  );
};

const GlobalSpotlight = ({
  gridRef,
  disableAnimations = false,
  enabled = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR
}) => {
  const spotlightRef = useRef(null);
  const isInsideSection = useRef(false);

  useEffect(() => {
    if (disableAnimations || !gridRef?.current || !enabled) return;

    const spotlight = document.createElement('div');
    spotlight.className = 'global-spotlight';
    spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.15) 0%,
        rgba(${glowColor}, 0.08) 15%,
        rgba(${glowColor}, 0.04) 25%,
        rgba(${glowColor}, 0.02) 40%,
        rgba(${glowColor}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMouseMove = e => {
      if (!spotlightRef.current || !gridRef.current) return;

      const section = gridRef.current.closest('.bento-section');
      const rect = section?.getBoundingClientRect();
      const mouseInside =
        rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

      isInsideSection.current = mouseInside || false;
      const cards = gridRef.current.querySelectorAll('.magic-bento-card');

      if (!mouseInside) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
        cards.forEach(card => {
          card.style.setProperty('--glow-intensity', '0');
        });
        return;
      }

      const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
      let minDistance = Infinity;

      cards.forEach(card => {
        const cardElement = card;
        const cardRect = cardElement.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const distance =
          Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
        const effectiveDistance = Math.max(0, distance);

        minDistance = Math.min(minDistance, effectiveDistance);

        let glowIntensity = 0;
        if (effectiveDistance <= proximity) {
          glowIntensity = 1;
        } else if (effectiveDistance <= fadeDistance) {
          glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
        }

        updateCardGlowProperties(cardElement, e.clientX, e.clientY, glowIntensity, spotlightRadius);
      });

      gsap.to(spotlightRef.current, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });

      const targetOpacity =
        minDistance <= proximity
          ? 0.8
          : minDistance <= fadeDistance
            ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
            : 0;

      gsap.to(spotlightRef.current, {
        opacity: targetOpacity,
        duration: targetOpacity > 0 ? 0.2 : 0.5,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      isInsideSection.current = false;
      gridRef.current?.querySelectorAll('.magic-bento-card').forEach(card => {
        card.style.setProperty('--glow-intensity', '0');
      });
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
    };
  }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

  return null;
};

const BentoCardGrid = ({ children, gridRef }) => (
  <div className="card-grid bento-section" ref={gridRef}>
    {children}
  </div>
);

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

const MagicBento = ({
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableTilt = false,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = true
}) => {
  const gridRef = useRef(null);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = disableAnimations || isMobile;
  const MotionParticleCard = motion(ParticleCard);
  const MotionDiv = motion.div;
  const [selectedProject, setSelectedProject] = useState(null);

  const renderCardContent = (card) => (
  <div className="magic-bento-card__inner">
    <div className="magic-bento-card__subject">{card.subject}</div>

    {card.showThumbnail && (
      <div className="magic-bento-card__image-container">
        <img src={card.image} alt={card.title} className="bento-project-img" />
      </div>
    )}

    <div className="magic-bento-card__footer">
      <div className="magic-bento-card__text">
        <h2 className="magic-bento-card__title">{card.title}</h2>
        <p className="magic-bento-card__description">{card.description}</p>
      </div>
      
      <div className="view-more-wrapper">
        <button className="view-more-btn" onClick={() => setSelectedProject(card)}>
          View More <span className="arrow-icon">→</span>
        </button>
      </div>
    </div>
  </div>
);

  return (
    <>
      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={shouldDisableAnimations}
          enabled={enableSpotlight}
          spotlightRadius={spotlightRadius}
          glowColor={glowColor}
        />
      )}

      <BentoCardGrid gridRef={gridRef}>
        {cardData.map((card, index) => {
          const isSmallCard = [0, 1, 4, 5].includes(index);
          const baseClassName = `magic-bento-card ${
                                textAutoHide ? 'magic-bento-card--text-autohide' : ''
                              } ${enableBorderGlow ? 'magic-bento-card--border-glow' : ''} ${
                                isSmallCard ? 'magic-bento-card--compact' : ''
                              }`;
          const cardProps = {
            key: index,
            variants: popUpVariants,
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, amount: 0.2 }, // Triggers when 20% of card is visible
            className: baseClassName,
            style: { backgroundColor: card.color, '--glow-color': glowColor }
            };

          if (enableStars) {
            return (
              <ParticleCard
                key={index}
                {...cardProps}
                {...otherParticleProps}
                disableAnimations={shouldDisableAnimations}
                particleCount={particleCount}
                glowColor={glowColor}
                enableTilt={enableTilt}
                clickEffect={clickEffect}
                enableMagnetism={enableMagnetism}
              >
              
                {renderCardContent(card)}
              </ParticleCard>
            );
          }

          return (
            <div
              key={index}
              {...cardProps}
              ref={el => {
                if (!el) return;

                const handleMouseMove = e => {
                  if (shouldDisableAnimations) return;

                  const rect = el.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;

                  if (enableTilt) {
                    const rotateX = ((y - centerY) / centerY) * -10;
                    const rotateY = ((x - centerX) / centerX) * 10;
                    gsap.to(el, {
                      rotateX,
                      rotateY,
                      duration: 0.1,
                      ease: 'power2.out',
                      transformPerspective: 1000
                    });
                  }

                  if (enableMagnetism) {
                    const magnetX = (x - centerX) * 0.05;
                    const magnetY = (y - centerY) * 0.05;
                    gsap.to(el, {
                      x: magnetX,
                      y: magnetY,
                      duration: 0.3,
                      ease: 'power2.out'
                    });
                  }
                };

                const handleMouseLeave = () => {
                  if (shouldDisableAnimations) return;

                  if (enableTilt) {
                    gsap.to(el, {
                      rotateX: 0,
                      rotateY: 0,
                      duration: 0.3,
                      ease: 'power2.out'
                    });
                  }

                  if (enableMagnetism) {
                    gsap.to(el, {
                      x: 0,
                      y: 0,
                      duration: 0.3,
                      ease: 'power2.out'
                    });
                  }
                };

                const handleClick = e => {
                  if (!clickEffect || shouldDisableAnimations) return;

                  const rect = el.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;

                  const maxDistance = Math.max(
                    Math.hypot(x, y),
                    Math.hypot(x - rect.width, y),
                    Math.hypot(x, y - rect.height),
                    Math.hypot(x - rect.width, y - rect.height)
                  );

                  const ripple = document.createElement('div');
                  ripple.style.cssText = `
                    position: absolute;
                    width: ${maxDistance * 2}px;
                    height: ${maxDistance * 2}px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                    left: ${x - maxDistance}px;
                    top: ${y - maxDistance}px;
                    pointer-events: none;
                    z-index: 1000;
                  `;

                  el.appendChild(ripple);

                  gsap.fromTo(
                    ripple,
                    {
                      scale: 0,
                      opacity: 1
                    },
                    {
                      scale: 1,
                      opacity: 0,
                      duration: 0.8,
                      ease: 'power2.out',
                      onComplete: () => ripple.remove()
                    }
                  );
                };

                el.addEventListener('mousemove', handleMouseMove);
                el.addEventListener('mouseleave', handleMouseLeave);
                el.addEventListener('click', handleClick);
              }}
            >

              
              {renderCardContent(card)}
            </div>
          );
        })}
      </BentoCardGrid>

      {/* Project Modal Window */}
{selectedProject && (
  <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
    <div className="project-modal-content" onClick={e => e.stopPropagation()}>
      <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
      
      <div className="modal-body-layout">
        {/* LEFT SIDE: The 3D Carousel Component */}
        <div className="modal-visual-section">
          <Carousel 
              items={selectedProject.carouselImages}
              // Logic: if the project title matches Card 6, set height/aspect differently
              baseWidth={selectedProject.title.includes("GuideAble") ? 320 : 500} 
              baseHeight={selectedProject.title.includes("GuideAble") ? 600 : 400}
              isTall={selectedProject.title.includes("GuideAble")} 
              autoplay={true} 
              loop={true} 
            />
        </div>

              {/* RIGHT SIDE: Text and Tech Stack */}
              <div className="modal-info-section">
                <h1 className="modal-subject-pink">{selectedProject.title}</h1>
                <p className="modal-description-text">{selectedProject.descriptionforcard}</p>
                
                <div className="tech-stack-container">
                  {selectedProject.stack?.map((logo, i) => (
                    <div className="tech-logo" key={i}>
                      <img src={logo} alt="stack" style={{ width: '70%', height: '70%', objectFit: 'contain' }} />
                    </div>
                  ))}
                </div>
              </div> 
            </div> 
          </div> 
        </div> 
      )}
    </>
  );
};

export default MagicBento;
