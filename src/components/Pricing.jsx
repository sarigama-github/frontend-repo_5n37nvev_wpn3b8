export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '300€',
      period: '/mois',
      popular: false,
      features: [
        'Agent IA canal unique',
        'Missed Call Text Back',
        'Setup en 5 jours',
      ],
      cta: 'Démarrer',
    },
    {
      name: 'Growth',
      price: '500€',
      period: '/mois',
      popular: true,
      features: [
        'Agent IA omnicanal',
        'Booking autonome',
        'Tableau de bord ROI',
      ],
      cta: 'Choisir Growth',
    },
    {
      name: 'Dominance',
      price: '2500€',
      period: '/mois',
      popular: false,
      features: [
        'Scalabilité avancée',
        "Voix + intégrations sur-mesure",
        'Leadops dédié',
      ],
      cta: 'Parler à un expert',
    },
  ];

  return (
    <section id="pricing" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_10%,rgba(14,165,233,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Tarifs clairs. ROI rapide.</h2>
          <p className="mt-3 text-slate-300">Choisissez le niveau d'automatisation adapté à votre volumétrie et à vos objectifs.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`relative overflow-hidden rounded-2xl border bg-slate-900/60 backdrop-blur p-6 ${p.popular ? 'border-cyan-400/40 shadow-[0_0_50px_rgba(34,211,238,0.15)]' : 'border-white/10'}`}>
              {p.popular && (
                <span className="absolute right-3 top-3 rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-300 border border-cyan-400/30">Recommandé</span>
              )}
              <div className="text-white text-lg font-semibold">{p.name}</div>
              <div className="mt-2 flex items-end gap-1">
                <div className="text-4xl font-extrabold text-white">{p.price}</div>
                <div className="text-slate-400 mb-1">{p.period}</div>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-300">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-medium text-white border ${p.popular ? 'bg-cyan-600 border-cyan-500 hover:bg-cyan-500' : 'bg-slate-800/50 border-white/10 hover:bg-slate-800'}`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
