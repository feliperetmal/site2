
import React, { useState, useEffect } from 'react';
import { NOTIFICATION_USERS, NOTIFICATION_ACTIONS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export const SalesNotification: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: '', img: '', action: '', time: '' });

  useEffect(() => {
    // Initial delay
    const initialTimeout = setTimeout(() => {
      triggerNotification();
    }, 5000);

    // Loop interval
    const interval = setInterval(() => {
      triggerNotification();
    }, 20000); // Mais frequente para parecer movimentado

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const triggerNotification = () => {
    const randomUser = NOTIFICATION_USERS[Math.floor(Math.random() * NOTIFICATION_USERS.length)];
    const randomAction = NOTIFICATION_ACTIONS[Math.floor(Math.random() * NOTIFICATION_ACTIONS.length)];
    
    setData({
      name: randomUser.name,
      img: randomUser.img,
      action: randomAction,
      time: 'Agora mesmo'
    });
    
    setVisible(true);

    // Hide after 6 seconds
    setTimeout(() => {
      setVisible(false);
    }, 6000);
  };

  if (!visible) return null;

  return (
    <div className="fixed top-24 right-4 z-50 animate-fade-in-up">
      <div className="bg-[#141419]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl flex items-center gap-4 max-w-sm transition-all hover:scale-105 hover:border-primary/30 cursor-default">
        <div className="relative shrink-0">
          <img 
            src={data.img} 
            alt={data.name} 
            className="w-12 h-12 rounded-full object-cover border-2 border-white/10"
          />
          <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5 border border-[#141419]">
            <CheckCircle2 size={12} className="text-white fill-green-500" />
          </div>
        </div>
        
        <div>
          <p className="text-sm text-white leading-tight">
            <span className="font-bold text-white">{data.name}</span> <span className="text-gray-300">{data.action}</span>
          </p>
          <p className="text-[10px] text-primary font-bold mt-1 uppercase tracking-wide flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span> {data.time}
          </p>
        </div>
      </div>
    </div>
  );
};
