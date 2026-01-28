import './App.css'
import LiquidEther from './components/LiquidEther';
import ShinyText from './components/ShinyText';
import BlurText from './components/BlurText';
import StarBorder from './components/StarBorder';
import GlareHover from './components/GlareHover';
import ScrollReveal from './components/ScrollReveal';
import PixelBlast from './components/PixelBlast';
import LogoLoop from './components/LogoLoop';
import MagicBento from './components/MagicBento';
import CircularGallery from './components/CircularGallery';
import DarkVeil from './components/DarkVeil';
import Aurora from './components/Aurora';

import { Link } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
import { Medal } from 'lucide-react';
import { Heart } from 'lucide-react';
import { MonitorSmartphone } from 'lucide-react';
import { Binary } from 'lucide-react';
import {SquarePen} from 'lucide-react';
import {Mail} from 'lucide-react';



import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css'; 
import '@fontsource/montserrat/500.css'; 
import '@fontsource/montserrat/700.css'; 
import '@fontsource/montserrat/900.css'; 

import linkedin from './assets/logos/linkedin.png';
import Resume from './assets/TEVES_RESUME.pdf';
import Arduino from './assets/logos/arduino.png';
import CSharp from './assets/logos/csharp.png';
import CSS from './assets/logos/css.png';
import Figma from './assets/logos/figma.png';
import HTML from './assets/logos/html.png';
import JavaScript from './assets/logos/javascript.png';
import Python from './assets/logos/python.png';
import ReactJS from './assets/logos/reactjs.png';
import SQL from './assets/logos/SQL.png';
import Photoshop from './assets/logos/psd.png';
import Illustrator from './assets/logos/illustrator.png';
import MATLAB from './assets/logos/matlab.png';
import RaspberryPi from './assets/logos/raspi.png';
import SupaBase from './assets/logos/SupaBase.png';
import WPF from './assets/logos/wpf.png';
import Tinkercad from './assets/logos/tinkercad.png';
import EagleCAD from './assets/logos/eaglecad.png';
import Git from './assets/logos/git.png';

const imageLogos = [
  { src: Arduino, alt: "arduino"},
  { src: CSharp, alt: "C#"},
  { src: CSS, alt: "CSS"},
  { src: Figma, alt: "Figma"},
  { src: HTML, alt: "HTML"},
  { src: JavaScript, alt: "JavaScript"},
  { src: Python, alt: "Python"},
  { src: ReactJS, alt: "ReactJS"},
  { src: SQL, alt: "SQL"},
  { src: Photoshop, alt: "Photoshop"},
  { src: Illustrator, alt: "Illustrator"},
  { src: MATLAB, alt: "MATLAB"},
  { src: RaspberryPi, alt: "Raspberry Pi"},
  { src: SupaBase, alt: "SupaBase"},
  { src: WPF, alt: "WPF"},
  { src: Tinkercad, alt: "Tinkercad"},
  { src: EagleCAD, alt: "EagleCAD"},
  { src: Git, alt: "Github"},
];

