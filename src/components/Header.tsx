import React from 'react';
import { Crown } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="bg-slate-900/95 border-b border-emerald-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-1.5 md:py-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Crown className="w-6 md:w-7 h-6 md:h-7 text-emerald-400" />
            <h1 className="text-lg md:text-2xl font-bold text-white">KingBayo</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-slate-800/60 px-2 py-0.5 rounded-full">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-white">LIVE</span>
            </div>
            <button onClick={toggleDarkMode} className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition">
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
