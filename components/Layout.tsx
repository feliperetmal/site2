
import React from 'react';
import { Page } from '../types';
import { Navigation } from './Navigation';
import { SalesNotification } from './SalesNotification';
import { PromoTimer } from './PromoTimer';

interface LayoutProps {
  currentPage: Page;
  setPage: (page: Page) => void;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ currentPage, setPage, children }) => {
  return (
    <div className="min-h-screen relative font-sans text-white selection:bg-primary selection:text-white flex flex-col">
      {/* Background System */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
         {/* Base Grid */}
        <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-[0.07] bg-grid-mask"></div>
        
        {/* Dynamic Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[120px] animate-orb-move"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[100px] animate-orb-move" style={{ animationDelay: '-5s' }}></div>
        <div className="absolute top-[30%] right-[20%] w-[30vw] h-[30vw] bg-gold/5 rounded-full blur-[80px] animate-orb-move" style={{ animationDelay: '-10s' }}></div>
      </div>

      <Navigation currentPage={currentPage} setPage={setPage} />
      <SalesNotification />
      <PromoTimer />
      
      <main className="flex-grow">
        {children}
      </main>

      <footer className="py-10 border-t border-white/5 text-center bg-[#020204]/80 backdrop-blur-md">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} NeoVendas. Todos os direitos reservados.</p>
            <div className="flex items-center gap-6 text-sm text-gray-600 font-mono">
                <span>CEO: Yehuda Michanie</span>
                <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                <span>Dev: benba</span>
            </div>
        </div>
      </footer>
    </div>
  );
};
