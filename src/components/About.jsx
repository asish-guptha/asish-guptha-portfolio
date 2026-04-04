import { motion } from 'framer-motion';
import { SiPython, SiJavascript, SiReact, SiTailwindcss, SiBootstrap, SiDjango, SiPostgresql, SiSqlite, SiDocker, SiGithub, SiPostman, SiOpencv } from 'react-icons/si';
import { FaDatabase, FaHtml5, FaCss3Alt } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-32 relative py-24">
      <div className="w-full max-w-7xl flex flex-col gap-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.4 }}
          className="w-full flex flex-col-reverse lg:flex-row items-center gap-12"
        >
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textBright flex items-center mb-6">
              About Me
            </h2>
            <p className="text-textMuted text-lg leading-relaxed mb-4">
              I am a passionate Full Stack Developer focused on building high-performance, scalable web applications. My expertise spans the entire development lifecycle, from designing robust backend architectures with Django and Python to crafting seamless, interactive user interfaces with React and Tailwind CSS.
            </p>
            <p className="text-textMuted text-lg leading-relaxed">
              I constantly explore the intersection of web development and AI, integrating tools like Gemini API and OpenCV to build intelligent, data-driven solutions.
            </p>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full border-2 border-accent/50 overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.2)] group">
              <div className="absolute inset-0 transition-colors duration-500 z-10"></div>
              <img src="/profile.png" alt="Asish" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.4 }}
          className="w-full"
        >
          <h3 className="text-2xl font-semibold text-textBright mb-8 font-mono border-b border-textMuted/20 pb-4 flex items-center gap-3">
            <span className="text-accent">&gt;</span> Technical_Arsenal
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-textMuted font-mono uppercase tracking-wider text-sm mb-2">Languages</h4>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-textBright"><SiPython color="#3776AB" className="text-xl" /> Python</div>
                <div className="flex items-center gap-3 text-textBright"><SiJavascript color="#F7DF1E" className="text-xl" /> JavaScript (ES6+)</div>
                <div className="flex items-center gap-3 text-textBright"><FaDatabase color="#336791" className="text-xl" /> SQL</div>
                <div className="flex items-center gap-3 text-textBright"><FaHtml5 color="#E34F26" className="text-xl" /> HTML5 & <FaCss3Alt color="#1572B6" className="text-xl" /> CSS3</div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-textMuted font-mono uppercase tracking-wider text-sm mb-2">Frontend</h4>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-textBright"><SiReact color="#61DAFB" className="text-xl" /> React.js</div>
                <div className="flex items-center gap-3 text-textBright"><SiTailwindcss color="#06B6D4" className="text-xl" /> Tailwind CSS</div>
                <div className="flex items-center gap-3 text-textBright"><SiBootstrap color="#7952B3" className="text-xl" /> Bootstrap 5</div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-textMuted font-mono uppercase tracking-wider text-sm mb-2">Backend & DB</h4>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-textBright"><SiDjango color="#092E20" className="text-xl" /> Django & DRF</div>
                <div className="flex items-center gap-3 text-textBright"><SiPostgresql color="#336791" className="text-xl" /> PostgreSQL</div>
                <div className="flex items-center gap-3 text-textBright"><SiSqlite color="#003B57" className="text-xl" /> SQLite</div>
                <div className="flex items-center gap-3 text-textBright"><span className="text-xl font-bold font-mono text-accent">{"{ }"}</span> RESTful APIs</div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-textMuted font-mono uppercase tracking-wider text-sm mb-2">Tools & AI</h4>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-textBright"><SiDocker color="#2496ED" className="text-xl" /> Docker</div>
                <div className="flex items-center gap-3 text-textBright"><SiGithub color="#ffffff" className="text-xl" /> Git & GitHub</div>
                <div className="flex items-center gap-3 text-textBright"><SiPostman color="#FF6C37" className="text-xl" /> Postman</div>
                <div className="flex items-center gap-3 text-textBright"><SiOpencv color="#5C3EE8" className="text-xl" /> OpenCV / AI APIs</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;