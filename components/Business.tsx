
import React, { useState, useEffect } from 'react';
import { Check, Clock, Building, Trophy, Zap, Star } from 'lucide-react';
import { PaymentModal } from './PaymentModal';

export const Business: React.FC = () => {
  // Timer Logic
  const [timeLeft, setTimeLeft] = useState(15 * 60); 
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ name: '', price: '' });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 15 * 60)); 
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const openPayment = (name: string, price: string) => {
      setSelectedPlan({ name, price });
      setIsModalOpen(true);
  };

  return (
    <section className="py-24 pt-32 min-h-screen">
        <PaymentModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            planName={selectedPlan.name} 
            price={selectedPlan.price} 
        />

        <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in-up">
                <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Investimento Inteligente</span>
                <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">Escolha Seu Nível de Evolução</h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Quanto custa perder uma venda de R$ 3.000? Mais do que qualquer plano abaixo. <br/>
                    <span className="text-white font-bold">Treinar é barato. Perder cliente é caro.</span>
                </p>
            </div>

            {/* PRICING CARDS */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto align-stretch mb-24">
                
                {/* Weekly */}
                <div className="bg-[#141419] border border-white/10 rounded-[2rem] p-8 flex flex-col hover:border-gray-500 transition-all duration-300 group">
                    <div className="mb-6">
                        <span className="inline-block px-4 py-1.5 bg-white/5 rounded-full text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 border border-white/5">Explorador</span>
                        <div className="flex items-baseline gap-1">
                             <span className="text-xl text-gray-400 font-bold">R$</span>
                             <span className="text-5xl font-extrabold text-white tracking-tight">39,99</span>
                             <span className="text-gray-500 font-medium">/semana</span>
                        </div>
                        <p className="text-gray-500 text-sm mt-4 leading-relaxed">Ideal para quem tem uma entrevista ou negociação importante essa semana e precisa de um "intensivão".</p>
                    </div>
                    
                    <div className="w-full h-px bg-white/5 mb-6"></div>

                    <ul className="space-y-4 mb-8 flex-1">
                        {[
                            'Acesso a todos os cenários básicos', 
                            'Feedback instantâneo da IA', 
                            'Treino de objeções simples',
                            'Relatório de desempenho básico',
                            'Acesso via Mobile e Desktop',
                            'Suporte por email'
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                <Check size={18} className="text-gray-500 mt-0.5" /> {item}
                            </li>
                        ))}
                    </ul>
                    <button 
                        onClick={() => openPayment('Plano Explorador', 'R$ 39,99/sem')}
                        className="w-full py-4 rounded-xl border border-white/20 hover:bg-white text-white hover:text-black font-bold text-sm transition-all duration-300"
                    >
                        Começar Semanal
                    </button>
                </div>

                {/* Quarterly - PROMO */}
                <div className="relative bg-[#0f0f13] rounded-[2rem] p-1 transform md:-translate-y-6 flex flex-col z-10 shadow-2xl shadow-primary/20">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary via-indigo-600 to-primary rounded-[2rem] blur opacity-30"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-primary via-indigo-600 to-primary rounded-[2rem] p-[1px]">
                         <div className="h-full w-full bg-[#0f0f13] rounded-[2rem] overflow-hidden flex flex-col relative">
                            
                            {/* Header Promocional */}
                            <div className="bg-gradient-to-r from-primary to-indigo-600 p-3 text-center">
                                <div className="text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 mb-1">
                                    <Clock size={14} className="animate-pulse" /> Oferta Relâmpago
                                </div>
                                <div className="font-mono text-white/90 text-sm">Encerra em {formatTime(timeLeft)}</div>
                            </div>

                            {/* Reduced padding to fit button (p-6 instead of p-8) */}
                            <div className="p-6 flex flex-col h-full">
                                <div className="mb-4 text-center">
                                    <span className="inline-flex items-center gap-1 px-4 py-1 bg-primary/20 text-primary rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 border border-primary/20">
                                        <Star size={10} fill="currentColor" /> Mais Vendido
                                    </span>
                                    <div className="flex items-center justify-center gap-2 mb-1">
                                        <span className="text-gray-500 line-through text-sm">R$ 400,00</span>
                                        <span className="bg-red-500/10 text-red-400 text-[10px] font-bold px-2 py-0.5 rounded">-37% OFF</span>
                                    </div>
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="text-2xl text-gray-400 font-bold">R$</span>
                                        <span className="text-5xl font-extrabold text-white tracking-tight">249,99</span>
                                        <span className="text-gray-500 font-medium text-xs">/trimestre</span>
                                    </div>
                                    <p className="text-gray-400 text-xs mt-2">O pacote completo para transformar sua carreira. Equivalente a <strong>R$ 83/mês</strong>.</p>
                                </div>

                                <div className="w-full h-px bg-white/10 mb-4"></div>

                                <ul className="space-y-3 mb-6 flex-1">
                                    {[
                                        'TUDO do plano mensal',
                                        'Criação de Cenários ILIMITADOS',
                                        'Feedback Técnico PROFUNDO',
                                        'Prioridade máxima na IA',
                                        'Recursos Beta antecipados',
                                        'Mentoria "Socrática" IA do Yehuda',
                                        'Certificado de Conclusão',
                                        'Comunidade VIP'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-white font-medium">
                                            <div className="bg-primary rounded-full p-0.5 mt-0.5 shrink-0"><Check size={10} className="text-white" /></div> 
                                            <span className="leading-tight">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button 
                                    onClick={() => openPayment('Plano Trimestral VIP', 'R$ 249,99/tri')}
                                    className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-indigo-600 hover:to-indigo-500 text-white font-bold text-lg shadow-lg shadow-primary/30 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 animate-pulse-slow shrink-0"
                                >
                                    <Zap size={20} fill="currentColor" /> Garantir Oferta Agora
                                </button>
                                <p className="text-center text-[10px] text-gray-500 mt-2">Garantia de 7 dias ou seu dinheiro de volta.</p>
                            </div>
                         </div>
                    </div>
                </div>

                {/* Monthly */}
                <div className="bg-[#141419] border border-white/10 rounded-[2rem] p-8 flex flex-col hover:border-accent/50 transition-all duration-300 group">
                    <div className="mb-6">
                        <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-accent/20">Profissional</span>
                        <div className="flex items-baseline gap-1">
                             <span className="text-xl text-gray-400 font-bold">R$</span>
                             <span className="text-5xl font-extrabold text-white tracking-tight">99,00</span>
                             <span className="text-gray-500 font-medium">/mês</span>
                        </div>
                        <p className="text-gray-500 text-sm mt-4 leading-relaxed">Para quem leva vendas a sério e quer manter a "faca afiada" todo mês.</p>
                    </div>
                    
                    <div className="w-full h-px bg-white/5 mb-6"></div>

                    <ul className="space-y-4 mb-8 flex-1">
                        {[
                            'Acesso ilimitado a todos os cenários',
                            'Histórico completo de conversas',
                            'Desafios diários de vendas',
                            'Modo "Cold Call" liberado',
                            'Estatísticas de evolução semanal',
                            'Suporte prioritário',
                            'Criação de até 5 cenários personalizados'
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                                <Check size={18} className="text-accent mt-0.5" /> {item}
                            </li>
                        ))}
                    </ul>
                    <button 
                        onClick={() => openPayment('Plano Profissional', 'R$ 99,00/mês')}
                        className="w-full py-4 rounded-xl border border-white/20 hover:bg-accent hover:border-accent hover:text-white text-white font-bold text-sm transition-all duration-300"
                    >
                        Assinar Mensal
                    </button>
                </div>
            </div>

            {/* B2B Section */}
            <div className="border-t border-white/10 pt-20">
                <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl border border-white/10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-xl">
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <Building className="text-gold" /> Para Empresas (B2B)
                        </h3>
                        <p className="text-gray-400 mb-6">
                            Tem uma equipe de vendas com mais de 5 pessoas?
                            Pare de gastar fortunas com treinamentos que a equipe esquece em uma semana.
                            Tenha um treinador 24h para cada vendedor.
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                            <li className="flex items-center gap-2 text-sm text-gray-300"><Trophy size={14} className="text-gold"/> Dashboards de Gestão</li>
                            <li className="flex items-center gap-2 text-sm text-gray-300"><Trophy size={14} className="text-gold"/> Comparativo de Performance</li>
                            <li className="flex items-center gap-2 text-sm text-gray-300"><Trophy size={14} className="text-gold"/> Onboarding de novos vendedores</li>
                            <li className="flex items-center gap-2 text-sm text-gray-300"><Trophy size={14} className="text-gold"/> White Label (Sua Marca)</li>
                        </ul>
                    </div>
                    <div>
                        <button className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors whitespace-nowrap">
                            Falar com Consultor B2B
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};
