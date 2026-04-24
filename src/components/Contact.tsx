import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { WordsPullUp } from "./WordsPullUp";

export const Contact = () => {
  return (
    <section className="bg-black py-24 px-4 md:py-32 md:px-6">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#101010] p-8 md:p-16 lg:p-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left: Contact Info */}
          <div>
            <WordsPullUp
              text="Start your journey."
              className="text-4xl font-medium leading-tight text-primary sm:text-5xl md:text-6xl"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-6 max-w-md text-sm text-gray-400 sm:text-base"
            >
              Ready to master 3D animation or architectural design? Get in touch
              with our counselors to find the perfect course for your career goals.
            </motion.p>

            <div className="mt-12 space-y-8">
              {[
                {
                  icon: MapPin,
                  label: "Visit Us",
                  value: "Jalandhar Road, Main Prabhat Chowk, Hoshiarpur",
                },
                { icon: Phone, label: "Call Us", value: "+91 1882 123456" },
                { icon: Mail, label: "Email Us", value: "hello@briliko.com" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm text-[#E1E0CC] sm:text-base">
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
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#E1E0CC] outline-none transition-colors focus:border-primary/30"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#E1E0CC] outline-none transition-colors focus:border-primary/30"
                />
              </div>
              <select className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-400 outline-none transition-colors focus:border-primary/30 appearance-none">
                <option value="">Select a Course</option>
                <option value="3d-animation">3D Animation</option>
                <option value="autocad">AUTOCAD Mastery</option>
                <option value="multimedia">Multimedia & VFX</option>
              </select>
              <textarea
                rows={4}
                placeholder="How can we help you?"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#E1E0CC] outline-none transition-colors focus:border-primary/30 resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 rounded-full bg-primary py-4 px-8 font-medium text-black transition-colors hover:bg-primary/90"
            >
              <span>Send Message</span>
              <Send size={18} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
