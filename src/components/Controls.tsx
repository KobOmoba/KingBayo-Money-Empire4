import React from 'react';
import { Zap } from 'lucide-react';

interface ControlsProps {
  mode: '24h' | 'live' | 'betbuilder';
  riskLevel: 'safe' | 'balanced' | 'risky';
  isLoading: boolean;
  onModeChange: (mode: '24h' | 'live' | 'betbuilder') => void;
  onRiskChange: (risk: 'safe' | 'balanced' | 'risky') => void;
  onGenerate: () => void;
}

const Controls: React.FC<ControlsProps> = ({
  mode,
  riskLevel,
  isLoading,
  onModeChange,
  onRiskChange,
  onGenerate
}) => {
  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-br from-slate-800/70 to-slate-900/50 border border-emerald-500/30 rounded-lg p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 mb-4">
          <button
            onClick={() => { onModeChange('24h'); onGenerate(); }}
            disabled={isLoading}
            className={`py-2.5 px-3 rounded-lg font-bold text-sm transition-all ${
              mode === '24h'
                ? 'bg-emerald-600 text-white border-2 border-emerald-400'
                : 'bg-slate-700 text-slate-200 border-2 border-transparent hover:bg-slate-600'
            } disabled:opacity-50`}
          >
            📊 24H SCAN
          </button>
          <button
            onClick={() => { onModeChange('live'); onGenerate(); }}
            disabled={isLoading}
            className={`py-2.5 px-3 rounded-lg font-bold text-sm transition-all ${
              mode === 'live'
                ? 'bg-red-600 text-white border-2 border-red-400'
                : 'bg-slate-700 text-slate-200 border-2 border-transparent hover:bg-slate-600'
            } disabled:opacity-50`}
          >
            🔴 LIVE SCAN
          </button>
          <button
            onClick={() => { onModeChange('betbuilder'); onGenerate(); }}
            disabled={isLoading}
            className={`py-2.5 px-3 rounded-lg font-bold text-sm transition-all ${
              mode === 'betbuilder'
                ? 'bg-amber-600 text-white border-2 border-amber-400'
                : 'bg-slate-700 text-slate-200 border-2 border-transparent hover:bg-slate-600'
            } disabled:opacity-50`}
          >
            🎯 BET BUILDER
          </button>
        </div>

        <button
          onClick={onGenerate}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 disabled:from-slate-600 disabled:to-slate-600 text-white font-bold py-3 md:py-4 px-4 rounded-lg transition-all flex items-center justify-center text-sm md:text-base gap-2 shadow-lg"
        >
          <Zap className="w-5 h-5" />
          {isLoading ? 'GENERATING...' : 'GENERATE TICKETS'}
        </button>
      </div>

      <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-3 md:p-4">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Risk Level</label>
            <select
              value={riskLevel}
              onChange={(e) => onRiskChange(e.target.value as any)}
              className="w-full bg-slate-900 border border-slate-600 rounded px-2 py-1 text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="safe">🏦 Iron Bank</option>
              <option value="balanced">⚖️ Bookie Basher</option>
              <option value="risky">🚀 High-Yield</option>
            </select>
          </div>
          <div className="flex items-end">
            <div className="text-xs text-emerald-400 font-bold">✅ READY</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controls;
