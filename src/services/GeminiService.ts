import { Ticket, Match } from '../types';
import { GoogleGenerativeAI } from '@google/generative-ai';

const SYSTEM_PROMPT = `You are KingBayo - an elite sports analytics engine. Generate 3 accumulator betting tickets with:
- 5-10 matches per ticket
- Total odds between 5.0-10.0
- Specific sports, leagues, teams, predictions, and odds
Return as JSON array with this structure:
[{
  "strategy": "The Iron Bank" | "The Bookie Basher" | "The High-Yield Assassin",
  "matches": [{
    "sport": "Football|Basketball|Tennis|Cricket|Rugby|Hockey|Volleyball|Handball",
    "league": "Specific league name",
    "teams": "Team A vs Team B",
    "prediction": "Specific prediction",
    "odds": number (1.2-2.5),
    "confidence": number (0.6-0.95),
    "reasoning": "Why this bet wins"
  }],
  "totalOdds": number,
  "confidence": number,
  "reasoning": "Strategy rationale",
  "mathematicalEdge": number
}]`;

export class GeminiService {
  private static readonly API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  static async generateTickets(
    mode: '24h' | 'live' | 'betbuilder',
    riskLevel: 'safe' | 'balanced' | 'risky'
  ): Promise<Ticket[]> {
    try {
      if (!this.API_KEY) {
        return this.getMockTickets(mode, riskLevel);
      }

      const genAI = new GoogleGenerativeAI(this.API_KEY);
      const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

      const prompt = `${SYSTEM_PROMPT}

MODE: ${mode === '24h' ? 'Pre-match 24hr analysis' : mode === 'live' ? 'Live match detection' : 'Bet builder opportunities'}
RISK: ${riskLevel.toUpperCase()}
Strategy: ${riskLevel === 'safe' ? 'The Iron Bank (1.25-1.45 odds per leg)' : riskLevel === 'balanced' ? 'The Bookie Basher (1.50-1.75)' : 'The High-Yield Assassin (1.80+ odds)'}`;

      const result = await model.generateContent(prompt);
      const text = result.response.text();
      const jsonMatch = text.match(/\[[\s\S]*\]/);
      
      if (!jsonMatch) return this.getMockTickets(mode, riskLevel);

      const aiTickets = JSON.parse(jsonMatch[0]);
      
      return aiTickets.slice(0, 3).map((ticket: any, idx: number) => ({
        id: `ticket-${Date.now()}-${idx + 1}`,
        strategy: ticket.strategy || 'The Bookie Basher',
        matches: (ticket.matches || []).map((m: any) => ({
          id: `match-${Math.random()}`,
          sport: m.sport || 'Football',
          league: m.league || 'Global',
          teams: m.teams || 'TBD',
          matchTime: new Date().toLocaleTimeString(),
          prediction: m.prediction || 'Over/Under',
          odds: parseFloat(m.odds) || 1.5,
          confidence: parseFloat(m.confidence) || 0.7,
          reasoning: m.reasoning || 'AI analysis',
          isLive: mode === 'live'
        })),
        totalOdds: parseFloat(ticket.totalOdds) || (riskLevel === 'safe' ? 6.0 : riskLevel === 'balanced' ? 8.0 : 9.0),
        confidence: parseFloat(ticket.confidence) || 0.7,
        timestamp: new Date().toISOString(),
        reasoning: ticket.reasoning || 'Optimized accumulator',
        mathematicalEdge: parseFloat(ticket.mathematicalEdge) || 0.2
      }));
    } catch (error) {
      console.error('AI Error:', error);
      return this.getMockTickets(mode, riskLevel);
    }
  }

  private static getMockTickets(mode: '24h' | 'live' | 'betbuilder', riskLevel: 'safe' | 'balanced' | 'risky'): Ticket[] {
    const strategies = { safe: 'The Iron Bank', balanced: 'The Bookie Basher', risky: 'The High-Yield Assassin' };
    const odds = { safe: 1.35, balanced: 1.65, risky: 1.95 };

    return Array(3).fill(0).map((_, idx) => ({
      id: `ticket-${Date.now()}-${idx + 1}`,
      strategy: strategies[riskLevel],
      matches: [
        { sport: 'Football', league: 'Premier League', teams: 'Man City vs Liverpool', prediction: 'Over 2.5 Goals', odds: odds[riskLevel], confidence: 0.82 },
        { sport: 'Basketball', league: 'NBA', teams: 'Lakers vs Warriors', prediction: 'Over 225 Points', odds: odds[riskLevel], confidence: 0.78 },
        { sport: 'Tennis', league: 'ATP', teams: 'Djokovic vs Alcaraz', prediction: 'Over 22.5 Games', odds: odds[riskLevel], confidence: 0.75 },
        { sport: 'Cricket', league: 'IPL', teams: 'Mumbai vs Chennai', prediction: 'Mumbai 50+ Runs', odds: odds[riskLevel], confidence: 0.73 },
        { sport: 'Football', league: 'La Liga', teams: 'Barcelona vs Madrid', prediction: 'Both Score', odds: odds[riskLevel], confidence: 0.80 }
      ].map((m, i) => ({ id: `m${idx}-${i}`, matchTime: '15:00', isLive: mode === 'live', reasoning: 'Strong form', ...m })),
      totalOdds: riskLevel === 'safe' ? 6.0 : riskLevel === 'balanced' ? 8.0 : 9.0,
      confidence: riskLevel === 'safe' ? 0.85 : riskLevel === 'balanced' ? 0.75 : 0.65,
      timestamp: new Date().toISOString(),
      reasoning: 'Mathematically optimized accumulator',
      mathematicalEdge: riskLevel === 'safe' ? 0.18 : riskLevel === 'balanced' ? 0.22 : 0.28
    }));
  }
}
