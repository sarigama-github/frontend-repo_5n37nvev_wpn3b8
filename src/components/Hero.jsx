import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_50%_10%,rgba(14,165,233,0.15),transparent)]" />

      <div className="absolute -right-48 -top-24 h-[720px] w-[720px] rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute inset-0 opacity-[0.85]">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-16 sm:pt-40">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-slate-900/60 px-3 py-1 text-xs text-cyan-300 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            IA Opérationnelle pour votre acquisition
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Accélérez votre croissance avec des Agents IA qui vendent et bookent 24/7
          </h1>
          <p className="mt-5 text-slate-300 text-lg">
            WEBAFORCE déploie des agents conversationnels et des workflows omnicanaux pour réactiver vos leads, qualifier en continu et générer plus de rendez-vous — sans charge opérationnelle.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#ai-demo" className="inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-500 to-sky-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-100 transition">
              Lancer la démo IA
            </a>
            <a href="#services" className="inline-flex items-center rounded-lg border border-white/10 bg-slate-900/60 px-5 py-3 text-sm font-medium text-slate-100 hover:bg-slate-800/60">
              Découvrir nos services
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
    </section>
  );
}
