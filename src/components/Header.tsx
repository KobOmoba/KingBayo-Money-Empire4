import React from 'react';
import { Crown, Zap, Brain } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="bg-slate-900/80 backdrop-blur-lg border-b border-emerald-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-2 md:px-4 py-2 md:py-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 md:space-x-3 min-w-0">
            <div className="relative flex-shrink-0">
              <Crown className="w-6 md:w-8 h-6 md:h-8 text-emerald-400" />
              <Zap className="w-3 md:w-4 h-3 md:h-4 text-amber-400 absolute -top-1 -right-1" />
            </div>
            <div className="min-w-0">
              <h1 className="text-xs md:text-xl font-bold text-white whitespace-nowrap truncate">
                KingBayo
              </h1>
              <p className="text-xs hidden md:flex text-slate-400 items-center">
                <Brain className="w-3 h-3 mr-1 flex-shrink-0" />
                Cold-Blooded Predator
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-1 md:gap-4 flex-shrink-0">
            <div className="hidden sm:flex items-center gap-2 bg-slate-800/50 px-2 py-1 rounded-full">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-xs md:text-sm text-white font-medium">LIVE</span>
            </div>
            
            <div className="hidden md:flex items-center gap-2">
              <span className="text-xs md:text-sm text-slate-300">Powered by AI</span>
              <div className="w-6 md:w-8 h-6 md:h-8 bg-gradient-to-r from-purple-500 to-emerald-400 rounded-full flex items-center justify-center flex-shrink-0">
                <Brain className="w-3 md:w-4 h-3 md:h-4 text-white" />
              </div>
            </div>
            
            <button
              onClick={toggleDarkMode}
              className="p-1.5 md:p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors flex-shrink-0"
            >
              {darkMode ? (
                <span className="text-amber-400 text-sm md:text-base">☀️</span>
              ) : (
                <span className="text-slate-300 text-sm md:text-base">🌙</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;