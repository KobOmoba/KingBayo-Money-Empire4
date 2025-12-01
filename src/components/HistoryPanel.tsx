import React from 'react';
import { Ticket } from '../types';
import { Download, Trash2 } from 'lucide-react';

interface HistoryPanelProps {
  history: Ticket[];
  onClearHistory: () => void;
  onExportCSV: () => void;
}

const HistoryPanel: React.FC<HistoryPanelProps> = ({ history, onClearHistory, onExportCSV }) => {
  return (
    <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-4 md:p-5">
      <h3 className="text-base md:text-lg font-bold text-white mb-3">Ticket History</h3>
      <div className="text-xs md:text-sm text-slate-300 mb-3">{history.length} tickets generated</div>
      
      <div className="space-y-2 mb-4 max-h-48 md:max-h-64 overflow-y-auto">
        {history.slice(0, 5).map(ticket => (
          <div key={ticket.id} className="bg-slate-900/50 rounded p-2 border border-slate-700/50">
            <div className="flex justify-between items-center">
              <div className="text-xs md:text-sm font-semibold text-white">{ticket.strategy}</div>
              <div className="text-emerald-400 font-bold text-xs md:text-sm">{ticket.totalOdds.toFixed(2)}</div>
            </div>
            <div className="text-xs text-slate-400 mt-1">{new Date(ticket.timestamp).toLocaleTimeString()}</div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <button onClick={onExportCSV} disabled={history.length === 0} className="flex-1 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-600 text-white font-bold py-2 px-3 rounded text-xs md:text-sm flex items-center justify-center gap-1 transition">
          <Download className="w-4 h-4" />
          Export CSV
        </button>
        <button onClick={onClearHistory} disabled={history.length === 0} className="flex-1 bg-red-600 hover:bg-red-500 disabled:bg-slate-600 text-white font-bold py-2 px-3 rounded text-xs md:text-sm flex items-center justify-center gap-1 transition">
          <Trash2 className="w-4 h-4" />
          Clear
        </button>
      </div>
    </div>
  );
};

export default HistoryPanel;
