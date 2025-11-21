import { Brain, Mic, Bot, Headphones, Timer, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  { icon: Brain, title: 'Reasoning engine', desc: 'Grounded multi-turn conversations with tool use and memory.' },
  { icon: Mic, title: 'Voice & chat', desc: 'Natural voices with low latency turn-taking and interruptions.' },
  { icon: Bot, title: 'Omni channel', desc: 'Embed in web, mobile, or connect to your support channels.' },
  { icon: Headphones, title: 'Co-pilot SDK', desc: 'Drop-in UI widgets with theming and analytics built-in.' },
  { icon: Timer, title: 'Fast & reliable', desc: 'Streaming responses with smart retries and circuit breaking.' },
  { icon: Shield, title: 'Enterprise ready', desc: 'SOC2, SSO, role-based access, and data retention controls.' },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-5xl font-semibold text-white mb-4">Built for product teams</h2>
          <p className="text-slate-300 text-lg">Everything you need to ship an AI assistant that feels on-brand.</p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-colors"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-purple-500 via-sky-500 to-orange-400 grid place-items-center shadow-lg shadow-purple-500/20 mb-4">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-1">{item.title}</h3>
              <p className="text-slate-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
