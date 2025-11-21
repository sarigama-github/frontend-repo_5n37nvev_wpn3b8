import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#ai-demo', label: 'Démo IA' },
    { href: '#pricing', label: 'Tarifs' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-950/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="group inline-flex items-center gap-2">
            <div className="relative">
              <span className="absolute inset-0 rounded-lg bg-cyan-500/30 blur-md" />
              <Sparkles className="relative h-6 w-6 text-cyan-400" />
            </div>
            <span className="font-semibold text-white tracking-tight">WEBAFORCE</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                {n.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-500 to-sky-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-100 transition">
              Parler à un expert
            </a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center rounded-md border border-white/10 p-2 text-slate-200" onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-slate-200" onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
