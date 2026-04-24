import { motion } from "framer-motion";

export const Navbar = () => {
  const navItems = ["Home", "About", "Courses", "Contact"];

  return (
    <nav className="fixed top-0 left-1/2 z-50 -translate-x-1/2 w-full max-w-4xl px-4 pt-4">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-between rounded-full bg-slate-900/80 backdrop-blur-md px-6 py-3 border border-white/10"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-black text-sm">C</div>
          <span className="text-sm font-bold tracking-tight text-white hidden sm:block">COMET AI</span>
        </div>
        <div className="flex items-center gap-4 sm:gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[10px] sm:text-xs font-medium text-slate-300 hover:text-primary transition-colors uppercase tracking-wider"
            >
              {item}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

