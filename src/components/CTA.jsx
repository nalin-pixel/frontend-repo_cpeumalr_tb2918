import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-tr from-purple-500/10 via-sky-500/10 to-orange-400/10 p-10 text-center"
        >
          <h3 className="text-white text-3xl font-semibold mb-2">Ready to add an AI assistant?</h3>
          <p className="text-slate-300 mb-6">Spin up in minutes with our SDKs and drop-in components.</p>
          <div className="flex items-center justify-center gap-3">
            <a href="#" className="inline-flex h-11 px-6 rounded-xl bg-gradient-to-tr from-purple-500 via-sky-500 to-orange-400 text-white font-semibold shadow-lg shadow-purple-500/30">Get started</a>
            <a href="#" className="inline-flex h-11 px-6 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/10">Book a demo</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
