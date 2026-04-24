import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Features } from "./components/Features";
import { Contact } from "./components/Contact";

function App() {
  return (
    <main className="bg-black text-[#E1E0CC]">
      <Navbar />
      <Hero />
      <div id="history">
        <About />
      </div>
      <div id="courses">
        <Features />
      </div>
      <div id="contact">
        <Contact />
      </div>
      
      {/* Footer / Contact Section */}
      <footer className="bg-black py-20 px-6 text-center">
        <h2 className="text-primary text-xl font-medium mb-2">Briliko Institute Multimedia</h2>
        <p className="text-gray-400 text-sm mb-8">Jalandhar Road, Main Prabhat Chowk, Hoshiarpur</p>
        <p className="text-gray-500 text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} Briliko Institute. 15 Years of Educational Excellence.
        </p>
      </footer>
    </main>
  );
}

export default App;
