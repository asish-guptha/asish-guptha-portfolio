import { motion } from 'framer-motion';
import { FaLightbulb, FaCode, FaBug, FaRocket } from 'react-icons/fa';

const Process = () => {
  return (
    <section id="process" className="min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-32 relative  py-24">
      <div className="w-full max-w-7xl flex flex-col gap-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.9 }}
          className="text-center sm:text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-textBright flex items-center justify-center sm:justify-start mb-4">
            My Engineering Process
          </h2>
          <p className="text-textMuted text-lg max-w-2xl">
            Writing code is only half the job. Here is how I approach building scalable, full-stack applications from scratch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: false, amount: 0.9 }} className="bg-darkBg border border-textMuted/20 p-8 rounded-xl hover:border-accent/50 transition-all duration-300 relative group">
            <div className="absolute top-0 right-0 p-4 text-6xl font-black text-textMuted/5 group-hover:text-accent/5 transition-colors">1</div>
            <FaLightbulb className="text-3xl text-accent mb-6" />
            <h3 className="text-xl font-bold text-textBright mb-3">Architecture</h3>
            <p className="text-textMuted text-sm leading-relaxed">Defining database schemas (PostgreSQL/SQLite), mapping out RESTful API endpoints, and wireframing the user interface before writing a single line of code.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: false, amount: 0.9 }} className="bg-darkBg border border-textMuted/20 p-8 rounded-xl hover:border-accent/50 transition-all duration-300 relative group">
            <div className="absolute top-0 right-0 p-4 text-6xl font-black text-textMuted/5 group-hover:text-accent/5 transition-colors">2</div>
            <FaCode className="text-3xl text-accent mb-6" />
            <h3 className="text-xl font-bold text-textBright mb-3">Development</h3>
            <p className="text-textMuted text-sm leading-relaxed">Building robust backend logic with Django & Python, seamlessly integrated with highly responsive, component-driven React & Tailwind frontends.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: false, amount: 0.9 }} className="bg-darkBg border border-textMuted/20 p-8 rounded-xl hover:border-accent/50 transition-all duration-300 relative group">
            <div className="absolute top-0 right-0 p-4 text-6xl font-black text-textMuted/5 group-hover:text-accent/5 transition-colors">3</div>
            <FaBug className="text-3xl text-accent mb-6" />
            <h3 className="text-xl font-bold text-textBright mb-3">Testing & QA</h3>
            <p className="text-textMuted text-sm leading-relaxed">Ensuring system reliability through rigorous API endpoint testing using Postman, handling edge cases, and optimizing UI components for cross-browser performance.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: false, amount: 0.9 }} className="bg-darkBg border border-textMuted/20 p-8 rounded-xl hover:border-accent/50 transition-all duration-300 relative group">
            <div className="absolute top-0 right-0 p-4 text-6xl font-black text-textMuted/5 group-hover:text-accent/5 transition-colors">4</div>
            <FaRocket className="text-3xl text-accent mb-6" />
            <h3 className="text-xl font-bold text-textBright mb-3">Deployment</h3>
            <p className="text-textMuted text-sm leading-relaxed">Utilizing Git for version control, containerizing environments with Docker, and deploying production-ready code to modern hosting platforms.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;