function App() {
  return (
    <div className="app-container">
      <header className="GlobalHeader">
        <nav className='GlobalNav'> 
          <div className='navleft'>
            <h1><ShinyText text="FTPortfolio." /></h1>
          </div>
        <nav className="navlinks">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#affiliations">Affiliations</a></li>
        </nav>
        </nav>
      </header>

      <section className="sections">
        <div className="liquid-bg">
            <DarkVeil
            hueShift={0}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={1.5}
            scanlineFrequency={0}
            warpAmount={0} />
        </div>

        {/* Hero Section */}
        <section id="home" className="section hero">
          <div className="hero-content">
            <div className='hero-content-Hello'><a><BlurText text="Hello, I'm" animateBy="words" direction="top" /></a></div>
            <div className='hero-content-Name'><h1 className='gradient'><BlurText text="Fergievon Teves" animateBy="words" direction="top" /></h1></div>
            <div className='hero-content-Desc'><BlurText text="Welcome to my digital space! I'm a 3rd-year Computer Engineering student! This portfolio is a collection of my academic journey, late-night coding sessions, and everything I'm learning along the way—I hope you'll have a blast! :D" delay={100} animateBy="words" direction="top"/></div>
            
            <a className='hero-content-button' href={Resume} target="_blank" rel="noopener noreferrer"> 

              <StarBorder thickness={1.5} className='resume-button'>
                <div className='button-content'>
                  <Link size={16}/>
                  Resume
                </div>
              </StarBorder>
            </a>
          </div>
        </section>
        {/* About Section */}
        <section id="about" className="section about">
          <div className='about-content'> 
            <div className='about-content-about'><h1 className='gradient'><BlurText text="About Me" animateBy="words" direction="top"/></h1></div>
            <hr/>
            <div className='about-content-Desc'><BlurText text="I am Fergievon Alaika B. Teves, a third-year Bachelor of Science in Computer Engineering student at Ateneo de Davao University. I have a strong passion for computers, art, and creativity — especially anything pink. In my free time, I take on graphic design commissions to earn extra allowance and build my creative portfolio. I also enjoy volunteering, whether it's supporting animal shelters or participating in technology-related seminars and events, such as the recently concluded Mini UI/UX PH Davao." delay={50} animateBy="words" direction="top"/>
            </div>
            <div className='about-content-Desc'><BlurText text="On the technical side, my academic background includes courses such as Object-Oriented Programming, Data Structures and Algorithms, Software Design, Numerical Methods, Hardware Description Language, Logic Circuits and Design, and a Computer Engineering elective in Machine Learning. Currently, I am working on two personal projects that I aim to complete by April 2026. These projects reflect my growing interest in applying both software and hardware concepts through hands-on development, which also inspired me to create this portfolio." delay={50} animateBy="words" direction="top"/>
            </div>
            <div className='about-content-rectangles'>
                <GlareHover className='rectangle-item'>
                  <div className='icon-box'><GraduationCap/></div>
                  <h3>Education</h3>
                  <p>BS Computer Engineering</p>
                  <p>Ateneo de Davao University</p>
                </GlareHover>
                <GlareHover className='rectangle-item'>
                  <div className='icon-box'><Medal/></div>
                  <h3>Honors</h3>
                  <p>SY 2025-2026 Dean's List</p>
                  <p>SY 2024-2025 President's List</p>
                </GlareHover>
                <GlareHover className='rectangle-item'>
                  <div className='icon-box'><Heart/></div>
                  <h3>Interests</h3>
                  <p>Front-End Development | UI/UX</p>
                  <p>Graphic Design</p>
                </GlareHover>
              </div>
          </div>
        </section>

        {/* skills Section */}
        <section id="skills" className="section skills">
          <div className='skills-content'>
            <div className='skills-content-h1'><h1 className='gradient'><BlurText text="My Skills" animateBy="words" direction="top"/></h1></div>
            <div className='skills-content-Desc'><BlurText text="These are the programming, design, and interpersonal skills I have developed through a combination of formal education and self-directed learning, applying them in academic projects, hands-on activities, and continuous practice." delay={80} animateBy="words" direction="top"/></div>
            <div className='skills-content-rectangles'>
              <GlareHover className='skills-rectangle-item'>
                <div className='skills-rectangle-header'> 
                  <div className='skills-icon-box'><MonitorSmartphone/></div>
                  <h3 className='gradient'>Front-End Development</h3>
                </div>
                <hr/>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>WPF</li>
              </GlareHover>
              <GlareHover className='skills-rectangle-item'>
                <div className='skills-rectangle-header'> 
                  <div className='skills-icon-box'><Binary/></div>
                  <h3 className='gradient'>Back-End & Programming</h3>
                </div>
                <hr/>
                <li>C#</li>
                <li>Python</li>
                <li>SQL</li>
                <li>MATLAB</li>
              </GlareHover>
              <GlareHover className='skills-rectangle-item'>
                <div className='skills-rectangle-header'> 
                  <div className='skills-icon-box'><SquarePen/></div>
                  <h3 className='gradient'>UI/UX, Tools & Hardware</h3>
                    </div>
                    <hr/>
                    <li>Figma</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Illustrator</li>
                    <li>Arduino</li>
                    <li>Raspberry Pi</li>
                    <li>Git & GitHub</li>
                    <li>TinkerCAD</li>
                    <li>EagleCAD</li>
                    <li>Creating PCBs and Circuit Diagrams</li>
              </GlareHover>
            </div>
            <div className='skills-content-loop'>
              <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
                  <LogoLoop
                    logos={imageLogos}
                    speed={100}
                    direction="left"
                    logoHeight={60}
                    gap={60}
                    hoverSpeed={0}
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#0d0d0d"
                    ariaLabel="Technology partners"/>
                </div>
            </div>
            <div className='skills-content-h2'><h2 className='gradient'><BlurText text="Interpersonal Skills" animateBy="words" direction="top"/></h2></div>
            <div className='skills-content-IS'>
              <div className='IS-content'>
                <h1><BlurText text="Strong Team Leadership" animateBy="words" direction="top"/></h1>
                <h2 className='skills-content-h2'><BlurText text="I have taken on several leadership roles where I guided teams toward shared goals, encouraged collaboration, and ensured that everyone contributed effectively to the team's success." delay={20} animateBy="words" direction="top"/></h2>
              </div>
              <div className='IS-content'>
                <h1><BlurText text="Attention to Detail" delay={80} animateBy="words" direction="top"/></h1>
                <h2 className='skills-content-h2'><BlurText text="I pay close attention to details to ensure that tasks are well-organized, accurate, and completed with a high standard of quality." delay={20} animateBy="words" direction="top"/></h2>
              </div>
              <div className='IS-content'>
                <h1><BlurText text="Conflict Resolution" delay={80} animateBy="words" direction="top"/></h1>
                <h2 className='skills-content-h2'><BlurText text="I approach conflicts calmly and professionally, listening to different perspectives and helping the team reach fair and constructive solutions." delay={20} animateBy="words" direction="top" /></h2>
              </div>
            </div>
          </div>
        </section>

        {/* projects Section */}
        <section id="projects" className="section projects">
          <div className='pixel-bg'>
              <PixelBlast
                variant="circle"
                pixelSize={4}
                color="#ea1084"
                patternScale={2}
                patternDensity={1.5}
                pixelSizeJitter={0}
                enableRipples={false}
                rippleSpeed={1}
                rippleThickness={0.12}
                rippleIntensityScale={1.5}
                liquid
                liquidStrength={0.5}
                liquidRadius={1.2}
                liquidWobbleSpeed={5}
                speed={0.5}
                edgeFade={0.13}
                transparent/>
            </div>

          <div className="projects-content">
            <div className='projects-content-h1'><h1 className='gradient'><BlurText text="My Projects" animateBy="words" direction="top"/></h1></div>
            <div className='projects-content-Desc'><BlurText text="These are the projects I have developed during my time at Ateneo de Davao University, showcasing the skills and knowledge I have gained throughout my academic journey." delay={100} animateBy="words" direction="top"/></div>
          </div>
            <div className='magic-bento'> 
              <MagicBento
                textAutoHide={true}
                enableStars={false}
                enableSpotlight
                enableBorderGlow={true}
                enableTilt
                enableMagnetism={false}
                clickEffect
                spotlightRadius={400}
                particleCount={12}
                glowColor="234, 16, 132"
                disableAnimations={false}/>
              </div>
        </section>

        {/* affiliations Section */}
        <section id="affiliations" className="section affiliations">
          <div className="liquid-bg-1">
             <DarkVeil
            hueShift={0}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={1.5}
            scanlineFrequency={0}
            warpAmount={0} />
          </div>

          <div className="affiliations-content">
            <div className='affiliations-content-h1'><h1 className='gradient'><BlurText text="Affiliations and Roles" animateBy="words" direction="top"/></h1></div>
            <div className='affiliations-content-Desc'><BlurText text="These are the affiliations I am currently involved with, along with the roles I have taken on. Some roles are within organizations at Ateneo de Davao University, others are related to university-wide events, and some are with organizations I participate in outside the university." delay={150} animateBy="words" direction="top"/></div>
          </div>
          <div className='gallery'>
            <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
          </div>
        </section>
      </section>

        <footer className="cute-footer">
          <div className="footer-line"></div>
          <div className="footer-content">
            <div className="footer-left">
              <h2 className="footer-name gradient">Fergievon Alaika B. Teves</h2>
              <p className="footer-location">Urban Hives Condominium, Barangay 19-b, Davao City, Philippines</p>
            </div>

            <div className="footer-right">
             <div className="footer-links">
                <a href="mailto: fergievonteves24@gmail.com" title="Email">
                  <Mail className="footer-icon-svg" />
                </a>
                <a href="https://www.linkedin.com/in/fergievon-teves" target="_blank" rel="noreferrer" title="LinkedIn">
                  <img src={linkedin} alt="LinkedIn" className="footer-icon-img" />
                </a>
                <a href="https://github.com/Fergievon" target="_blank" rel="noreferrer" title="GitHub">
                  <img src={Git} alt="GitHub" className="footer-icon-img" />
                </a>
              </div>
              <p className="footer-phone">(+63) 991-655-3282</p>
            </div>
          </div>
          <p className="footer-copyright">© 2026 • Crafted with CSS and React</p>
        </footer>
    </div>
  );
}
export default App;

