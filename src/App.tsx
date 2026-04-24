import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Features } from "./components/Features";
import { Contact } from "./components/Contact";

function App() {
  return (
    <main className="bg-slate-950 text-slate-200">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Contact />
      
      {/* Footer / Contact Section */}
      <footer className="bg-slate-950 py-20 px-6 text-center border-t border-white/5">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center font-bold text-black text-[10px]">C</div>
          <h2 className="text-white text-lg font-bold tracking-tight">COMET AI INSTITUTE</h2>
        </div>
        <p className="text-slate-500 text-sm mb-8 max-w-sm mx-auto">
          Plot No - D 201, Ivory Tower, Near By Sohana Gurdwara, Sector 70, Mohali-160055, Punjab
        </p>
        <p className="text-slate-600 text-[10px] uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Comet Ai. Justdial Verified Institute.
        </p>
      </footer>
    </main>
  );
}

export default App;

