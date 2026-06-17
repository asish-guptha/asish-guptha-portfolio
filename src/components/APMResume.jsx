import React, { useEffect } from 'react';

const APMResume = () => {
  useEffect(() => {
    document.title = "APM Resume | Asish Guptha";
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
            Forward-thinking Product Operations Analyst and Associate Product Manager with a strong technical foundation in full-stack architecture. Adept at bridging the gap between engineering teams and business goals to deliver scalable, data-driven digital products. Experienced in CRM automation, building dynamic dashboards, and optimizing user workflows to enhance the overall product experience.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-textBright uppercase tracking-wider pb-2 border-b border-white/20 mb-4">Experience</h2>
          
          <div className="mb-5">
            <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-1">
              <h3 className="text-md font-bold text-white">Salesforce Administrator Intern</h3>
              <span className="text-xs text-accent font-medium">May 2024 - Jun 2024</span>
            </div>
            <p className="text-sm font-medium text-gray-400 mb-2">AICTE NEAT Cell & SmartBridge</p>
            <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-gray-300">
              <li>Streamlined business process visibility and data management through an intensive 8-week CRM automation program.</li>
              <li>Designed and implemented automated workflows, custom reports, and dynamic dashboards across Sales and Service Cloud modules to drive data-informed decision-making.</li>
            </ul>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-1">
              <h3 className="text-md font-bold text-white">Android Developer Intern</h3>
              <span className="text-xs text-accent font-medium">Mar 2024 - Apr 2024</span>
            </div>
            <p className="text-sm font-medium text-gray-400 mb-2">India Edu Community by Google Developers</p>
            <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-gray-300">
              <li>Managed UI design and activity lifecycles to deliver a seamless, responsive user experience across multiple device formats.</li>
              <li>Collaborated on interface consistency, ensuring the final product met design and usability standards.</li>
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
              <li>Designed and managed a comprehensive IT support platform, connecting a React frontend with a Django backend to streamline user support workflows.</li>
              <li>Integrated Google Gemini AI to engineer a real-time auto-classification feature, significantly reducing manual ticket triaging and improving response times.</li>
              <li>Built dashboard analytics leveraging advanced database aggregations to track platform performance, issue resolution rates, and user engagement metrics.</li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className="text-md font-bold text-white mb-2">
              Hotel Management System <span className="text-gray-600 font-normal mx-1">|</span> <a href="https://github.com/asish-guptha/hotel-management-system" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors">GitHub</a>
            </h3>
            <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-gray-300">
              <li>Designed a single-page application (SPA) featuring a dynamic user booking flow and smart date-search filtering to optimize the customer journey.</li>
              <li>Built a comprehensive Admin Portal with real-time occupancy tracking, enabling seamless inventory and booking management for business stakeholders.</li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h3 className="text-md font-bold text-white mb-2">
              Virtual Fitting Room <span className="text-gray-600 font-normal mx-1">|</span> <a href="https://github.com/asish-guptha/Virtual-Fitting-Room" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors">GitHub</a>
            </h3>
            <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-gray-300">
              <li>Engineered an interactive try-on system utilizing computer vision to enhance realism, directly improving product visualization and the end-user experience.</li>
            </ul>
          </div>
        </section>

        {/* Technical & Product Skills */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-textBright uppercase tracking-wider pb-2 border-b border-white/20 mb-4">Technical & Product Skills</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><strong className="text-white">Product & Workflow Tools:</strong> Salesforce (Sales/Service Cloud), CRM Automation, Dashboards, Postman, Git/GitHub.</li>
            <li><strong className="text-white">Data & Analytics:</strong> PostgreSQL, SQL, Data Management, Advanced ORM Aggregations.</li>
            <li><strong className="text-white">Languages & Frameworks:</strong> Python, JavaScript (ES6+), React.js, Django, HTML5, CSS3.</li>
          </ul>
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
            href="/apm-resume.pdf"
            download
            className="bg-accent hover:bg-blue-500 text-darkBg hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:-translate-y-1 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            Download APM Resume
          </a>
        </div>

      </div>
    </div>
  );
};

export default APMResume;