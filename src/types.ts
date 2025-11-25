export interface Match {
  home: string;
  away: string;
  prediction: string;
  odds: number;
  sport: string;
  league: string;
  time: string;
}

export interface Ticket {
  id: string;
  strategy: string;
  totalOdds: number;
  confidence: number;
  matches: Match[];
  timestamp: string;
}

export type Mode = '24h' | 'live' | 'betbuilder';
export type RiskLevel = 'safe' | 'balanced' | 'risky';
export type SportFilter = 'all' | 'football' | 'basketball' | 'tennis' | 'cricket' | 'rugby' | 'hockey' | 'volleyball' | 'handball';

export interface AppState {
  tickets: Ticket[];
  isLoading: boolean;
  error: string | null;
  mode: Mode;
  riskLevel: RiskLevel;
  sportFilter: SportFilter;
  darkMode: boolean;
  history: Ticket[];
}
