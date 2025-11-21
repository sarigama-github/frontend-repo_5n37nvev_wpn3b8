import { Bot, BarChart3, MessagesSquare, CalendarCheck2, Headset, RefreshCw } from 'lucide-react';

const items = [
  {
    icon: RefreshCw,
    title: 'Data Re-activation',
    desc: "Relance intelligente de vos bases dormantes: scoring, séquences, et conversations à grande échelle.",
  },
  {
    icon: Bot,
    title: 'Agent IA Conversationnel',
    desc: "Qualification, réponses objections et prise d'info — en temps réel sur vos canaux préférés.",
  },
  {
    icon: MessagesSquare,
    title: 'Missed Call Text Back',
    desc: "Chaque appel manqué déclenche un SMS/WhatsApp automatique pour convertir à chaud.",
  },
  {
    icon: CalendarCheck2,
    title: 'Booking autonome',
    desc: "Synchronisation calendrier, propositions d'horaires et confirmation sans friction.",
  },
  {
    icon: Headset,
    title: 'Agent Vocal',
    desc: "Voix naturelle et compréhension contextuelle pour des appels entrants/sortants.",
  },
  {
    icon: BarChart3,
    title: 'Omnicanal',
    desc: "Email, SMS, WhatsApp, Webchat: une expérience unifiée pilotée par l'IA.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_10%,rgba(14,165,233,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Des services conçus pour le ROI</h2>
          <p className="mt-3 text-slate-300">Nous activons vos leads, automatisons les conversations et fermons le plus d'opportunités possible, sans désorganiser vos équipes.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur transition hover:border-cyan-400/30">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <span className="absolute inset-0 rounded-lg bg-cyan-500/30 blur-md" />
                    <Icon className="relative h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-semibold">{title}</h3>
                </div>
                <span className="text-xs text-cyan-300/80">Premium</span>
              </div>
              <p className="mt-4 text-slate-300 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
