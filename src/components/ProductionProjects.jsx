import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductionProjects = () => {
  return (
    <section
      id="production"
      className="flex items-center justify-center px-6 sm:px-12 lg:px-32 relative py-24 z-10"
    >
      <div className="w-full max-w-7xl flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.4 }}
          className="flex items-center gap-4"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-textBright flex items-center gap-3">
            <span className="text-accent animate-pulse">●</span> In Production
          </h3>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-accent/50 to-transparent ml-4"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
          className="relative rounded-2xl bg-darkBg border border-accent/30 p-1 shadow-[0_0_30px_rgba(59,130,246,0.1)] overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="relative bg-darkBg rounded-xl p-8 lg:p-12 flex flex-col lg:flex-row gap-12 items-center z-10">
            <div className="w-full lg:w-1/2 flex flex-col gap-6 text-left">
              <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/50 text-green-400 font-mono text-xs rounded-full w-max mb-2">
                Live & Active
              </div>
              <h4 className="text-3xl sm:text-4xl font-bold text-textBright">
                BharatPOS
              </h4>
              <p className="text-textMuted text-lg leading-relaxed">
                A robust, local-first Windows POS application engineered with a
                PyWebView shell, FastAPI backend, and AES-256 encrypted SQLite
                database. Features strict RBAC, multi-tab billing, and a custom
                Node.js headless bridge for zero-cost WhatsApp automation.
              </p>

              <div className="bg-[#0f172a] border border-textMuted/10 p-6 rounded-lg mt-2 relative">
                <span className="absolute -top-4 left-4 text-4xl text-accent/20">
                  "
                </span>
                <p className="text-textMuted text-sm italic relative z-10">
                  "This system completely transformed how we handle our daily
                  walk-ins. The repair tracking and instant billing saved us
                  hours of manual ledger work every single week. It just works."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xs">
                    BM
                  </div>
                  <div>
                    <p className="text-textBright text-xs font-bold">
                      Bharat Mobile Store
                    </p>
                    <p className="text-textMuted text-[10px] font-mono">
                      Client / Store Owner
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  to="/bharatpos"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-accent/10 border border-accent text-accent font-mono font-semibold rounded hover:bg-accent hover:text-darkBg transition-all duration-300 hover:-translate-y-1"
                >
                  View Full Case Study <span>→</span>
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative group-hover:scale-[1.02] transition-transform duration-700">
              <img
                src="/dashboard_dark_mode.png"
                alt="BharatPOS Dashboard"
                className="w-full rounded-lg shadow-2xl border border-textMuted/20"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductionProjects;
