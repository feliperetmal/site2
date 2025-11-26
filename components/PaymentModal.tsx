
import React, { useState } from 'react';
import { X, QrCode, Bitcoin, CreditCard, Wallet, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from './Button';
import { logAction } from '../services/discordLogger';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  price: string;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, planName, price }) => {
  const [step, setStep] = useState<'selection' | 'message'>('selection');
  const [selectedMethod, setSelectedMethod] = useState('');

  if (!isOpen) return null;

  const handleSelect = (method: string) => {
    setSelectedMethod(method);
    logAction("Tentativa de Pagamento", `Plano: ${planName}, Método: ${method}`);
    setStep('message');
  };

  const handleContact = () => {
      logAction("Clique Contato", "Botão Falar com Yehuda clicado");
      // Use the correct WhatsApp link as requested
      window.open("https://wa.me/5511990265656", "_blank"); 
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal Content */}
      <div className="relative bg-[#141419] border border-white/10 w-full max-w-md rounded-3xl overflow-hidden shadow-2xl animate-fade-in-up">
        
        {/* Header */}
        <div className="bg-[#0a0a0e] p-6 border-b border-white/5 flex justify-between items-center">
            <div>
                <h3 className="text-xl font-bold text-white">Finalizar Assinatura</h3>
                <p className="text-xs text-gray-400">{planName} • {price}</p>
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
                <X size={24} />
            </button>
        </div>

        <div className="p-8">
            {step === 'selection' ? (
                <>
                    <p className="text-gray-300 mb-6 text-center">Escolha seu método de pagamento preferido para liberação imediata:</p>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <button onClick={() => handleSelect('Pix')} className="flex flex-col items-center justify-center gap-3 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-primary/20 hover:border-primary transition-all group">
                            <QrCode size={32} className="text-gray-300 group-hover:text-primary" />
                            <span className="font-bold text-sm">PIX</span>
                        </button>
                        
                        <button onClick={() => handleSelect('Cartão')} className="flex flex-col items-center justify-center gap-3 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-primary/20 hover:border-primary transition-all group">
                            <CreditCard size={32} className="text-gray-300 group-hover:text-primary" />
                            <span className="font-bold text-sm">Cartão</span>
                        </button>

                        <button onClick={() => handleSelect('Bitcoin')} className="flex flex-col items-center justify-center gap-3 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-orange-500/20 hover:border-orange-500 transition-all group">
                            <Bitcoin size={32} className="text-gray-300 group-hover:text-orange-500" />
                            <span className="font-bold text-sm">Bitcoin</span>
                        </button>

                         <button onClick={() => handleSelect('Litecoin')} className="flex flex-col items-center justify-center gap-3 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-blue-400/20 hover:border-blue-400 transition-all group">
                            <Wallet size={32} className="text-gray-300 group-hover:text-blue-400" />
                            <span className="font-bold text-sm">Litecoin</span>
                        </button>
                    </div>
                    <p className="text-[10px] text-center text-gray-600 mt-6">Ambiente criptografado e seguro.</p>
                </>
            ) : (
                <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/30">
                        <MessageCircle size={32} className="text-white" />
                    </div>
                    
                    <h4 className="text-2xl font-bold text-white mb-2">Ops! Quase lá...</h4>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        Estamos finalizando a integração automática do <strong>{selectedMethod}</strong> nesta nova versão da plataforma.
                        <br/><br/>
                        Para liberar seu acesso <strong>agora mesmo</strong>, chame o CEO diretamente.
                    </p>

                    <Button onClick={handleContact} variant="glow" className="w-full py-4 flex items-center justify-center gap-2">
                        Falar com Yehuda Agora <ArrowRight size={18} />
                    </Button>
                    
                    <button onClick={onClose} className="mt-4 text-xs text-gray-500 hover:text-white underline">
                        Voltar para o site
                    </button>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};
