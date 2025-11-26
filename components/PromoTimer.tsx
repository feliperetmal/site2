
import React, { useState, useEffect } from 'react';
import { Timer, X } from 'lucide-react';

export const PromoTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Random time between 5 min (300s) and 10 min (600s)
    const randomTime = Math.floor(Math.random() * (600 - 300 + 1) + 300);
    setTimeLeft(randomTime);

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) return 0;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 animate-slide-up">
      <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-0.5 shadow-2xl shadow-red-500/20">
        <div className="bg-[#0f0f13] rounded-[10px] p-4 flex items-center gap-4 pr-8 relative">
            
            <button 
                onClick={() => setIsVisible(false)} 
                className="absolute top-1 right-1 text-gray-500 hover:text-white p-1"
            >
                <X size={12} />
            </button>

            <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 animate-pulse">
                <Timer size={24} />
            </div>
            
            <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-0.5">Promoção Relâmpago</p>
                <p className="text-white font-bold text-sm">
                    Oferta encerra em <span className="text-red-500 font-mono text-base ml-1">{formatTime(timeLeft)}</span>
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};
