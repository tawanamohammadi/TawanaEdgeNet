
import React from 'react';

interface HeroProps {
  onStart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-cyan-400 text-[11px] font-black uppercase tracking-widest mx-auto">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Next-Gen Independent Infrastructure
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.2] tracking-tight">
            مرزهای محدودیت را با <br />
            <span className="text-cyan-500">اینترنت اختصاصی</span> جابجا کنید
          </h1>

          <p className="text-slate-400 text-base md:text-lg leading-relaxed font-medium">
            تکنولوژی EdgeNet ترکیبی از سخت‌افزارهای نظامی MIMO و سرورهای اختصاصی است تا پایداری ۱۰۰ درصدی را برای تریدرها، گیمرها و کسب‌وکارها فراهم کند.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={onStart}
              className="w-full sm:w-auto px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-2xl font-black text-lg transition-all shadow-xl shadow-cyan-900/40"
            >
              رزرو مشاوره و بازدید
            </button>
            <button className="w-full sm:w-auto px-10 py-4 bg-slate-900/50 text-slate-300 border border-slate-800 rounded-2xl font-black text-lg hover:bg-slate-800 transition-all">
              تعرفه‌های ۲۰۲۴
            </button>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { v: '1Gbps', l: 'MAX SPEED' },
            { v: '<20ms', l: 'STABLE PING' },
            { v: '99.9%', l: 'UPTIME' },
            { v: '24/7', l: 'TECH SUPPORT' }
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-3xl bg-slate-900/30 border border-slate-800/50">
              <p className="text-2xl font-black text-white mb-1">{stat.v}</p>
              <p className="text-[10px] text-slate-500 font-black tracking-widest">{stat.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
