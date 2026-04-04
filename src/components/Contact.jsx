import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { SiGithub } from 'react-icons/si';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm('service_5fot95k', 'template_rz1zy5f', form.current, 'sGGsyvOITghO1Y_UC')
      .then((result) => {
        setIsSent(true);
        setIsSending(false);
        form.current.reset();
        setTimeout(() => setIsSent(false), 5000);
      }, (error) => {
        console.error(error.text);
        setIsSending(false);
        alert("Something went wrong. Please try again or reach out on LinkedIn!");
      });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-32 relative  py-24">
      <div className="w-full max-w-5xl flex flex-col items-center text-center gap-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.9}}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-textBright flex items-center justify-center mb-6">
            Get In Touch
          </h2>
          <p className="text-textMuted text-lg max-w-2xl leading-relaxed">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="w-full flex flex-col-reverse lg:flex-row gap-12 mt-8 z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.9 }}
            className="w-full lg:w-1/3 flex flex-col gap-8 text-left"
          >
            <div>
              <h4 className="text-textBright font-bold text-xl mb-2">Email</h4>
              <a href="mailto:asishgupthayechuri4171@gmail.com" className="text-accent hover:underline font-mono">asishgupthayechuri4171@gmail.com</a>
            </div>
            <div>
              <h4 className="text-textBright font-bold text-xl mb-2">Location</h4>
              <p className="text-textMuted font-mono">India</p>
            </div>
            <div>
              <h4 className="text-textBright font-bold text-xl mb-4">Socials</h4>
              <div className="flex gap-4">
                <a href="https://github.com/asish-guptha" className="p-3 bg-darkBg border border-textMuted/30 rounded-full text-textBright hover:border-accent hover:text-accent transition-colors"><SiGithub size={20} /></a>
                <a href="https://www.linkedin.com/in/asish-guptha-7862a6231/" className="p-3 bg-darkBg border border-textMuted/30 rounded-full text-textBright hover:border-accent hover:text-accent transition-colors"><span className="font-bold">in</span></a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.9 }}
            className="w-full lg:w-2/3 bg-darkBg border border-textMuted/20 rounded-2xl p-8 shadow-2xl relative overflow-hidden group"
          >
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 text-left relative z-10">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-full sm:w-1/2 flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-mono text-textBright">Name</label>
                  <input type="text" id="name" name="from_name" required className="bg-transparent border border-textMuted/30 rounded-lg px-4 py-3 text-textBright focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300" placeholder="John Doe" />
                </div>
                <div className="w-full sm:w-1/2 flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-mono text-textBright">Email</label>
                  <input type="email" id="email" name="reply_to" required className="bg-transparent border border-textMuted/30 rounded-lg px-4 py-3 text-textBright focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300" placeholder="john@example.com" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-mono text-textBright">Message</label>
                <textarea id="message" name="message" rows="5" required className="bg-transparent border border-textMuted/30 rounded-lg px-4 py-3 text-textBright focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 resize-none" placeholder="Let's build something great together..."></textarea>
              </div>
              <button type="submit" disabled={isSending || isSent} className={`mt-4 w-full sm:w-auto self-end px-10 py-4 border font-mono font-semibold rounded-lg transition-all duration-300 transform ${isSent ? 'bg-green-500/10 border-green-500 text-green-500' : isSending ? 'bg-accent/10 border-accent/50 text-accent/50 cursor-not-allowed' : 'bg-accent/10 border-accent text-accent hover:bg-accent hover:text-darkBg hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-1'}`}>
                {isSending ? 'Sending...' : isSent ? 'Message Sent! ✓' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;