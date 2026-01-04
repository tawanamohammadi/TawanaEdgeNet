
import React from 'react';
import { ViewState } from '../App';

interface FooterProps {
  setView: (view: ViewState) => void;
}

export const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-[#010413] border-t border-slate-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          
          {/* Brand & Hotline */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3 mb-2" onClick={() => setView('home')}>
              <div className="w-8 h-8 bg-cyan-600 rounded flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-lg font-black text-white">توانا نتورک</span>
            </div>
            <p className="text-slate-500 text-xs font-medium max-w-xs">ارائه‌دهنده تخصصی زیرساخت‌های اینترنت اختصاصی و پایدار در ایران.</p>
          </div>

          {/* Hotline Box */}
          <div className="bg-slate-900/40 border border-slate-800 p-4 rounded-2xl flex items-center gap-4">
            <div className="w-10 h-10 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">خط ویژه فروش و پشتیبانی</p>
              <a href="tel:09901120235" className="text-xl font-black text-white hover:text-cyan-400 transition-colors" dir="ltr">۰۹۹۰ ۱۱۲ ۰۲۳۵</a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] text-slate-600 font-black uppercase mb-1">دسترسی</span>
              <button onClick={() => setView('tech')} className="text-xs font-bold text-slate-400 hover:text-white text-right">تکنولوژی</button>
              <button onClick={() => setView('pricing')} className="text-xs font-bold text-slate-400 hover:text-white text-right">تعرفه‌ها</button>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] text-slate-600 font-black uppercase mb-1">کمک</span>
              <button onClick={() => setView('faq')} className="text-xs font-bold text-slate-400 hover:text-white text-right">سوالات</button>
              <button onClick={() => setView('contact')} className="text-xs font-bold text-slate-400 hover:text-white text-right">تماس با ما</button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-900/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-slate-700 font-bold uppercase tracking-tight">© {new Date().getFullYear()} TAWANA EDGE-NETWORKS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-4">
             <a href="https://t.me/rahbarusd" className="text-[10px] font-black text-cyan-600 hover:text-cyan-400">TELEGRAM</a>
             <span className="text-slate-800 text-[10px]">|</span>
             <a href="#" className="text-[10px] font-black text-slate-600">LEGAL</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
