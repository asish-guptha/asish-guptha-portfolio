import { Link } from 'react-scroll';

const SideNav = () => {
  const sections = [
    { id: 'hero', name: 'Start' },
    { id: 'about', name: 'About' },
    { id: 'process', name: 'Process' },
    { id: 'projects', name: 'Work' },
    { id: 'contact', name: 'Contact' },
  ];

  return (
    <div className="fixed right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4">
      {sections.map((section) => (
        <Link
          key={section.id}
          to={section.id}
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active-dot" 
          className="group relative flex items-center justify-center w-6 h-6 cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-textMuted group-hover:bg-accent transition-all duration-300"></span>
          
          <span className="absolute right-8 text-xs font-mono text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-darkBg px-2 py-1 rounded border border-accent/20">
            {section.name}
          </span>
        </Link>
      ))}
      
      <div className="absolute top-0 bottom-0 right-[11px] w-[2px] bg-textMuted/20 -z-10 rounded-full"></div>
    </div>
  );
};

export default SideNav;