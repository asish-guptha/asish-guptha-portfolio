import React, { useEffect } from 'react';

const TSQAResume = () => {
  useEffect(() => {
    document.title = "Technical Support & QA Resume | Asish Guptha";
    let meta = document.createElement('meta');
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
  }, []);

  return (
    <div className="min-h-screen bg-darkBg text-textMuted py-12 px-6 sm:px-12 font-sans selection:bg-accent/30">
      <div className="max-w-4xl mx-auto bg-[#111827] p-8 sm:p-12 rounded-2xl shadow-2xl border border-white/10">
        
        {/* Header Section - Now Strictly Centered */}
        <header className="pb-6 mb-8 text-center border-b border-white/10">
          <h1 className="text-3xl sm:text-4xl font-bold text-textBright mb-3 uppercase tracking-wide">Yechuri Asish Guptha</h1>
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-sm text-accent">
            <a href="mailto:asishgupthayechuri4171@gmail.com" className="hover:text-white transition-colors">asishgupthayechuri4171@gmail.com</a>
            <span className="text-gray-600">|</span>
            <span className="text-gray-400">06301456471</span>
            <span className="text-gray-600">|</span>
            <a href="https://www.linkedin.com/in/asishguptha" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <span className="text-gray-600">|</span>
            <a href="https://github.com/asish-guptha" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </header>

        {/* Career Objective */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-textBright uppercase tracking-wider pb-2 border-b border-white/20 mb-4">Career Objective</h2>
          <p className="leading-relaxed text-sm text-gray-300">
            Detail-oriented Technical Support and QA professional with a strong foundation in Python, JavaScript, and SQL. Adept at troubleshooting backend systems, testing REST APIs, and ensuring database integrity using PostgreSQL and Django. Passionate about diagnosing software issues, optimizing application performance, and ensuring reliable deployments via Docker.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-textBright uppercase tracking-wider pb-2 border-b border-white/20 mb-4">Technical Skills</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><strong className="text-white">Infrastructure & Testing Tools:</strong> Postman, Docker, Git/GitHub, JSON Server.</li>
            <li><strong className="text-white">Backend & Databases:</strong> PostgreSQL, SQLite, RESTful APIs, Django, Django REST Framework (DRF).</li>
            <li><strong className="text-white">Languages:</strong> Python, SQL, JavaScript (ES6+), HTML5, CSS3.</li>
            <li><strong className="text-white">Frontend Technologies:</strong> React.js, Tailwind CSS, Bootstrap 5.</li>
          </ul>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-textBright uppercase tracking-wider pb-2 border-b border-white/20 mb-4">Experience</h2>
          
          <div className="mb-5">
            <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-1">
              <h3 className="text-md font-bold text-white">Android Developer Intern</h3>
              <span className="text-xs text-accent font-medium">Mar 2024 - Apr 2024</span>
            </div>
            <p className="text-sm font-medium text-gray-400 mb-2">India Edu Community by Google Developers</p>
            <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-gray-300">
              <li>Tested and optimized UI event handling to ensure smooth performance and resolve interface rendering issues across multiple Android device profiles.</li>
            </ul>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-1">
              <h3 className="text-md font-bold text-white">Salesforce Administrator Intern</h3>
              <span className="text-xs text-accent font-medium">May 2024 - Jun 2024</span>
            </div>
            <p className="text-sm font-medium text-gray-400 mb-2">AICTE NEAT Cell & SmartBridge</p>
            <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-gray-300">
              <li>Configured and tested automated workflows, dynamic dashboards, and custom reports across Sales and Service Cloud modules to ensure highly accurate data management.</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-textBright uppercase tracking-wider pb-2 border-b border-white/20 mb-4">Projects</h2>
          
          <div className="mb-5">
            <h3 className="text-md font-bold text-white mb-2">
              TicketHub AI - Smart Support System <span className="text-gray-600 font-normal mx-1">|</span> <a href="https://github.com/asish-guptha/TicketHub-AI" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors">GitHub</a>
            </h3>
            <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-gray-300">
              <li>Built and managed a containerized IT platform using Docker Compose for reliable frontend-backend integration.</li>
              <li>Engineered robust network fallback mechanisms for third-party REST API integrations, ensuring system stability during API latency or network failures.</li>
              <li>Troubleshot and optimized database queries using Django ORM aggregations, enforcing strict PostgreSQL database-level constraints to maintain data integrity.</li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className="text-md font-bold text-white mb-2">
              Hotel Management System <span className="text-gray-600 font-normal mx-1">|</span> <a href="https://github.com/asish-guptha/hotel-management-system" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors">GitHub</a>
            </h3>
            <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-gray-300">
              <li>Developed and tested a responsive Single Page Application (SPA) utilizing Vanilla JavaScript (ES6+) and Bootstrap 5.</li>
              <li>Implemented rigorous client-side business logic and form validations, effectively managing async network requests via the Fetch API and debugging client-server communication.</li>
              <li>Configured a Node.js JSON Server to simulate REST API endpoints, extensively testing CRUD operations and data manipulation for a mock Admin Portal.</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h3 className="text-md font-bold text-white mb-2">
              Virtual Fitting Room <span className="text-gray-600 font-normal mx-1">|</span> <a href="https://github.com/asish-guptha/Virtual-Fitting-Room" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors">GitHub</a>
            </h3>
            <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-gray-300">
              <li>Optimized computer vision system performance to reduce application latency and ensure accurate, real-time mapping of interactive overlays.</li>
            </ul>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-textBright uppercase tracking-wider pb-2 border-b border-white/20 mb-4">Education & Certifications</h2>
          <div className="flex flex-col sm:flex-row justify-between text-sm mb-3">
            <div>
              <p className="font-bold text-white">B.Tech - GITAM Deemed to be University</p>
              <p className="text-gray-400">Computer Science and Engineering (CSBS) - Bengaluru, India</p>
            </div>
            <div className="text-left sm:text-right mt-1 sm:mt-0">
              <p className="text-accent font-medium">2021-2025</p>
              <p className="text-gray-300">CGPA: 6.3/10</p>
            </div>
          </div>
          <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-gray-300">
            <li>AI/ML Intern - India Edu Community by Google Developers</li>
            <li>MatLab OnRamp Certification</li>
          </ul>
        </section>

        {/* Download Action Area */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col items-center justify-center text-center">
          <a
            href="/qa-resume.pdf"
            download
            className="bg-accent hover:bg-blue-500 text-darkBg hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:-translate-y-1 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            Download TS&QA Resume
          </a>
        </div>

      </div>
    </div>
  );
};

export default TSQAResume;