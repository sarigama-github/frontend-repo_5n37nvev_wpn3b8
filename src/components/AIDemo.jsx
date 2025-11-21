import { useEffect, useRef, useState } from 'react';
import { Send, Mic, PhoneCall } from 'lucide-react';
import { mockChat } from '../services/geminiService';

function MessageBubble({ m }) {
  const isUser = m.role === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} w-full`}>
      <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-relaxed shadow-lg backdrop-blur border
        ${isUser ? 'bg-cyan-500/20 text-cyan-50 border-cyan-400/30' : 'bg-slate-900/70 text-slate-100 border-white/10'}`}
      >
        {m.content}
      </div>
    </div>
  );
}

export default function AIDemo() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('Bonjour, que proposez-vous ?');
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = {
      id: crypto.randomUUID(),
      role: 'user',
      content: input,
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const ai = await mockChat.send(userMsg.content);
      setMessages((prev) => [...prev, ai]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-demo" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_10%,rgba(14,165,233,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Démo Interactive</h2>
          <p className="mt-3 text-slate-300">Chattez avec un agent IA simulé (aucune clé exposée). Posez un cas: leads non répondus, qualification, prise de RDV…</p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 space-y-4">
            <div className="relative h-[420px] overflow-y-auto rounded-2xl border border-white/10 bg-slate-900/60 p-4 backdrop-blur">
              <div className="flex flex-col gap-3">
                {messages.length === 0 && (
                  <div className="text-slate-300/80 text-sm">
                    Essayez: "Quel ROI moyen ?" / "Montre-moi les tarifs" / "Comment se passe l'intégration ?"
                  </div>
                )}
                {messages.map((m) => (
                  <MessageBubble key={m.id} m={m} />
                ))}
                {loading && (
                  <div className="text-xs text-slate-400">L'agent rédige…</div>
                )}
                <div ref={endRef} />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Écrire un message…"
                className="flex-1 rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
              />
              <button onClick={handleSend} className="inline-flex items-center justify-center rounded-xl bg-cyan-600 px-4 py-3 text-sm font-medium text-white shadow-cyan-500/20 shadow hover:bg-cyan-500">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur">
              <h3 className="text-white font-semibold">Agent Vocal</h3>
              <p className="mt-1 text-sm text-slate-300">Numéro de démonstration</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-white font-medium">+33 9 70 70 00 24</div>
                  <div className="text-xs text-slate-400">Simulation: message vocal analysé et SMS de suivi</div>
                </div>
              </div>
              <div className="mt-4 text-sm text-slate-300">
                L'agent répond avec une voix naturelle, comprend le contexte et propose un créneau. Ici, nous simulons pour protéger les clés API.
              </div>
              <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-slate-800/50 px-3 py-2 text-xs text-slate-300">
                <Mic className="h-4 w-4 text-cyan-300" />
                Appuyer pour parler (simulation)
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur">
              <h3 className="text-white font-semibold">Ce que fait l'IA</h3>
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-300 space-y-1">
                <li>Réactive des leads et répond 24/7</li>
                <li>Qualifie et collecte les infos clés</li>
                <li>Propose et confirme des créneaux</li>
                <li>Synchronise CRM et messageries</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
