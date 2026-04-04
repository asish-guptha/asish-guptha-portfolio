import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaTimes } from 'react-icons/fa';

const ResumeModal = ({ isOpen, onClose }) => {
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm"
          onClick={onClose} 
        >
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()} 
            className="bg-slate-800 text-slate-200 w-full max-w-4xl max-h-[90vh] overflow-y-auto no-scrollbar rounded-xl shadow-2xl relative flex flex-col border border-slate-700"
          >
            <div className="sticky top-0 right-0 z-10 flex justify-end p-4 pointer-events-none">
              <button
                onClick={onClose}
                className="p-2 bg-slate-700 hover:bg-red-500 hover:text-white text-slate-300 rounded-full transition-colors pointer-events-auto shadow-md"
              >
                <FaTimes size={18} />
              </button>
            </div>
            
            <div className="px-8 sm:px-16 pb-8 pt-2 font-sans text-[15px] leading-relaxed">
              
              <div className="text-center mb-6">
                <h1 className="text-3xl font-bold tracking-wide uppercase mb-2 text-white">Yechuri Asish Guptha</h1>
                <p className="text-slate-400 text-sm">
                  <a href="mailto:asishgupthayechuri4171@gmail.com" className="text-blue-400 hover:text-blue-300">asishgupthayechuri4171@gmail.com</a> | 06301456471 |<a href="https://www.linkedin.com/in/asish-guptha-7862a6231/" className="text-blue-400 hover:text-blue-300"> LinkedIn </a> |<a href="https://github.com/asish-guptha" className="text-blue-400 hover:text-blue-300"> GitHub </a> 
                </p>
              </div>
              
              <div className="mb-6">
                <h2 className="text-lg font-bold border-b-2 border-slate-600 text-white uppercase mb-2">Career Objective</h2>
                <p className="text-slate-300 text-justify">
                  Innovative Computer Science undergraduate and Full-Stack Developer experienced in building scalable, AI-integrated software systems. Adept at utilizing Python, React, Django, and PostgreSQL to develop robust applications, deployed seamlessly via Docker containerization. Passionate about solving complex engineering challenges, writing maintainable code, and contributing to dynamic teams to deliver data-driven digital products.
                </p>
              </div>
              
              <div className="mb-6">
                <h2 className="text-lg font-bold border-b-2 border-slate-600 text-white uppercase mb-2">Projects</h2>
                
                <div className="mb-4">
                  <div className="flex justify-between font-bold text-slate-100">
                    <span>TicketHub AI - Smart Support System | <a href="https://github.com/asish-guptha/tickethub-ai" className="text-blue-400 hover:text-blue-300">GitHub</a></span>
                  </div>
                  <div className="italic text-sm text-slate-400 mb-1">React, Django REST Framework, PostgreSQL, Docker, Google Gemini AI</div>
                  <ul className="list-disc pl-5 space-y-1 text-slate-300 text-sm">
                    <li>Developed a containerized full-stack IT support platform, seamlessly connecting a dynamic React frontend with a Django backend using Docker Compose.</li>
                    <li>Engineered a real-time auto-classification feature by integrating the Google Gemini 2.5 LLM via direct REST API calls, including graceful network fallback mechanisms.</li>
                    <li>Optimized dashboard analytics utilizing advanced Django ORM aggregations (Count, Min, Max) and enforced strict data integrity through PostgreSQL database-level constraints.</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between font-bold text-slate-100">
                    <span>Hotel Management System |<a href="https://github.com/asish-guptha/HotelManagementSystem" className="text-blue-400 hover:text-blue-300"> GitHub</a></span>
                  </div>
                  <div className="italic text-sm text-slate-400 mb-1">Vanilla JavaScript (ES6+), HTML5, CSS3, Bootstrap 5, JSON Server (REST API)</div>
                  <ul className="list-disc pl-5 space-y-1 text-slate-300 text-sm">
                    <li>Engineered a responsive, single-page application (SPA) style interface using HTML5, CSS3, and Bootstrap 5, featuring a dynamic user booking flow and smart date-search filtering.</li>
                    <li>Implemented complex client-side business logic using modern Vanilla JavaScript, leveraging the Fetch API for async network requests and localStorage for secure session management.</li>
                    <li>Developed a comprehensive Admin Portal with real-time occupancy tracking, integrating RESTful API calls to a Node.js JSON Server for seamless data manipulation across bookings and inventory.</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <div className="flex justify-between font-bold text-slate-100">
                    <span>Virtual Fitting Room with Pose Detection |<a href="https://github.com/asish-guptha/Virtual-Fitting-Room" className="text-blue-400 hover:text-blue-300"> GitHub</a></span>
                  </div>
                  <div className="italic text-sm text-slate-400 mb-1">Python, OpenCV, MediaPipe, VITON-HD</div>
                  <ul className="list-disc pl-5 space-y-1 text-slate-300 text-sm">
                    <li>Engineered a virtual try-on system utilizing computer vision and pose detection to accurately map garment overlays to human poses.</li>
                    <li>Optimized system performance to enhance realism and provide a seamless, interactive user experience.</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-lg font-bold border-b-2 border-slate-600 text-white uppercase mb-2">Experience</h2>
                
                <div className="mb-4">
                  <div className="flex justify-between font-bold text-slate-100">
                    <span>Android Developer Intern | India Edu Community by Google Developers</span>
                    <span className="text-slate-400 font-normal">Mar 2024 - Apr 2024</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-slate-300 text-sm mt-1">
                    <li>Designed and implemented responsive UI layouts for Android applications, ensuring consistent interfaces across multiple devices.</li>
                    <li>Managed activity lifecycles and optimized UI event handling to deliver a smooth and performant user experience.</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <div className="flex justify-between font-bold text-slate-100">
                    <span>Salesforce Administrator Intern | AICTE NEAT Cell & SmartBridge</span>
                    <span className="text-slate-400 font-normal">May 2024 - Jun 2024</span>
                  </div>
                  <p className="text-sm mt-1 mb-1 text-slate-300">Completed an 8-week intensive virtual program focused on CRM automation, data management, and business process visibility.</p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-300 text-sm">
                    <li>Built automated workflows, custom reports, and dynamic dashboards across Sales and Service Cloud modules.</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-lg font-bold border-b-2 border-slate-600 text-white uppercase mb-2">Education</h2>
                <div className="flex justify-between items-start text-sm">
                  <div>
                    <div className="font-bold text-slate-100">B.Tech - GITAM Deemed to be University</div>
                    <div className="text-slate-300">Computer Science and Engineering (CSBS) - Bengaluru, India</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-slate-100">2021 - 2025</div>
                    <div className="text-slate-400">CGPA: 6.3/10</div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-lg font-bold border-b-2 border-slate-600 text-white uppercase mb-2">Technical Skills</h2>
                <ul className="text-sm space-y-1 text-slate-300">
                  <li><span className="font-bold text-slate-100">Languages:</span> Python, JavaScript (ES6+), SQL, HTML5, CSS3</li>
                  <li><span className="font-bold text-slate-100">Frontend Frameworks:</span> React.js, Tailwind CSS, Bootstrap 5</li>
                  <li><span className="font-bold text-slate-100">Backend & Databases:</span> Django, Django REST Framework (DRF), PostgreSQL, SQLite, RESTful APIs</li>
                  <li><span className="font-bold text-slate-100">Infrastructure & Tools:</span> Docker, Git/GitHub, Postman, JSON Server</li>
                  <li><span className="font-bold text-slate-100">AI & Computer Vision:</span> Google Gemini API, OpenCV, YOLOv5, MediaPipe</li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h2 className="text-lg font-bold border-b-2 border-slate-600 text-white uppercase mb-2">Certifications</h2>
                <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1">
                  <li>AI/ML Intern - India Edu Community by Google Developers</li>
                  <li>MatLab OnRamp Certification</li>
                </ul>
              </div>

            </div>
            
            <div className="sticky bottom-0 w-full bg-slate-800 border-t border-slate-700 p-4 flex justify-end items-center rounded-b-xl">
              <a
                href="/resume.pdf"
                download="Asish_Resume.pdf"
                className="flex items-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white px-6 py-3 rounded-lg font-semibold shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300 transform hover:-translate-y-1"
              >
                <FaDownload />
                Download PDF
              </a>
            </div>
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;