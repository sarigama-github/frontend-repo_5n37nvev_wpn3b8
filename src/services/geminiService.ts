// Frontend-only mock service: we DO NOT call real API nor expose keys.
// This simulates a Gemini-like assistant for demo purposes.

import type { ChatMessage } from '../types';

const SYSTEM_PROMPT = `Tu es un vendeur expert de l'agence WEBAFORCE. 
Tu expliques clairement la valeur business (ROI, conversion, réactivation de leads), 
les offres Starter (300€/mois), Growth (500€/mois recommandé) et Dominance (2500€/mois), 
et tu proposes une démo rapide. Reste concis et orienté résultat.`;

export class MockGeminiChat {
  history: ChatMessage[] = [];

  constructor() {
    this.history.push({
      id: crypto.randomUUID(),
      role: 'system',
      content: SYSTEM_PROMPT,
      timestamp: Date.now(),
    });
  }

  async send(message: string): Promise<ChatMessage> {
    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: message,
      timestamp: Date.now(),
    };
    this.history.push(userMsg);

    // Fake "AI" reply with small delay and simple heuristic for demo-only
    await new Promise((r) => setTimeout(r, 500));

    const lower = message.toLowerCase();
    let reply = '';
    if (lower.includes('prix') || lower.includes('tarif') || lower.includes('combien')) {
      reply = "Nos formules: Starter 300€/mois pour démarrer, Growth 500€/mois (recommandé) pour l'automatisation multicanal, et Dominance 2500€/mois pour la scalabilité et l'IA avancée. Quelle maturité visez-vous ?";
    } else if (lower.includes('demo') || lower.includes('démo')) {
      reply = "Je peux simuler une conversation avec notre Agent IA: posez-moi un cas concret (ex: leads non répondus, qualification automatique, prise de RDV autonome).";
    } else if (lower.includes('roi') || lower.includes('retour')) {
      reply = "Nos clients observent +20 à +45% de leads réactivés et 2x plus de rendez-vous bookés grâce au 'Missed Call Text Back' et à l'agent conversationnel. Souhaitez-vous un calcul rapide sur votre volume ?";
    } else if (lower.includes('integration') || lower.includes('intégration')) {
      reply = "Intégration en moins d'une semaine: CRM, messageries, et site. On démarre par un audit express puis un setup clé en main.";
    } else {
      reply = "Parfait. Dites-moi votre objectif prioritaire (ex: +RDV, +taux de réponse, omnicanal). Je vous propose un plan en 3 étapes et la formule la plus adaptée.";
    }

    const aiMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'assistant',
      content: reply,
      timestamp: Date.now(),
    };
    this.history.push(aiMsg);
    return aiMsg;
  }
}

export const mockChat = new MockGeminiChat();
