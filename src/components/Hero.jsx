import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[86vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(17,24,39,0)_0%,rgba(17,24,39,0.3)_40%,rgba(17,24,39,0.7)_70%,rgba(17,24,39,1)_100%)] pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-slate-100 text-sm">
            <span className="h-2 w-2 rounded-full bg-gradient-to-tr from-purple-500 via-sky-500 to-orange-400 animate-pulse" />
            Live AI voice assistant for your product
          </div>

          <h1 className="text-4xl sm:text-6xl font-semibold leading-tight tracking-tight text-white">
            Launch an AI assistant your users will love
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed">
            AuraAI plugs into your app to handle voice and chat, automate support, and wow your users with a futuristic, minimal experience.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a href="#pricing" className="inline-flex h-11 px-6 rounded-xl bg-gradient-to-tr from-purple-500 via-sky-500 to-orange-400 text-white font-semibold shadow-lg shadow-purple-500/30">Start free</a>
            <a href="#demo" className="inline-flex h-11 px-6 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/10">See demo</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
