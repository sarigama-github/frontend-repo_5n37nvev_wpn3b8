import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_10%,rgba(14,165,233,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact</h2>
          <p className="mt-3 text-slate-300">Laissez vos coordonnées et un expert WEBAFORCE vous rappelle pour une démo personnalisée.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-300">Prénom</label>
                <input required className="mt-1 w-full rounded-xl border border-white/10 bg-slate-800/60 px-3 py-2 text-sm text-white" />
              </div>
              <div>
                <label className="text-sm text-slate-300">Nom</label>
                <input required className="mt-1 w-full rounded-xl border border-white/10 bg-slate-800/60 px-3 py-2 text-sm text-white" />
              </div>
            </div>
            <div>
              <label className="text-sm text-slate-300">Email pro</label>
              <input type="email" required className="mt-1 w-full rounded-xl border border-white/10 bg-slate-800/60 px-3 py-2 text-sm text-white" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Message</label>
              <textarea rows={4} className="mt-1 w-full rounded-xl border border-white/10 bg-slate-800/60 px-3 py-2 text-sm text-white" placeholder="Parlez-nous de votre volumétrie, outils actuels, objectifs…" />
            </div>
            <button type="submit" className="inline-flex items-center rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-100 transition">
              Envoyer ma demande
            </button>
            {sent && <div className="text-sm text-cyan-300">Merci ! Nous revenons vers vous rapidement.</div>}
          </form>

          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur">
            <h3 className="text-white font-semibold">Pourquoi WEBAFORCE ?</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-300 space-y-1">
              <li>Focus ROI: +rdv, +réactivation, +conversion</li>
              <li>Implémentation en quelques jours</li>
              <li>Équipe experte en agents IA et growth ops</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
