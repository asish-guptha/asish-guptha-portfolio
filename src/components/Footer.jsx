import { FaHeart } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="w-full border-t border-textMuted/10 bg-darkBg py-8 px-6 sm:px-12 lg:px-32 flex flex-col md:flex-row items-center justify-between gap-6 z-10 relative">
      <div className="text-textMuted text-sm font-mono flex items-center gap-2">
        <span>Made with</span>
        <FaHeart className="text-red-500 animate-pulse" />
        <span>by Asish</span>
      </div>
      <div className="text-textMuted/50 text-xs font-mono">
        &copy; {new Date().getFullYear()} Asish. All rights reserved.
      </div>
      <div className="flex gap-6">
        <a href="https://github.com/asish-guptha" className="text-textMuted hover:text-accent hover:-translate-y-1 transition-all duration-300">
          <SiGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/asish-guptha-7862a6231/" className="text-textMuted hover:text-accent hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
          <span className="font-bold text-lg leading-none">in</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;