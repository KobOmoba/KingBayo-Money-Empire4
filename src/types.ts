export interface Match {
  id: string;
  sport: string;
  league: string;
  teams: string;
  matchTime: string;
  prediction: string;
  odds: number;
  confidence: number;
  reasoning: string;
  isLive: boolean;
}

export interface Ticket {
  id: string;
  strategy: string;
  totalOdds: number;
  confidence: number;
  matches: Match[];
  timestamp: string;
  reasoning: string;
  mathematicalEdge: number;
}

export interface AppState {
  tickets: Ticket[];
  isLoading: boolean;
  error: string | null;
  mode: '24h' | 'live' | 'betbuilder';
  riskLevel: 'safe' | 'balanced' | 'risky';
  darkMode: boolean;
  history: Ticket[];
}
