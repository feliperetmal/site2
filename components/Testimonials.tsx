
import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../constants';
import { Quote, TrendingUp, ChevronDown } from 'lucide-react';
import { Button } from './Button';
import { Page } from '../types';

interface TestimonialsProps {
    setPage: (page: Page) => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ setPage }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const showMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, TESTIMONIALS_DATA.length));
  };

  return (
    <section className="py-32 container mx-auto px-6 min-h-screen">
      <div className="text-center mb-16 animate-fade-in-up">
        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">O que dizem os Líderes</span>
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">Empresários Reais. <br/>Resultados Comprovados.</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Veja como profissionais de diversos setores estão usando a Inteligência Artificial da NeoVendas para escalar seus resultados e treinar times.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
        {TESTIMONIALS_DATA.slice(0, visibleCount).map((item, index) => (
          <div 
            key={index} 
            className="bg-[#141419] border border-white/5 rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 relative group animate-fade-in-up flex flex-col"
            style={{ animationDelay: `${(index % 6) * 50}ms` }}
          >
            <div className="absolute top-8 right-8 text-white/5 group-hover:text-primary/10 transition-colors">
              <Quote size={40} />
            </div>

            <div className="flex items-center gap-4 mb-6 relative z-10">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-14 h-14 rounded-full object-cover border-2 border-white/10 group-hover:border-primary transition-colors"
              />
              <div>
                <h3 className="font-bold text-white text-lg leading-tight">{item.name}</h3>
                <p className="text-xs text-primary font-medium uppercase tracking-wide">{item.role}</p>
              </div>
            </div>

            <div className="relative z-10 mb-6 flex-grow">
                 <p className="text-gray-300 leading-relaxed text-[15px] italic">
                "{item.content}"
                </p>
            </div>

            <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 flex gap-3 items-start group-hover:bg-primary/10 transition-colors">
              <TrendingUp size={20} className="text-primary mt-1 shrink-0" />
              <div>
                <strong className="block text-primary text-xs uppercase tracking-wider mb-1">Impacto no Negócio:</strong>
                <p className="text-xs text-gray-400 leading-normal">{item.insight}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < TESTIMONIALS_DATA.length && (
        <div className="flex justify-center mt-12">
            <Button onClick={showMore} variant="outline" className="px-8 py-4 flex items-center gap-2 group">
                Carregar Mais Depoimentos <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
            </Button>
        </div>
      )}

      <div className="mt-24 bg-gradient-to-r from-primary/10 to-accent/5 border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
         <div className="relative z-10">
             <h3 className="text-2xl md:text-3xl font-bold mb-4">Pronto para ter esses resultados?</h3>
             <p className="text-gray-400 mb-8 max-w-xl mx-auto">Junte-se a milhares de profissionais que pararam de perder vendas por falta de preparo.</p>
             <button 
                onClick={() => setPage(Page.BUSINESS)} 
                className="inline-block bg-white text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
             >
                 Começar Agora
             </button>
         </div>
      </div>
    </section>
  );
};
