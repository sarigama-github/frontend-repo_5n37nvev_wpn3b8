export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_10%,rgba(14,165,233,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-slate-300 text-sm">© {new Date().getFullYear()} WEBAFORCE — Tous droits réservés.</div>
        <div className="text-slate-400 text-xs">Design dark mode, accents cyan, animations subtiles.</div>
      </div>
    </footer>
  );
}
