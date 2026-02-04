
import React, { useState, useEffect } from 'react';
import { QueueItem } from '../types';

const QueueVisualizer: React.FC = () => {
  const [items, setItems] = useState<QueueItem[]>([
    { id: 1, status: 'ready', name: 'Order #102' },
    { id: 2, status: 'preparing', name: 'Order #103' },
    { id: 3, status: 'waiting', name: 'Order #104' },
    { id: 4, status: 'waiting', name: 'Order #105' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev => {
        const next = [...prev];
        // Rotate statuses to simulate movement
        const first = next.shift();
        if (first) {
          first.status = 'waiting';
          next.push(first);
        }
        // Update others
        next[0].status = 'ready';
        next[1].status = 'preparing';
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-md w-full">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        Live NotinQ Board
      </h3>
      <div className="space-y-3">
        {items.map((item, idx) => (
          <div 
            key={item.id}
            className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-500 transform ${
              item.status === 'ready' ? 'bg-green-50 border-green-200 scale-105 shadow-md' :
              item.status === 'preparing' ? 'bg-blue-50 border-blue-200 opacity-80' :
              'bg-slate-50 border-slate-200 opacity-60'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                item.status === 'ready' ? 'bg-green-500 text-white' :
                item.status === 'preparing' ? 'bg-blue-500 text-white' :
                'bg-slate-300 text-white'
              }`}>
                <i className={`fas ${
                  item.status === 'ready' ? 'fa-check' :
                  item.status === 'preparing' ? 'fa-fire-burner' :
                  'fa-clock'
                }`}></i>
              </div>
              <div>
                <p className="font-semibold text-slate-800">{item.name}</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider">{item.status}</p>
              </div>
            </div>
            {item.status === 'ready' && (
              <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">READY FOR PICKUP</span>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-dashed border-slate-200">
        <div className="flex justify-between text-xs text-slate-400">
          <span>Digital Flow</span>
          <span>No Physical Queue</span>
        </div>
        <div className="h-1 bg-slate-100 mt-2 rounded-full overflow-hidden">
          <div className="h-full bg-orange-500 w-1/3 animate-flow"></div>
        </div>
      </div>
    </div>
  );
};

export default QueueVisualizer;
