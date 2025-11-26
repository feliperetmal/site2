
import React, { useEffect, useState } from 'react';
import { Page } from '../types';
import { Button } from './Button';
import { ArrowRight, PlayCircle, Star, Users, CheckCircle2, ShieldAlert } from 'lucide-react';
import { HERO_EXAMPLES } from '../constants';

interface HeroProps {
    setPage: (page: Page) => void;
}

export const Hero: React.FC<HeroProps> = ({ setPage }) => {
  const [example, setExample] = useState(HERO_EXAMPLES[0]);
  const [activeUsers, setActiveUsers] = useState(124);

  useEffect(() => {
    const random = Math.floor(Math.random() * HERO_EXAMPLES.length);
    setExample(HERO_EXAMPLES[random]);

    const interval = setInterval(() => {
        setActiveUsers(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative pt-32 lg:pt-40 pb-20 overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Text Content */}
        <div className="relative z-10 max-w-2xl">
          <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-xs font-bold tracking-widest uppercase text-gray-300">O "Simulador de Voo" de Vendas</span>
             </div>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.05] mb-6 tracking-tighter animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Pare de aprender <br/>
            <span className="text-red-500 line-through decoration-4 decoration-white/20 opacity-70">perdendo vendas.</span><br/>
            <span className="bg-gradient-to-r from-primary via-indigo-400 to-accent bg-clip-text text-transparent drop-shadow-lg">
              Treine sem risco.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-lg mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            A NeoVendas é o ambiente seguro para você errar 1.000 vezes com a IA para não errar com o cliente real. <strong className="text-white">Prospecção, Negociação e Fechamento</strong> na prática.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Button variant="glow" onClick={() => setPage(Page.TEST_AI)} className="h-14 px-8 text-lg flex items-center justify-center gap-3 bg-primary hover:bg-primaryDark border-0">
              Testar Simulador Agora <ArrowRight size={20} />
            </Button>
            <Button variant="outline" onClick={() => setPage(Page.ABOUT)} className="h-14 px-8 text-lg flex items-center justify-center gap-3">
              Conheça a História <PlayCircle size={20} />
            </Button>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500 font-medium animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-xs text-white overflow-hidden">
                          <img src={`https://randomuser.me/api/portraits/men/${i+20}.jpg`} alt="User" className="w-full h-full object-cover opacity-80" />
                      </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-surface flex items-center justify-center text-xs text-white font-bold">
                    +{activeUsers}
                  </div>
              </div>
              <div>
                  <div className="flex text-gold mb-1"><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/></div>
                  <p>Profissionais evoluindo hoje</p>
              </div>
          </div>
        </div>

        {/* Visual Element - 3D Card Effect */}
        <div className="relative z-10 hidden lg:block perspective-[2000px] animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          {/* Abstract background elements behind card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-accent/10 rounded-full blur-[100px] -z-10"></div>
          
          <div className="relative transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out preserve-3d">
            
            {/* Main Glass Card */}
            <div className="bg-[#121216]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                
                {/* Header of Chat */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="w-12 h-12 rounded-2xl bg-gray-800 p-0.5 border border-white/10 shadow-lg overflow-hidden">
                                <img src={example.image} alt={example.persona} className="w-full h-full object-cover rounded-xl hover:scale-110 transition-transform" />
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-[#121216] rounded-full animate-pulse"></div>
                        </div>
                        <div>
                            <div className="font-bold text-white text-lg">{example.persona}</div>
                             <div className="text-xs text-gray-400">{example.role}</div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                    </div>
                </div>

                {/* Chat Bubbles */}
                <div className="space-y-6 font-medium text-sm relative">
                    {/* AI Message */}
                    <div className="flex gap-4">
                         <div className="bg-[#1c1c21] p-5 rounded-2xl rounded-tl-none border border-white/5 text-gray-200 shadow-lg max-w-[90%] animate-slide-up" style={{ animationDelay: '600ms' }}>
                            {example.aiMsg}
                        </div>
                    </div>
                    
                    {/* User Message */}
                    <div className="flex gap-4 justify-end">
                        <div className="bg-primary p-5 rounded-2xl rounded-tr-none text-white shadow-xl shadow-primary/10 max-w-[90%] animate-slide-up" style={{ animationDelay: '800ms' }}>
                            {example.userMsg}
                        </div>
                    </div>

                    {/* Feedback Toast */}
                    <div className="mt-8 bg-[#0F1014] border border-green-500/20 rounded-xl p-4 flex items-start gap-4 shadow-xl transform translate-y-2 animate-slide-up" style={{ animationDelay: '1000ms' }}>
                        <div className="p-2 bg-green-500/10 rounded-lg text-green-400 shrink-0">
                            <CheckCircle2 size={18} />
                        </div>
                        <div>
                             <p className="text-xs font-bold text-green-400 uppercase tracking-wider mb-1">Feedback Técnico</p>
                             <p className="text-gray-400 text-xs leading-5">{example.feedback}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Elements for Depth */}
            <div className="absolute -right-12 top-20 bg-surface border border-white/10 p-4 rounded-xl shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500"><ShieldAlert size={14}/></div>
                    <div>
                        <div className="text-xs text-gray-400">Objeção Detectada</div>
                        <div className="text-sm font-bold text-white">{example.tag}</div>
                    </div>
                </div>
            </div>

             <div className="absolute -left-8 bottom-32 bg-surface border border-white/10 p-4 rounded-xl shadow-xl animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold"><Star size={14}/></div>
                    <div>
                        <div className="text-xs text-gray-400">Argumentação</div>
                        <div className="text-sm font-bold text-white">Excelente</div>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};
