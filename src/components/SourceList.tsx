import React from 'react';
import { Globe } from 'lucide-react';

const SourceList: React.FC = () => {
  const sports = [
    { name: 'Football', leagues: ['EPL', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1'] },
    { name: 'Basketball', leagues: ['NBA', 'EuroLeague', 'CBA', 'ACB', 'NBL'] },
    { name: 'Tennis', leagues: ['ATP', 'WTA', 'Grand Slams', 'Masters 1000'] },
    { name: 'Cricket', leagues: ['IPL', 'BBL', 'PSL', 'T20', 'ODI'] },
  ];

  return (
    <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-4 md:p-5">
      <h3 className="text-base md:text-lg font-bold text-white mb-4 flex items-center gap-2">
        <Globe className="w-5 h-5 text-emerald-400" />
        Global Hunting Grounds
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {sports.map(sport => (
          <div key={sport.name} className="bg-slate-900/50 rounded p-3">
            <div className="font-bold text-white text-sm md:text-base mb-2">{sport.name}</div>
            <div className="text-xs text-slate-400 space-y-1">
              {sport.leagues.map(league => (
                <div key={league}>• {league}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SourceList;
