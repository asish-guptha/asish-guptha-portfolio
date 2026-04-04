import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/asish-guptha/repos?sort=updated&per_page=4')
      .then(res => {
        if (!res.ok) throw new Error("API Limit or Bad Username");
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) setRepos(data);
      })
      .catch(err => {
        console.error("GitHub fetch error:", err);
        setRepos([{ id: 1, name: "Portfolio", description: "My React Portfolio", html_url: "#", language: "React" }]);
      });
  }, []);

  const pinnedProjects = [
    {
      title: 'Restaurant Management System',
      description: 'A comprehensive system handling admin controls, waiter order flows, kitchen queues, and integrated inventory/billing management.',
      tech: ['Python', 'SQL', 'React'],
      githubLink: 'https://github.com/asish-guptha/kitchen-management'
    },
    {
      title: 'TicketHub AI',
      description: 'A robust full-stack ticket management system built to streamline issue tracking and resolution workflows.',
      tech: ['Django', 'Python', 'React', 'SQL'],
      githubLink: 'https://github.com/asish-guptha/tickethub-ai'
    },
    {
      title: 'Hotel Management System',
      description: 'A sleek, responsive hotel management interface built from scratch highlighting core UI/UX principles.',
      tech: ['JavaScript', 'HTML5', 'CSS3'],
      githubLink: 'https://github.com/asish-guptha/HotelManagementSystem'
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-32 relative  py-24 lg:py-32">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
          className="w-full lg:w-1/3 flex flex-col gap-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-accent font-mono text-xl">&gt;</span>
            <h3 className="text-2xl font-bold text-textBright">Recent_Commits</h3>
          </div>
          <div className="flex flex-col gap-4">
            {repos.length > 0 ? repos.map(repo => (
              <a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer" className="group p-4 bg-darkBg border border-textMuted/20 rounded-lg hover:border-accent/50 transition-all duration-300">
                <h4 className="text-textBright font-semibold group-hover:text-accent transition-colors">{repo.name}</h4>
                <p className="text-textMuted text-sm mt-2 line-clamp-2">{repo.description || 'No description provided.'}</p>
                <div className="flex items-center gap-2 mt-4 text-xs font-mono text-textMuted">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  {repo.language || 'Mixed'}
                </div>
              </a>
            )) : (
              <p className="text-textMuted text-sm font-mono animate-pulse">Fetching from GitHub...</p>
            )}
          </div>
          <a href="https://github.com/asish-guptha?tab=repositories" target="_blank" rel="noreferrer" className="text-sm font-mono text-textMuted hover:text-accent transition-colors mt-2 flex items-center gap-2">
            View all repositories <span className="text-accent">-&gt;</span>
          </a>
        </motion.div>

        <div className="w-full lg:w-2/3 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.4 }}
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-textBright mb-8 flex items-center">
              Featured Projects
            </h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pinnedProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                viewport={{once: false, amount: 0.4}}
                className="bg-darkBg border border-textMuted/20 rounded-xl p-6 flex flex-col justify-between group hover:-translate-y-2 hover:border-accent/50 hover:shadow-[0_10px_30px_-15px_rgba(59,130,246,0.3)] transition-all duration-300"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-3xl text-accent opacity-50 group-hover:opacity-100 transition-opacity">📁</span>
                    <div className="flex gap-3">
                      <a href={project.githubLink} className="text-textMuted hover:text-accent transition-colors">GH</a>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-textBright group-hover:text-accent transition-colors mb-3">{project.title}</h4>
                  <p className="text-textMuted text-sm leading-relaxed mb-6">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;