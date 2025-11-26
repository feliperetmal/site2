import React from 'react';
import { MessageSquare, Phone, TrendingUp, AlertTriangle, ShieldCheck, UserX, BarChart3, GraduationCap, Mic, Zap } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-24 relative bg-black/20">
        <div className="container mx-auto px-6">
            
            {/* 1. THE PROBLEM (A DOR) */}
            <div className="mb-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">Por que a maioria falha em vendas?</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Vender é difícil. Prospecção é difícil. E o mercado não perdoa amadores.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-red-500/5 border border-red-500/20 p-6 rounded-2xl">
                        <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 mb-4">
                            <AlertTriangle size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Insegurança & Medo</h3>
                        <p className="text-gray-400 text-sm">O medo de travar na frente do cliente ou não saber o que responder gera ansiedade e perda de performance.</p>
                    </div>
                    <div className="bg-red-500/5 border border-red-500/20 p-6 rounded-2xl">
                        <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 mb-4">
                            <UserX size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Perda de Clientes</h3>
                        <p className="text-gray-400 text-sm">Vendedores aprendem "na dor", queimando leads valiosos e perdendo comissões por falta de experiência prática.</p>
                    </div>
                    <div className="bg-red-500/5 border border-red-500/20 p-6 rounded-2xl">
                        <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 mb-4">
                            <BarChart3 size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Falta de Feedback</h3>
                        <p className="text-gray-400 text-sm">Ninguém te diz onde você errou. Você só recebe o "não" e continua cometendo os mesmos erros para sempre.</p>
                    </div>
                </div>
            </div>

            {/* 2. THE SOLUTION (O QUE TEM NO APP) */}
            <div className="relative">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">A Solução Completa</span>
                    <h2 className="text-4xl font-extrabold mb-4">O que tem dentro da NeoVendas?</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Um arsenal completo de ferramentas para transformar iniciantes em top performers.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="group p-8 rounded-[2rem] bg-[#141419] border border-white/5 hover:border-primary/50 transition-all duration-300">
                        <div className="mb-6 p-4 rounded-2xl bg-black/40 w-fit border border-white/10 group-hover:bg-primary/20 transition-colors">
                            <MessageSquare size={28} className="text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Simulações de Chat Realistas</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Converse com clientes virtuais (IA) que assumem personas específicas: o cliente apressado, o desconfiado, o focado em preço.
                        </p>
                        <ul className="text-xs text-gray-500 space-y-2 font-mono">
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full"></div> Treino de Quebra de Objeção</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full"></div> Leitura de perfil de cliente</li>
                        </ul>
                    </div>

                    {/* Feature 2 */}
                    <div className="group p-8 rounded-[2rem] bg-[#141419] border border-white/5 hover:border-accent/50 transition-all duration-300">
                        <div className="mb-6 p-4 rounded-2xl bg-black/40 w-fit border border-white/10 group-hover:bg-accent/20 transition-colors">
                            <Phone size={28} className="text-accent" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Ligações Simuladas</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            O app simula uma ligação real. Você fala e a IA responde em tempo real, testando seu improviso e tom de voz.
                        </p>
                        <ul className="text-xs text-gray-500 space-y-2 font-mono">
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-accent rounded-full"></div> Prospecção Ativa (Cold Call)</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-accent rounded-full"></div> Controle emocional sob pressão</li>
                        </ul>
                    </div>

                    {/* Feature 3 */}
                    <div className="group p-8 rounded-[2rem] bg-[#141419] border border-white/5 hover:border-gold/50 transition-all duration-300">
                        <div className="mb-6 p-4 rounded-2xl bg-black/40 w-fit border border-white/10 group-hover:bg-gold/20 transition-colors">
                            <GraduationCap size={28} className="text-gold" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Feedback Instantâneo</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Ao final de cada interação, receba uma análise detalhada. Onde você errou? O que poderia ter dito melhor? Qual sua nota?
                        </p>
                        <ul className="text-xs text-gray-500 space-y-2 font-mono">
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gold rounded-full"></div> Correção de discurso</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gold rounded-full"></div> Acompanhamento de evolução</li>
                        </ul>
                    </div>

                    {/* Feature 4 */}
                    <div className="group p-8 rounded-[2rem] bg-[#141419] border border-white/5 hover:border-green-500/50 transition-all duration-300">
                        <div className="mb-6 p-4 rounded-2xl bg-black/40 w-fit border border-white/10 group-hover:bg-green-500/20 transition-colors">
                            <Zap size={28} className="text-green-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Modo Rápido & Desafios</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Tem 5 minutos? Faça um treino rápido de "Desafio de Objeção". Responda perguntas práticas do dia a dia.
                        </p>
                    </div>

                     {/* Feature 5 */}
                     <div className="group p-8 rounded-[2rem] bg-[#141419] border border-white/5 hover:border-purple-500/50 transition-all duration-300">
                        <div className="mb-6 p-4 rounded-2xl bg-black/40 w-fit border border-white/10 group-hover:bg-purple-500/20 transition-colors">
                            <TrendingUp size={28} className="text-purple-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Trilhas de Desenvolvimento</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Escolha onde quer melhorar: Trilha de Fechamento, Trilha de Rapport ou Trilha de Negociação Complexa.
                        </p>
                    </div>

                    {/* Feature 6 */}
                    <div className="group p-8 rounded-[2rem] bg-[#141419] border border-white/5 hover:border-blue-500/50 transition-all duration-300">
                        <div className="mb-6 p-4 rounded-2xl bg-black/40 w-fit border border-white/10 group-hover:bg-blue-500/20 transition-colors">
                            <ShieldCheck size={28} className="text-blue-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Ambiente Seguro</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            O único lugar onde errar é incentivado. Elimine a vergonha de testar novas abordagens.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};