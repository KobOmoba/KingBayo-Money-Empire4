import React from 'react';
import { Settings, Scan, Target } from 'lucide-react';

interface ControlsProps {
  mode: '24h' | 'live' | 'betbuilder';
  riskLevel: 'safe' | 'balanced' | 'risky';
  sportFilter: string;
  isLoading: boolean;
  onModeChange: (mode: '24h' | 'live' | 'betbuilder') => void;
  onRiskChange: (risk: 'safe' | 'balanced' | 'risky') => void;
  onSportFilterChange: (sport: string) => void;
  onGenerate: () => void;
}

const Controls: React.FC<ControlsProps> = ({
  mode,
  riskLevel,
  sportFilter,
  isLoading,
  onModeChange,
  onRiskChange,
  onSportFilterChange,
  onGenerate
}) => {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-2 md:p-6 mb-4 md:mb-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-2 md:mb-4 gap-2">
        <h2 className="text-sm md:text-lg font-bold text-white flex items-center">
          <Settings className="w-4 md:w-5 h-4 md:h-5 mr-1 md:mr-2 text-emerald-400 flex-shrink-0" />
          <span className="hidden md:inline">Ruthless Analysis Protocol</span>
          <span className="md:hidden">Analysis</span>
        </h2>
        <div className="hidden md:block text-sm text-slate-400">
          Status: <span className="text-emerald-400">READY</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        {/* Mode Selection */}
        <div>
          <label className="block text-xs md:text-sm font-medium text-slate-300 mb-1">
            Mode
          </label>
          <select
            value={mode}
            onChange={(e) => onModeChange(e.target.value as any)}
            className="w-full bg-slate-900 border border-slate-600 rounded-lg px-2 md:px-3 py-1 md:py-2 text-xs md:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="24h">24H Accumulator</option>
            <option value="live">Live Scanner</option>
            <option value="betbuilder">Bet Builder</option>
          </select>
        </div>

        {/* Risk Protocol */}
        <div>
          <label className="block text-xs md:text-sm font-medium text-slate-300 mb-1">
            Risk
          </label>
          <select
            value={riskLevel}
            onChange={(e) => onRiskChange(e.target.value as any)}
            className="w-full bg-slate-900 border border-slate-600 rounded-lg px-2 md:px-3 py-1 md:py-2 text-xs md:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="safe">The Iron Bank</option>
            <option value="balanced">The Bookie Basher</option>
            <option value="risky">The High-Yield Assassin</option>
          </select>
        </div>

        {/* Sport Filter */}
        <div>
          <label className="block text-xs md:text-sm font-medium text-slate-300 mb-1">
            Sport
          </label>
          <select
            value={sportFilter}
            onChange={(e) => onSportFilterChange(e.target.value)}
            className="w-full bg-slate-900 border border-slate-600 rounded-lg px-2 md:px-3 py-1 md:py-2 text-xs md:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="all">All Sports & Leagues</option>
            <option value="football">Football</option>
            <option value="basketball">Basketball</option>
            <option value="tennis">Tennis</option>
            <option value="cricket">Cricket</option>
            <option value="rugby">Rugby</option>
            <option value="hockey">Hockey</option>
            <option value="volleyball">Volleyball</option>
            <option value="handball">Handball</option>
          </select>
        </div>

        {/* Generate Button */}
        <div className="flex items-end col-span-2 md:col-span-1">
          <button
            onClick={onGenerate}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 disabled:from-slate-600 disabled:to-slate-600 text-white font-bold py-1 md:py-2 px-2 md:px-4 rounded-lg transition-all duration-200 flex items-center justify-center text-xs md:text-base"
          >
            {isLoading ? (
              <>
                <Scan className="w-3 md:w-4 h-3 md:h-4 mr-1 animate-spin" />
                <span className="hidden md:inline">SCAN</span>
                <span className="md:hidden">...</span>
              </>
            ) : (
              <>
                <Target className="w-3 md:w-4 h-3 md:h-4 mr-1" />
                SCAN
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mode Description */}
      <div className="mt-2 md:mt-4 p-2 md:p-3 bg-slate-900/50 rounded-lg hidden md:block">
        <p className="text-xs md:text-sm text-slate-300">
          {mode === '24h' && '24H: Pre-match analysis across global markets'}
          {mode === 'live' && 'Live: Real-time momentum detection'}
          {mode === 'betbuilder' && 'Bet Builder: Opportunity builder'}
        </p>
        <p className="text-xs text-slate-500 mt-1">
          {riskLevel.toUpperCase()} | Odds: 5-10.0 | Legs: 5-10
        </p>
      </div>
    </div>
  );
};

export default Controls;