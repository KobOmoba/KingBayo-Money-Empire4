import React, { useState, useCallback } from 'react';
import Header from '@/components/Header';
import Controls from '@/components/Controls';
import TicketDisplay from '@/components/TicketDisplay';
import SourceList from '@/components/SourceList';
import HistoryPanel from '@/components/HistoryPanel';
import { GeminiService } from '@/services/GeminiService';
import { AppState, Ticket } from '@/types';

function App() {
  const [state, setState] = useState<AppState>({
    tickets: [],
    isLoading: false,
    error: null,
    mode: '24h',
    riskLevel: 'balanced',
    sportFilter: 'all',
    darkMode: true,
    history: [],
  });

  const handleGenerate = useCallback(async () => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    try {
      const tickets = await GeminiService.generateTickets(state.mode, state.riskLevel);
      setState(prev => ({
        ...prev,
        tickets,
        isLoading: false,
        history: [...tickets, ...prev.history].slice(0, 50),
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Generation failed',
      }));
    }
  }, [state.mode, state.riskLevel]);

  const handleModeChange = (mode: '24h' | 'live' | 'betbuilder') => {
    setState(prev => ({ ...prev, mode }));
  };

  const handleRiskChange = (riskLevel: 'safe' | 'balanced' | 'risky') => {
    setState(prev => ({ ...prev, riskLevel }));
  };

  const handleSportFilterChange = (sportFilter: string) => {
    setState(prev => ({ ...prev, sportFilter: sportFilter as any }));
  };

  const handleClearHistory = () => {
    setState(prev => ({ ...prev, history: [] }));
  };

  return (
    <div className={`min-h-screen ${state.darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Controls
          mode={state.mode}
          riskLevel={state.riskLevel}
          sportFilter={state.sportFilter}
          isLoading={state.isLoading}
          onModeChange={handleModeChange}
          onRiskChange={handleRiskChange}
          onSportFilterChange={handleSportFilterChange}
          onGenerate={handleGenerate}
        />

        {state.error && (
          <div className="bg-red-900/20 border border-red-600 rounded-lg p-4 mb-6 text-red-200">
            {state.error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {state.tickets.length > 0 && (
              <TicketDisplay tickets={state.tickets} />
            )}
            {!state.isLoading && state.tickets.length === 0 && (
              <div className="text-center py-12 text-slate-400">
                Click "INITIATE SCAN" to generate your first accumulator slip
              </div>
            )}
          </div>

          <div className="space-y-6">
            <SourceList />
            <HistoryPanel 
              history={state.history} 
              onClear={handleClearHistory}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;