
import React from 'react';
import { Briefcase, Zap, Target, HeartHandshake, Rocket, Users, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { Page } from '../types';

interface AboutProps {
    setPage: (page: Page) => void;
}

export const About: React.FC<AboutProps> = ({ setPage }) => {
  return (
    <section className="py-24 pt-32 min-h-screen bg-gradient-to-b from-background to-black/50">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Visual Side */}
        <div className="relative order-2 lg:order-1 sticky top-32">
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto group">
                {/* Backplate */}
                <div className="absolute inset-0 bg-primary/20 border border-primary/30 rounded-[30px] -rotate-3 translate-x-4 translate-y-4 blur-sm group-hover:blur-md transition-all"></div>
                
                {/* Image Placeholder */}
                <div className="absolute inset-0 rounded-[25px] overflow-hidden border border-white/10 shadow-2xl bg-gray-800">
                    <img src="./yehuda.jpg" alt="Yehuda Michanie CEO" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 hover:scale-105 transform" />
                </div>

                {/* Floating Badges */}
                <div className="absolute top-8 -right-4 bg-[#141419]/90 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-3 shadow-xl hover:-translate-y-1 transition-transform animate-float">
                    <div className="p-2 bg-gold/20 rounded-lg text-gold"><Briefcase size={20} /></div>
                    <div>
                        <strong className="block text-sm text-white">Lavi Inc.</strong>
                        <small className="text-[10px] text-gray-400 uppercase font-bold">Origem Imobiliária</small>
                    </div>
                </div>

                <div className="absolute bottom-12 -left-4 bg-[#141419]/90 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-3 shadow-xl hover:-translate-y-1 transition-transform animate-float" style={{ animationDelay: '2s' }}>
                    <div className="p-2 bg-primary/20 rounded-lg text-primary"><Zap size={20} /></div>
                    <div>
                        <strong className="block text-sm text-white">Visionário</strong>
                        <small className="text-[10px] text-gray-400 uppercase font-bold">18 Anos de Idade</small>
                    </div>
                </div>
            </div>
        </div>

        {/* Text Side */}
        <div className="order-1 lg:order-2 space-y-12">
            <div className="animate-fade-in-up">
                <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-primary"></span>
                    Sobre o Fundador
                </span>
                <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white">
                    Yehuda Michanie
                </h2>
                <h3 className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                    "Eu não criei a NeoVendas porque eu era um gênio das vendas.<br/> 
                    <span className="text-white font-medium">Eu criei porque eu estava cansado de sofrer.</span>"
                </h3>
            </div>

            <div className="space-y-10 text-gray-300 font-light leading-relaxed text-lg">
                
                {/* Block 1: The Origin */}
                <div className="pl-6 border-l-2 border-white/10 hover:border-primary transition-colors duration-300">
                    <div className="flex items-center gap-3 mb-3">
                        <Target size={24} className="text-primary" />
                        <h4 className="text-white font-bold text-xl">O Campo de Batalha</h4>
                    </div>
                    <p>
                        Comecei cedo. Aos 18 anos, não escolhi um emprego fácil. Entrei direto na <strong>Lavi Inc</strong>, uma incorporadora de alto padrão. O jogo lá é brutal. O cliente não quer saber se você é jovem, se está nervoso ou se é seu primeiro dia.
                    </p>
                    <p className="mt-4">
                        Ele quer competência. E se você gagueja, ele compra com o concorrente. Eu tinha o "dom" da fala, mas descobri da pior maneira que <strong>talento sem treino não paga boleto</strong>.
                    </p>
                </div>

                {/* Block 2: The Pain */}
                <div className="pl-6 border-l-2 border-white/10 hover:border-red-500 transition-colors duration-300">
                     <div className="flex items-center gap-3 mb-3">
                        <HeartHandshake size={24} className="text-red-500" />
                        <h4 className="text-white font-bold text-xl">A Dor Real (Que Ninguém Conta)</h4>
                    </div>
                    <p className="mb-4">
                        Apanhei muito. Levei "nãos" que doeram na alma. Vi comissões de cinco dígitos escaparem porque eu não soube contornar uma objeção simples de preço.
                    </p>
                    <p className="italic text-gray-400">
                        "Por que eu preciso queimar leads reais para aprender? Por que eu preciso perder dinheiro para ganhar experiência?"
                    </p>
                    <p className="mt-4">
                        Essa pergunta não saía da minha cabeça. Eu via meus colegas passando pelo mesmo. O mercado comercial trata o vendedor iniciante como carne moída: joga na fogueira e vê quem sobrevive.
                    </p>
                </div>

                {/* Block 3: The Solution */}
                <div className="bg-[#141419] p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group hover:border-primary/50 transition-all">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] group-hover:bg-primary/20 transition-all"></div>
                     
                     <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <Rocket size={24} className="text-primary" />
                            <h4 className="text-white font-bold text-xl">A Revolução NeoVendas</h4>
                        </div>
                        <p className="mb-6 text-gray-300">
                            Decidi que ninguém mais precisaria passar por isso. Usei minha dor como combustível para criar a <strong>NeoVendas</strong>.
                        </p>
                        <p className="mb-6 font-bold text-white text-lg">
                            Não é um cursinho de vídeo. É um Simulador de Voo.
                        </p>
                        <p className="text-sm text-gray-400 mb-8">
                            Aqui, você pode errar. Você pode travar. Você pode falar besteira. A IA vai te corrigir, te ensinar e te preparar. E quando você estiver na frente do cliente real, você já terá vivido aquela situação 100 vezes. Você será imbatível.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button 
                                onClick={() => setPage(Page.TEST_AI)}
                                className="w-full flex items-center justify-center gap-2"
                            >
                                Começar Minha Evolução <ArrowRight size={18} />
                            </Button>
                        </div>
                     </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
