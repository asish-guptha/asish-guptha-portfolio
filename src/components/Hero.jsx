import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import SkillGlobe from './SkillGlobe';
import ResumeModal from './ResumeModal';

const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-32 relative">
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-6 right-6 sm:top-8 sm:right-12 z-50"
      >
        <button
          onClick={() => setIsResumeOpen(true)}
          className="px-6 py-2 border border-accent text-accent font-mono text-sm rounded hover:bg-accent hover:text-darkBg transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.2)] flex items-center gap-2 group cursor-pointer"
        >
          <span className="text-lg group-hover:-translate-y-1 transition-transform">📄</span> 
          View Resume
        </button>
      </motion.div>
      
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12 pt-32 pb-16 lg:py-0">
        
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 z-10 lg:min-w-[500px]">
          <p className="text-accent font-mono text-sm sm:text-base lg:text-lg tracking-wide">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-textBright">
            Hi, I'm Asish.
          </h1>
          <div className="text-xl sm:text-2xl lg:text-5xl font-bold flex flex-row items-center justify-center lg:justify-start gap-2 lg:gap-3 mt-2">
            <span className="text-textMuted whitespace-nowrap">I am a</span>
            <div className="text-accent whitespace-nowrap">
              <TypeAnimation
                sequence={['Full Stack Developer.', 2000, 'Frontend Developer.', 2000, 'Backend Developer.', 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </div>
          <p className="text-textMuted max-w-lg mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed">
            I specialize in building exceptional digital experiences, focusing on clean architecture, seamless user interfaces, and robust systems.
          </p>
          
          <Link 
            to="projects" 
            smooth={true} 
            duration={800} 
            className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 border-2 border-accent text-accent font-mono text-sm sm:text-base font-semibold rounded hover:bg-accent hover:text-darkBg transition-all duration-300 cursor-pointer"
          >
            View My Work
          </Link>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0 h-[350px] sm:h-[450px] lg:h-[500px]">
          <SkillGlobe />
        </div>
      </div>
      
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      
    </section>
  );
};

export default Hero;