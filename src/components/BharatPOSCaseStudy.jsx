import { useEffect } from "react";
import { motion } from "framer-motion";
import BackgroundParticles from "./BackgroundParticles";
import Footer from "./Footer";

const BharatPOSCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "System Architecture & Security",
      desc: "Engineered as a local-first Windows application using a PyWebView native shell. The backend is powered by high-speed FastAPI routing, connected to a deeply encrypted SQLite database using SQLCipher (AES-256) to ensure financial data privacy.",
      img: "/dashboard_dark_mode.png",
      points: [
        "Strict Dual-Tier RBAC (Admin vs Cashier)",
        "AES-256 Database Encryption",
        "Offline-Capable Execution",
      ],
    },
    {
      title: "Multi-Tab POS Billing",
      desc: "A high-speed counter interface designed for peak hours. Operates like browser tabs, allowing cashiers to park a customer's bill to serve the next one. Includes smart IMEI scanning and auto-fetching customer details.",
      img: "/pos_billing.png",
      points: [
        "Multi-Tab Engine",
        "Split Payments Calculator (Cash + UPI)",
        "Finance processing with Aadhaar logging",
      ],
    },
    {
      title: "Repair & Service Engine",
      desc: "A dedicated mechanic module that tracks devices through workflow stages. It strictly separates the wholesale spare part expense from the pure labor profit, generating clean customer-facing service bills.",
      img: "/repairs_billing.png",
      points: [
        "Intake & Status Workflow",
        "Wholesale Cost Splitting",
        "Internal Margin Protection",
      ],
    },
    {
      title: "Khata Book & Auditor Reports",
      desc: "Digitizes the neighborhood credit system (Udhaar) with precise transaction histories. Includes a CA-ready archive that instantly generates structured ZIP folders containing all bills for tax season.",
      img: "/katha_book.png",
      points: [
        "Net Balance Tracking",
        "One-Click CA ZIP Exports",
        "Automated Z-Report (End of Day)",
      ],
    },
    {
      title: "WhatsApp Automation & CRM",
      desc: "Bypasses official Meta API fees using a custom Node.js Headless Bridge. Automatically fires PDF tax invoices, Google Review links, and bulk marketing flyers directly to customers via a local QR sync.",
      img: "/customer_directory.png",
      points: [
        "Zero-Cost WhatsApp Integration",
        "Automated PDF Receipts",
        "Customer LTV & Warranty Tracking",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-darkBg text-textBright font-sans selection:bg-accent/30 relative overflow-hidden flex flex-col">
      <BackgroundParticles />

      <div className="relative z-10 p-6 sm:p-12 lg:p-24 flex-grow">
        <a
          href="/#production"
          className="inline-flex items-center gap-2 text-textMuted hover:text-accent font-mono mb-12 transition-colors relative z-20"
        >
          ← Back to Production Projects
        </a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-16"
        >
          <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/50 text-green-400 font-mono text-sm rounded-full mb-6">
            Production Case Study
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">BharatPOS ERP</h1>
          <p className="text-xl text-textMuted leading-relaxed mb-8">
            A comprehensive offline-first B2B retail management system
            engineered for local mobile shops. Replaces manual ledgers with
            high-speed billing, automated repair tracking, and encrypted local
            storage.
          </p>

          <div className="flex flex-wrap gap-4 font-mono text-sm">
            <span className="px-4 py-2 border border-accent/30 rounded text-accent bg-accent/5">
              FastAPI
            </span>
            <span className="px-4 py-2 border border-accent/30 rounded text-accent bg-accent/5">
              Vanilla JS / HTML
            </span>
            <span className="px-4 py-2 border border-accent/30 rounded text-accent bg-accent/5">
              SQLite3 (SQLCipher)
            </span>
            <span className="px-4 py-2 border border-accent/30 rounded text-accent bg-accent/5">
              PyWebView
            </span>
            <span className="px-4 py-2 border border-accent/30 rounded text-accent bg-accent/5">
              Node.js
            </span>
          </div>
        </motion.div>

        <div className="flex flex-col gap-24 mt-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="w-full lg:w-1/2">
                <div className="overflow-hidden rounded-xl border border-textMuted/20 shadow-2xl relative group bg-darkBg">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 relative z-10"
                  />
                  <div className="absolute inset-0 border border-accent/20 rounded-xl pointer-events-none z-20"></div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h3 className="text-3xl font-bold text-textBright">
                  {feature.title}
                </h3>
                <p className="text-textMuted text-lg leading-relaxed">
                  {feature.desc}
                </p>
                <ul className="flex flex-col gap-3 mt-2">
                  {feature.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-textBright font-mono text-sm"
                    >
                      <span className="text-accent">▹</span> {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center pb-12 border-t border-textMuted/10 pt-16">
          <h3 className="text-3xl font-bold mb-6">
            Want to see the full architecture in action?
          </h3>
          <a
            href="/#contact"
            className="inline-block px-10 py-4 bg-accent/10 border border-accent text-accent font-mono font-semibold rounded hover:bg-accent hover:text-darkBg transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-1 relative z-20"
          >
            Let's Connect →
          </a>
        </div>
      </div>

      <div className="relative z-20 w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default BharatPOSCaseStudy;
