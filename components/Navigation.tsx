
import React from 'react';
import { Page } from '../types';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-glass-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="font-sans font-extrabold text-2xl cursor-pointer tracking-tighter"
          onClick={() => setPage(Page.HOME)}
        >
          YM<span className="text-primary">.</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.value}
              onClick={() => setPage(link.value as Page)}
              className={`text-sm font-medium transition-colors ${
                currentPage === link.value 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          
          <button
            onClick={() => setPage(Page.TEST_AI)}
            className="bg-primary hover:bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all hover:scale-105"
          >
            ⚡ Teste a IA
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 h-screen">
          {NAV_LINKS.map((link) => (
            <button
              key={link.value}
              onClick={() => {
                setPage(link.value as Page);
                setIsOpen(false);
              }}
              className={`text-left text-lg font-medium ${
                currentPage === link.value ? 'text-white' : 'text-gray-400'
              }`}
            >
              {link.label}
            </button>
          ))}
           <button
            onClick={() => {
              setPage(Page.TEST_AI);
              setIsOpen(false);
            }}
            className="bg-primary text-white py-3 rounded-lg font-bold text-center mt-4"
          >
            ⚡ Teste a IA
          </button>
        </div>
      )}
    </nav>
  );
};
