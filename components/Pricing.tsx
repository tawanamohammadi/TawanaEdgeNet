
import React from 'react';

interface PricingProps {
  onBook: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onBook }) => {
  return (
    <section className="py-24 container mx-auto px-4">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-black text-white">تعرفه‌ها و هزینه‌ها</h2>
          <p className="text-slate-400">شفافیت کامل، بدون هزینه‌های پنهان</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Monthly Package */}
          <div className="bg-slate-900 border-2 border-slate-800 rounded-[3rem] p-10 space-y-8 hover:border-cyan-500 transition-all">
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white">اشتراک ماهیانه</h3>
              <p className="text-slate-500 text-sm">شارژ سرویس و نگهداری VPS اختصاصی</p>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black text-cyan-400">۱۵–۲۵</span>
              <span className="text-xl font-bold text-slate-400">دلار / ماه</span>
            </div>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                ترافیک نامحدود واقعی
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                VPS با منابع کاملاً اختصاصی
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                پشتیبانی فنی اولویت‌دار
              </li>
            </ul>
          </div>

          {/* Installation Package */}
          <div className="bg-slate-900 border-2 border-slate-800 rounded-[3rem] p-10 space-y-8 hover:border-blue-500 transition-all">
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white">تجهیزات و نصب</h3>
              <p className="text-slate-500 text-sm">هزینه یک‌باره سخت‌افزار و راه‌اندازی</p>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black text-blue-400">۴۰۰–۶۰۰</span>
              <span className="text-xl font-bold text-slate-400">دلار (یک‌بار)</span>
            </div>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                آنتن MIMO و مودم Outdoor قدرتمند
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                کابل‌کشی و تجهیزات پسیو شبکه
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                نصب و کانفیگ اختصاصی در محل
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center">
          <button 
            onClick={onBook}
            className="px-12 py-5 bg-white text-slate-900 rounded-3xl font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-white/10"
          >
            رزرو مشاوره و امکان‌سنجی رایگان
          </button>
        </div>

        <div className="text-center text-xs text-slate-600">
          * قیمت‌ها بر اساس نوسانات ارزی و کیفیت تجهیزات موجود در بازار ممکن است تغییرات جزئی داشته باشند.
        </div>
      </div>
    </section>
  );
};
