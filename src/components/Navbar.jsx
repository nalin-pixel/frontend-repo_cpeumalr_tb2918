import { Menu, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center gap-2 text-white"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-purple-500 via-sky-500 to-orange-400 grid place-items-center shadow-lg shadow-purple-500/30">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="font-semibold tracking-tight">AuraAI</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex h-9 px-4 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-colors">Sign in</button>
          <button className="inline-flex md:hidden h-9 w-9 rounded-lg bg-white/10 text-white items-center justify-center border border-white/10">
            <Menu className="h-5 w-5" />
          </button>
          <a href="#pricing" className="hidden md:inline-flex h-9 px-4 rounded-lg bg-gradient-to-tr from-purple-500 via-sky-500 to-orange-400 text-white font-semibold shadow-lg shadow-purple-500/30">Get started</a>
        </div>
      </div>
    </div>
  );
}
