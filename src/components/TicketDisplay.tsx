import React from 'react';
import { Ticket } from '../types';
import { TrendingUp } from 'lucide-react';

interface TicketDisplayProps {
  tickets: Ticket[];
}

const TicketDisplay: React.FC<TicketDisplayProps> = ({ tickets }) => {
  return (
    <div className="space-y-4">
      {tickets.map(ticket => (
        <div key={ticket.id} className="bg-slate-800/70 border border-slate-700 rounded-lg p-4 md:p-5">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-base md:text-lg font-bold text-white">{ticket.strategy}</h3>
              <p className="text-xs text-slate-400 mt-0.5">{new Date(ticket.timestamp).toLocaleTimeString()}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl md:text-3xl font-bold text-emerald-400">{ticket.totalOdds.toFixed(2)}</div>
              <div className="text-xs text-slate-400">Odds</div>
            </div>
          </div>

          <div className="mb-3 flex items-center gap-4 text-xs md:text-sm">
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300">{(ticket.confidence * 100).toFixed(0)}% Confidence</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-amber-300">Edge: {(ticket.mathematicalEdge * 100).toFixed(0)}%</span>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded p-2.5 mb-3 text-xs md:text-sm text-slate-300">
            <p>{ticket.reasoning}</p>
          </div>

          <div className="space-y-2">
            {ticket.matches.map(match => (
              <div key={match.id} className="bg-slate-900/30 rounded p-2 text-xs md:text-sm border border-slate-700/50">
                <div className="flex justify-between items-start mb-1">
                  <div className="font-semibold text-white">{match.teams}</div>
                  <div className="text-emerald-400 font-bold">{match.odds.toFixed(2)}</div>
                </div>
                <div className="text-slate-400 mb-1">{match.sport} • {match.league}</div>
                <div className="text-slate-300">{match.prediction}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketDisplay;
