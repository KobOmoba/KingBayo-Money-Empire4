import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Controls from './components/Controls';
import TicketDisplay from './components/TicketDisplay';
import SourceList from './components/SourceList';
import HistoryPanel from './components/HistoryPanel';
import { GeminiService } from './services/GeminiService';
import { AppState, Ticket } from './types';

function App() {
  const [state, setState] = useState<AppState>({
    tickets: [],
    isLoading: false,
    error: null,
    mode: '24h',
    riskLevel: 'balanced',
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

  const handleClearHistory = () => {
    setState(prev => ({ ...prev, history: [] }));
  };

  const handleExportCSV = () => {
    if (state.history.length === 0) return;
    const headers = ['Strategy', 'Total Odds', 'Confidence', 'Matches', 'Reasoning', 'Timestamp'];
    const rows = state.history.map(ticket => [
      ticket.strategy,
      ticket.totalOdds.toFixed(2),
      (ticket.confidence * 100).toFixed(0) + '%',
      ticket.matches.length,
      ticket.reasoning,
      new Date(ticket.timestamp).toLocaleString()
    ]);
    const csv = [headers.join(','), ...rows.map(row => row.map(cell => `"${cell}"`).join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `kingbayo-history-${Date.now()}.csv`;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const handleToggleDarkMode = () => {
    setState(prev => ({ ...prev, darkMode: !prev.darkMode }));
  };

  return (
    <div className={`min-h-screen ${state.darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
      <Header darkMode={state.darkMode} toggleDarkMode={handleToggleDarkMode} />
      
      <main className="max-w-7xl mx-auto px-4 py-3 md:py-8">
        <Controls
          mode={state.mode}
          riskLevel={state.riskLevel}
          isLoading={state.isLoading}
          onModeChange={handleModeChange}
          onRiskChange={handleRiskChange}
          onGenerate={handleGenerate}
        />

        {state.error && (
          <div className="bg-red-900/20 border border-red-600 rounded-lg p-4 mb-6 text-red-200">
            {state.error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {state.tickets.length > 0 && <TicketDisplay tickets={state.tickets} />}
            {!state.isLoading && state.tickets.length === 0 && (
              <div className="text-center py-16 text-slate-400 text-sm md:text-base">
                Tap a scan button to generate your first accumulator slip
              </div>
            )}
          </div>

          <div className="space-y-6">
            <SourceList />
            <HistoryPanel 
              history={state.history} 
              onClearHistory={handleClearHistory}
              onExportCSV={handleExportCSV}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
