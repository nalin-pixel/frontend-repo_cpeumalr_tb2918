import { motion } from 'framer-motion';

const tiers = [
  { name: 'Starter', price: '$0', desc: 'For trying things out', features: ['1 assistant', 'Up to 200 conversations/mo', 'Community support'] },
  { name: 'Growth', price: '$79', desc: 'For growing products', features: ['5 assistants', 'Up to 5k conversations/mo', 'Email support'] },
  { name: 'Scale', price: '$299', desc: 'For production teams', features: ['Unlimited assistants', 'Priority support', 'SLA + SSO'] },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-5xl font-semibold text-white mb-4">Simple pricing</h2>
          <p className="text-slate-300 text-lg">Start free. Upgrade when you’re ready.</p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`rounded-2xl border border-white/10 bg-white/[0.03] p-6 ${i===1 ? 'ring-1 ring-purple-400/40' : ''}`}
            >
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-white font-semibold text-lg">{t.name}</h3>
                  <p className="text-slate-400 text-sm">{t.desc}</p>
                </div>
                <div className="text-white text-3xl font-semibold">{t.price}<span className="text-base text-slate-400 font-normal">/mo</span></div>
              </div>
              <ul className="mt-6 space-y-2 text-slate-300 text-sm">
                {t.features.map(f => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-purple-500 via-sky-500 to-orange-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#" className="inline-flex w-full h-11 items-center justify-center rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/10">Choose {t.name}</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
