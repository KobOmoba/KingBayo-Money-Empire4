export interface Match {
  id: string;
  sport: string;
  league: string;
  teams: string; // The match-up, e.g., "Team A vs Team B"
  matchTime: string; // The time or status of the match
  prediction: string; // The specific outcome predicted
  odds: number;
  confidence: number; // 0 to 1
  reasoning: string;
  isLive: boolean;
}

export interface Ticket {
  id: string;
  strategy: string;
  totalOdds: number;
  confidence: number; // 0 to 1
  matches: Match[]; // Array of prediction legs
  timestamp: string; // ISO string of when generated
  reasoning: string; // Strategy rationale/summary
  mathematicalEdge: number; // The calculated edge (0 to 1)
}

// These modes and risk levels are taken directly from the App.tsx and GeminiService.ts files
export type AppMode = '24h' | 'live' | 'betbuilder';
export type RiskLevel = 'safe' | 'balanced' | 'risky';

export interface AppState {
  tickets: Ticket[]; // Currently displayed tickets (usually 3)
  isLoading: boolean;
  error: string | null;
  mode: AppMode;
  riskLevel: RiskLevel;
  darkMode: boolean;
  history: Ticket[]; // History log
}
