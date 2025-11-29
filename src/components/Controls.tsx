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
    <div className="space-y-3 md:space-y-6 mb-4 md:mb-6">
      {/* Quick Mode Buttons + GENERATE (Mobile Center Position) */}
      <div className="bg-gradient-to-b from-slate-800/60 to-slate-900/40 border border-slate-700 rounded-xl p-3 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 mb-3 md:mb-4">
          {/* 3 Quick Mode Buttons */}
          <button
            onClick={() => { onModeChange('24h'); onGenerate(); }}
            disabled={isLoading}
            className={`py-2 md:py-3 px-3 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 ${
              mode === '24h' 
                ? 'bg-emerald-600 hover:bg-emerald-500 text-white border-2 border-emerald-400'
                : 'bg-slate-700 hover:bg-slate-600 text-slate-200 border-2 border-transparent'
            }`}
          >
            📊 24H SCAN
          </button>
          <button
            onClick={() => { onModeChange('live'); onGenerate(); }}
            disabled={isLoading}
            className={`py-2 md:py-3 px-3 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 ${
              mode === 'live' 
                ? 'bg-red-600 hover:bg-red-500 text-white border-2 border-red-400'
                : 'bg-slate-700 hover:bg-slate-600 text-slate-200 border-2 border-transparent'
            }`}
          >
            🔴 LIVE SCAN
          </button>
          <button
            onClick={() => { onModeChange('betbuilder'); onGenerate(); }}
            disabled={isLoading}
            className={`py-2 md:py-3 px-3 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 ${
              mode === 'betbuilder' 
                ? 'bg-amber-600 hover:bg-amber-500 text-white border-2 border-amber-400'
                : 'bg-slate-700 hover:bg-slate-600 text-slate-200 border-2 border-transparent'
            }`}
          >
            🎯 BET BUILDER
          </button>
        </div>

        {/* GENERATE Button - Prominent */}
        <button
          onClick={onGenerate}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 disabled:from-slate-600 disabled:to-slate-600 text-white font-bold py-3 md:py-4 px-4 rounded-lg transition-all duration-200 flex items-center justify-center text-sm md:text-lg shadow-lg"
        >
          {isLoading ? (
            <>
              <Scan className="w-4 md:w-5 h-4 md:h-5 mr-2 animate-spin" />
              GENERATING...
            </>
          ) : (
            <>
              <Target className="w-5 md:w-6 h-5 md:h-6 mr-2" />
              GENERATE TICKETS NOW
            </>
          )}
        </button>
      </div>

      {/* Settings Panel */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-2 md:p-6">
        <h2 className="text-xs md:text-lg font-bold text-white flex items-center mb-3 md:mb-4">
          <Settings className="w-4 md:w-5 h-4 md:h-5 mr-1 md:mr-2 text-emerald-400 flex-shrink-0" />
          <span className="hidden md:inline">Strategy Settings</span>
          <span className="md:hidden">Settings</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {/* Risk Protocol */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Risk Level
            </label>
            <select
              value={riskLevel}
              onChange={(e) => onRiskChange(e.target.value as any)}
              className="w-full bg-slate-900 border border-slate-600 rounded-lg px-2 md:px-3 py-1 md:py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="safe">🏦 Iron Bank</option>
              <option value="balanced">⚖️ Bookie Basher</option>
              <option value="risky">🚀 High-Yield</option>
            </select>
          </div>

          {/* Sport Filter */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Sport
            </label>
            <select
              value={sportFilter}
              onChange={(e) => onSportFilterChange(e.target.value)}
              className="w-full bg-slate-900 border border-slate-600 rounded-lg px-2 md:px-3 py-1 md:py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="all">All Sports</option>
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

          <div className="col-span-2 md:col-span-1 flex items-end">
            <div className="text-xs text-slate-400 w-full">
              Status: <span className="text-emerald-400 font-bold">READY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controls;