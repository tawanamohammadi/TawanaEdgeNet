
import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    { title: 'امکان‌سنجی فنی', desc: 'بررسی موقعیت جغرافیایی و دکل‌های منطقه شما از راه دور.' },
    { title: 'آنالیز سیگنال در محل', desc: 'حضور کارشناس جهت یافتن بهترین نقطه برای دریافت سیگنال پایدار.' },
    { title: 'نصب تجهیزات Outdoor', desc: 'استقرار آنتن‌های MIMO و رادیوهای مخصوص در فضای باز.' },
    { title: 'تخصیص VPS اختصاصی', desc: 'راه‌اندازی سرور اختصاصی برای هر کاربر جهت امنیت و سرعت.' },
    { title: 'اختصاص IP رزیدنتال', desc: 'تنظیم IP ثابت مسکونی برای دسترسی بدون محدودیت.' },
    { title: 'مانیتورینگ و پشتیبانی', desc: 'نظارت هوشمند ۲۴ ساعته بر کیفیت و پایداری اتصال شما.' },
  ];

  return (
    <section className="py-24 container mx-auto px-4">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-black text-white">مسیر فعال‌سازی</h2>
          <p className="text-slate-400">فرآیند دقیق و مهندسی شده برای تضمین کیفیت</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-slate-800 -translate-y-1/2 z-0"></div>

          {steps.map((step, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-[2rem] p-8 space-y-4 relative z-10 hover:border-cyan-500/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-slate-800 text-cyan-400 flex items-center justify-center font-black text-xl group-hover:bg-cyan-500 group-hover:text-white transition-all">
                {i + 1}
              </div>
              <h3 className="text-lg font-black text-white">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-cyan-500/5 rounded-[3rem] p-12 border border-cyan-500/10 text-center">
          <h4 className="text-xl font-bold mb-4">چرا این فرآیند مهم است؟</h4>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-loose">
            برخلاف سرویس‌های اشتراکی که فقط با یک مودم ساده فعال می‌شوند، PANBEH به دلیل ماهیت "اختصاصی" خود نیاز به تنظیمات دقیق سخت‌افزاری و نرم‌افزاری دارد تا بالاترین سطح پایداری و امنیت را فراهم کند.
          </p>
        </div>
      </div>
    </section>
  );
};
