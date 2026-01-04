
import React from 'react';

interface QuickConsultSectionProps {
  onStartFullForm: () => void;
}

export const QuickConsultSection: React.FC<QuickConsultSectionProps> = ({ onStartFullForm }) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-[3.5rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-cyan-500/5 blur-[120px]"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-xs font-black">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                امکان‌سنجی رایگان در سراسر ایران
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                مشاوره و <span className="text-cyan-500">کارشناسی فنی</span> <br />
                در محل شما
              </h2>
              <p className="text-slate-400 text-lg leading-loose">
                فرآیند کارشناسی توانا نتورک شامل بررسی دقیق دید رادیویی (Line of Sight)، آنالیز فرکانسی و تست سرعت در نقاط مختلف ساختمان شماست. با مودم‌های Outdoor تخصصی PANBEH، سیگنال را از دورترین دکل‌ها با بالاترین پایداری دریافت کنید.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3 bg-slate-900/50 p-4 rounded-2xl border border-slate-800">
                  <div className="w-10 h-10 bg-cyan-600/20 text-cyan-400 flex items-center justify-center rounded-xl">✓</div>
                  <span className="text-sm font-bold">تست سیگنال رایگان</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-900/50 p-4 rounded-2xl border border-slate-800">
                  <div className="w-10 h-10 bg-blue-600/20 text-blue-400 flex items-center justify-center rounded-xl">✓</div>
                  <span className="text-sm font-bold">نصب سریع (۴۸ ساعت)</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/80 p-8 md:p-12 rounded-[3rem] border border-slate-700 shadow-inner">
              <h3 className="text-xl font-black text-white mb-8 text-center">درخواست کارشناسی و بازدید</h3>
              <div className="space-y-6">
                <p className="text-slate-400 text-sm text-center font-medium">
                  برای شروع، فرم امکان‌سنجی را تکمیل کنید تا کارشناس فنی منطقه شما مشخص شود.
                </p>
                <button 
                  onClick={onStartFullForm}
                  className="w-full bg-white text-slate-900 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl shadow-white/5 flex items-center justify-center gap-4"
                >
                  شروع فرآیند کارشناسی
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <p className="text-[10px] text-slate-600 text-center font-bold tracking-widest uppercase">
                  FREE SITE SURVEY & SIGNAL ANALYSIS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
