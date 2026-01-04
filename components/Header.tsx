
import React, { useState } from 'react';
import { ViewState } from '../App';

interface HeaderProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { label: string; view: ViewState }[] = [
    { label: 'صفحه اصلی', view: 'home' },
    { label: 'درباره سرویس', view: 'about' },
    { label: 'نحوه عملکرد', view: 'process' },
    { label: 'زیرساخت فنی', view: 'tech' },
    { label: 'هزینه‌ها', view: 'pricing' },
    { label: 'مقایسه', view: 'comparison' },
    { label: 'سوالات متداول', view: 'faq' },
    { label: 'تماس', view: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-slate-900/80 backdrop-blur-xl border-b border-slate-800">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setView('home')}>
          <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-900/30">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tight">پنبه | PANBEH</span>
            <span className="text-[10px] text-cyan-500 font-bold uppercase tracking-widest mt-1">Tawana EdgeNet</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6 text-[13px] font-bold text-slate-400">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => setView(item.view)}
              className={`hover:text-white transition-colors relative py-2 ${
                currentView === item.view ? 'text-cyan-400' : ''
              }`}
            >
              {item.label}
              {currentView === item.view && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-500 rounded-full" />
              )}
            </button>
          ))}
          <button 
            onClick={() => setView('booking')}
            className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2.5 rounded-2xl transition-all shadow-xl shadow-cyan-900/40 text-sm"
          >
            رزرو مشاوره
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="xl:hidden p-2 text-slate-400 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-slate-900 border-b border-slate-800 p-6 space-y-4 animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => {
                setView(item.view);
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-right py-3 text-slate-300 font-bold hover:text-cyan-400 border-b border-slate-800/50"
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => {
              setView('booking');
              setIsMobileMenuOpen(false);
            }}
            className="w-full bg-cyan-600 text-white py-4 rounded-2xl font-black mt-4"
          >
            رزرو مشاوره فنی
          </button>
        </div>
      )}
    </header>
  );
};
