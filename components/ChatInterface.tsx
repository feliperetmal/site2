
import React, { useState, useRef, useEffect } from 'react';
import { Send, RefreshCw, Bot, User, ArrowLeft, Brain, Briefcase, PhoneOff, Building2, Sparkles, Plus, Save, Lock, Mail } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { ChatMessage, Scenario, SendingStatus } from '../types';
import { SCENARIOS, GLOBAL_CONTEXT } from '../constants';
import { sendMessageToGemini } from '../services/geminiService';
import { logMessage, logLead } from '../services/discordLogger';

export const ChatInterface: React.FC = () => {
  // Access Control State
  const [hasJoined, setHasJoined] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isLoadingJoin, setIsLoadingJoin] = useState(false);

  // Chat State
  const [activeScenarios, setActiveScenarios] = useState<Scenario[]>(SCENARIOS);
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState<SendingStatus>(SendingStatus.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Custom Scenario State
  const [isCreating, setIsCreating] = useState(false);
  const [newScenarioName, setNewScenarioName] = useState('');
  const [newScenarioDesc, setNewScenarioDesc] = useState('');
  const [newScenarioPersona, setNewScenarioPersona] = useState('');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Start chat when scenario is selected
  useEffect(() => {
    if (selectedScenario) {
      setMessages([]);
      setInputValue('');
      setStatus(SendingStatus.IDLE);
      
      // Determine initial greeting based on persona
      let initialText = "";
      switch(selectedScenario.id) {
        case 'roberto':
            initialText = "Olá. Eu vi a apresentação do imóvel. O projeto parece bom, mas sinceramente? O preço está muito acima da região. Me convença.";
            break;
        case 'steve':
            initialText = "Olá. Tenho 15 minutos antes da minha próxima reunião de board. Qual é o maior gargalo do seu negócio hoje? Seja direto.";
            break;
        case 'julia':
            initialText = "Oi. Recebi seu email querendo discutir remuneração. Olha, o budget desse ano já está fechado, mas pode falar.";
            break;
        case 'secretary':
            initialText = "Lavi Inc, Amanda falando. O Sr. Roberto está em reunião. Do que se trata?";
            break;
        default:
            initialText = `Olá, eu sou ${selectedScenario.persona}. Como posso ajudar no seu treinamento hoje?`;
      }

      setTimeout(() => {
        setMessages([
          {
            id: 'init',
            role: 'model',
            text: initialText,
          },
        ]);
      }, 500);
    }
  }, [selectedScenario]);

  const handleJoin = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!userName.trim() || !userEmail.trim()) return;
      
      setIsLoadingJoin(true);
      
      // Send data to Discord
      await logLead(userName, userEmail);
      
      // Allow access
      setHasJoined(true);
      setIsLoadingJoin(false);
  };

  const handleCreateScenario = () => {
      if (!newScenarioName || !newScenarioPersona) return;

      const newId = `custom-${Date.now()}`;
      const newScenario: Scenario = {
          id: newId,
          name: newScenarioName,
          description: newScenarioDesc || "Cenário Personalizado",
          persona: newScenarioPersona,
          systemInstruction: `
            ${GLOBAL_CONTEXT}
            CONTEXTO ESPECÍFICO: Cenário Personalizado criado pelo usuário.
            PERSONA: ${newScenarioPersona}.
            DESCRIÇÃO DA SITUAÇÃO: ${newScenarioDesc}.
            REGRAS: Aja estritamente como a persona definida.
            FORMATO: Resposta da Persona --- Feedback Técnico (comece com 🎓).
          `
      };

      setActiveScenarios([...activeScenarios, newScenario]);
      setIsCreating(false);
      setSelectedScenario(newScenario); // Auto select
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || status === SendingStatus.SENDING || !selectedScenario) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setStatus(SendingStatus.SENDING);

    try {
      const responseText = await sendMessageToGemini(
        messages, 
        userMsg.text, 
        selectedScenario.systemInstruction
      );

      const parts = responseText.split('---');
      const dialog = parts[0].trim();
      const feedback = parts.length > 1 ? parts[1].trim() : null;

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: dialog,
      };

      setMessages((prev) => [...prev, aiMsg]);

      if (feedback) {
        const feedbackMsg: ChatMessage = {
            id: (Date.now() + 2).toString(),
            role: 'model',
            text: feedback,
            isFeedback: true
        };
        setMessages((prev) => [...prev, feedbackMsg]);
      }
      
      // Log interaction to Discord
      logMessage(`[${userName}] ${userMsg.text}`, dialog, selectedScenario.name);
      
      setStatus(SendingStatus.IDLE);
    } catch (error) {
      setStatus(SendingStatus.ERROR);
    }
  };

  const getIcon = (id: string) => {
      if (id.startsWith('custom')) return <Sparkles size={32} className="text-white" />;
      switch(id) {
          case 'roberto': return <Building2 size={32} className="text-primary" />;
          case 'steve': return <Brain size={32} className="text-accent" />;
          case 'julia': return <Briefcase size={32} className="text-green-400" />;
          case 'secretary': return <PhoneOff size={32} className="text-red-400" />;
          default: return <Bot size={32} />;
      }
  };

  // --- RENDER LEAD CAPTURE FORM ---
  if (!hasJoined) {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 animate-fade-in pt-20">
            <div className="bg-[#141419]/90 backdrop-blur-xl border border-white/10 p-8 rounded-3xl w-full max-w-md shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[50px] -z-10"></div>
                
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/30">
                        <Lock size={32} className="text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Acesso ao Treinador</h2>
                    <p className="text-gray-400 text-sm">Libere seu acesso gratuito ao simulador de vendas e comece a treinar agora.</p>
                </div>

                <form onSubmit={handleJoin} className="space-y-4">
                    <div>
                        <label className="block text-xs text-gray-500 uppercase font-bold mb-2 ml-1">Seu Nome</label>
                        <div className="relative">
                            <User size={18} className="absolute left-3 top-3.5 text-gray-500" />
                            <input 
                                type="text"
                                required
                                placeholder="Digite seu nome"
                                className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 p-3 text-white focus:border-primary outline-none transition-colors"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs text-gray-500 uppercase font-bold mb-2 ml-1">Seu Email</label>
                        <div className="relative">
                            <Mail size={18} className="absolute left-3 top-3.5 text-gray-500" />
                            <input 
                                type="email"
                                required
                                placeholder="Digite seu melhor email"
                                className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 p-3 text-white focus:border-primary outline-none transition-colors"
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <button 
                        type="submit"
                        disabled={isLoadingJoin}
                        className="w-full bg-primary hover:bg-indigo-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isLoadingJoin ? 'Liberando Acesso...' : 'Liberar Simulador Agora'}
                    </button>
                    <p className="text-[10px] text-center text-gray-600 mt-4">
                        Ao continuar, você concorda com nossos termos de uso.
                    </p>
                </form>
            </div>
        </div>
    );
  }

  // --- RENDER SELECTION SCREEN ---
  if (!selectedScenario) {
      return (
          <div className="pt-32 pb-20 container mx-auto px-4">
              <div className="text-center mb-12 animate-fade-in-up">
                  <h2 className="text-4xl font-extrabold mb-4">Bem-vindo, {userName}</h2>
                  <p className="text-gray-400">Selecione um cenário ou crie uma situação específica.</p>
              </div>

              {isCreating ? (
                  <div className="max-w-2xl mx-auto bg-[#141419] border border-white/10 rounded-3xl p-8 animate-fade-in">
                      <div className="flex justify-between items-center mb-6">
                          <h3 className="text-xl font-bold">Criar Novo Caso</h3>
                          <button onClick={() => setIsCreating(false)} className="text-gray-400 hover:text-white"><ArrowLeft /></button>
                      </div>
                      <div className="space-y-4">
                          <div>
                              <label className="block text-xs text-gray-500 uppercase font-bold mb-2">Nome do Cenário</label>
                              <input 
                                className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:border-primary outline-none" 
                                placeholder="Ex: Venda de Software, Cliente Bravo..."
                                value={newScenarioName} onChange={e => setNewScenarioName(e.target.value)}
                              />
                          </div>
                          <div>
                              <label className="block text-xs text-gray-500 uppercase font-bold mb-2">Quem é a IA? (Persona)</label>
                              <input 
                                className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:border-primary outline-none" 
                                placeholder="Ex: Diretor de Marketing ocupado..."
                                value={newScenarioPersona} onChange={e => setNewScenarioPersona(e.target.value)}
                              />
                          </div>
                          <div>
                              <label className="block text-xs text-gray-500 uppercase font-bold mb-2">Descrição da Situação</label>
                              <textarea 
                                className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:border-primary outline-none h-24" 
                                placeholder="Ex: Estou tentando vender um CRM novo mas ele já usa um concorrente."
                                value={newScenarioDesc} onChange={e => setNewScenarioDesc(e.target.value)}
                              />
                          </div>
                          <button 
                            onClick={handleCreateScenario}
                            className="w-full bg-primary hover:bg-indigo-600 text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2 mt-4 transition-colors"
                          >
                              <Save size={18} /> Salvar e Começar
                          </button>
                      </div>
                  </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {/* Create New Button */}
                    <button 
                        onClick={() => setIsCreating(true)}
                        className="group flex flex-col items-center justify-center gap-4 bg-transparent border-2 border-dashed border-white/10 p-8 rounded-3xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 min-h-[200px]"
                    >
                        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                            <Plus size={32} />
                        </div>
                        <span className="font-bold text-gray-400 group-hover:text-white">Criar Cenário Personalizado</span>
                    </button>

                    {activeScenarios.map((scenario, index) => (
                        <button 
                            key={scenario.id}
                            onClick={() => setSelectedScenario(scenario)}
                            className="group relative bg-[#141419] border border-white/10 p-8 rounded-3xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 text-left overflow-hidden flex flex-col justify-between min-h-[250px]"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10">
                                <div className="mb-6 p-4 rounded-2xl bg-black/40 w-fit border border-white/10 group-hover:scale-110 transition-transform shadow-lg">
                                    {getIcon(scenario.id)}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{scenario.name}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{scenario.description}</p>
                            </div>
                            <div className="relative z-10 mt-6 pt-6 border-t border-white/5 flex justify-between items-center w-full">
                                <span className="text-xs text-gray-500 font-mono uppercase">IA: {scenario.persona}</span>
                                <span className="text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">Go <ArrowLeft size={14} className="rotate-180" /></span>
                            </div>
                        </button>
                    ))}
                </div>
              )}
          </div>
      );
  }

  // --- RENDER CHAT SCREEN ---
  return (
    <div className="pt-28 pb-10 min-h-screen container mx-auto px-4 max-w-5xl animate-fade-in">
      <div className="bg-[#141419]/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative flex flex-col h-[75vh]">
        
        {/* Header */}
        <div className="bg-[#0a0a0a]/50 p-5 border-b border-white/5 flex justify-between items-center z-10">
          <div className="flex items-center gap-4">
            <button 
                onClick={() => setSelectedScenario(null)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                title="Voltar para seleção"
            >
                <ArrowLeft size={20} />
            </button>
            <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                    {React.cloneElement(getIcon(selectedScenario.id) as React.ReactElement<{ size: number }>, { size: 20 })}
                </div>
                <div>
                <h3 className="font-bold text-white text-lg leading-tight">{selectedScenario.name}</h3>
                <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${status === SendingStatus.SENDING ? 'bg-yellow-400 animate-pulse' : 'bg-green-500'}`} />
                    <p className="text-xs text-gray-400">{status === SendingStatus.SENDING ? 'Processando...' : 'NeoVendas AI Ativo'}</p>
                </div>
                </div>
            </div>
          </div>
          
          <button 
            onClick={() => {
                setMessages([]);
                // Trigger re-init
                const current = selectedScenario;
                setSelectedScenario(null);
                setTimeout(() => setSelectedScenario(current), 10);
            }}
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-xs font-bold border border-white/10 px-4 py-2 rounded-xl hover:bg-white/5 uppercase tracking-wider"
          >
            <RefreshCw size={14} /> Reiniciar
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 bg-[#050507] scrollbar-thin">
            {messages.map((msg) => {
                if (msg.isFeedback) {
                    return (
                        <div key={msg.id} className="animate-fade-in mx-auto max-w-2xl bg-gradient-to-r from-yellow-500/5 to-orange-500/5 border border-yellow-500/20 rounded-xl p-4 text-sm text-yellow-200/80 flex gap-4 backdrop-blur-sm">
                             <div className="shrink-0 mt-1"><Sparkles size={18} className="text-yellow-500" /></div>
                             <div className="prose prose-invert prose-sm max-w-none leading-relaxed">
                                <ReactMarkdown>{msg.text}</ReactMarkdown>
                             </div>
                        </div>
                    )
                }
                return (
                    <div 
                        key={msg.id} 
                        className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'} group`}
                    >
                        {msg.role === 'model' && (
                            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shrink-0 border border-white/10 shadow-lg mt-2">
                                <Bot size={20} className="text-accent" />
                            </div>
                        )}
                        
                        <div className={`max-w-[85%] md:max-w-[75%] rounded-3xl p-5 md:p-6 text-sm md:text-base leading-7 shadow-xl backdrop-blur-sm ${
                            msg.role === 'user' 
                                ? 'bg-gradient-to-br from-primary to-indigo-600 text-white rounded-br-none' 
                                : 'bg-[#1a1a20] text-gray-200 border border-white/5 rounded-bl-none'
                        }`}>
                             <ReactMarkdown className="prose prose-invert max-w-none">{msg.text}</ReactMarkdown>
                        </div>

                        {msg.role === 'user' && (
                            <div className="w-10 h-10 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30 mt-2">
                                <User size={20} className="text-primary" />
                            </div>
                        )}
                    </div>
                );
            })}
            
            {status === SendingStatus.SENDING && (
                <div className="flex justify-start gap-4 animate-pulse">
                     <div className="w-10 h-10 rounded-2xl bg-gray-800 flex items-center justify-center border border-white/10">
                        <Bot size={20} className="text-accent" />
                    </div>
                    <div className="bg-[#1a1a20] px-6 py-4 rounded-3xl rounded-bl-none text-gray-400 text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                </div>
            )}
            
            {status === SendingStatus.ERROR && (
                <div className="mx-auto max-w-md bg-red-500/10 border border-red-500/20 text-red-200 p-4 rounded-xl text-center text-sm">
                    ⚠️ Erro de conexão com a IA. Tente novamente.
                </div>
            )}
            
            <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-[#141419] p-4 md:p-6 border-t border-white/10">
            <div className="relative flex items-center gap-4 bg-[#050507] border border-white/10 rounded-2xl p-2 pr-2 focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/20 transition-all shadow-inner">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Digite sua resposta..."
                    className="flex-1 bg-transparent border-none px-4 py-3 text-white focus:outline-none placeholder-gray-600 font-medium"
                    disabled={status === SendingStatus.SENDING}
                    autoFocus
                />
                <button
                    onClick={handleSendMessage}
                    disabled={status === SendingStatus.SENDING || !inputValue.trim()}
                    className="bg-primary hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-all shadow-lg shadow-primary/20 hover:scale-105 active:scale-95"
                >
                   {status === SendingStatus.SENDING ? <RefreshCw size={20} className="animate-spin" /> : <Send size={20} />}
                </button>
            </div>
            <div className="text-center mt-4">
                <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">NeoVendas AI Engine v3.0 • Powered by Yehuda Michanie Tech</p>
            </div>
        </div>
      </div>
    </div>
  );
};
