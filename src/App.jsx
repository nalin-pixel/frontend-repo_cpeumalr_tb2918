import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* gradient backdrop */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[60vh] w-[120vw] rounded-full opacity-30 blur-3xl bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-purple-500 via-sky-500 to-orange-400" />
      </div>

      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <CTA />

      <footer className="py-10 text-center text-slate-400 text-sm">
        © {new Date().getFullYear()} AuraAI, Inc. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
