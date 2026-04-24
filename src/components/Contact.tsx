import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { WordsPullUp } from "./WordsPullUp";

export const Contact = () => {
  return (
    <section id="contact" className="bg-slate-950 py-24 px-4 md:py-32 md:px-6">
      <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-slate-900/50 border border-white/5 p-8 md:p-16 lg:p-24 backdrop-blur-xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left: Contact Info */}
          <div>
            <WordsPullUp
              text="Secure your future."
              className="text-4xl font-bold leading-tight text-primary sm:text-5xl md:text-6xl glow-text"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-6 max-w-md text-sm text-slate-400 sm:text-base border-l border-primary/30 pl-4"
            >
              Ready to dive into AI or master Cybersecurity? Connect with our 
              experts today to start your technical journey in the heart of Mohali.
            </motion.p>

            <div className="mt-12 space-y-8">
              {[
                {
                  icon: MapPin,
                  label: "Visit Our Institute",
                  value: "Plot No - D 201, Ivory Tower, Sector 70, Mohali, Punjab",
                },
                { icon: Phone, label: "Direct Line", value: "08867847002" },
                { icon: Mail, label: "Official Support", value: "info@cometai.in" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm text-slate-200 sm:text-base">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-2xl border border-white/5 bg-white/5 px-6 py-4 text-sm text-slate-200 outline-none transition-all focus:border-primary/50 focus:bg-white/10"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-white/5 bg-white/5 px-6 py-4 text-sm text-slate-200 outline-none transition-all focus:border-primary/50 focus:bg-white/10"
                />
              </div>
              <select className="w-full rounded-2xl border border-white/5 bg-white/5 px-6 py-4 text-sm text-slate-400 outline-none transition-all focus:border-primary/50 focus:bg-white/10 appearance-none cursor-pointer">
                <option value="">Select a Program</option>
                <option value="ai">Artificial Intelligence</option>
                <option value="cissp">CISSP Cybersecurity</option>
                <option value="creative">Video Editing & IT</option>
                <option value="school">School Tutorials (IX-X)</option>
              </select>
              <textarea
                rows={4}
                placeholder="How can we help you?"
                className="w-full rounded-2xl border border-white/5 bg-white/5 px-6 py-4 text-sm text-slate-200 outline-none transition-all focus:border-primary/50 focus:bg-white/10 resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 rounded-full bg-primary py-5 px-8 font-bold text-slate-950 shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40"
            >
              <span>Transmit Request</span>
              <Send size={18} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

