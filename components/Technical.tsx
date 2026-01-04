
import React from 'react';

export const Technical: React.FC = () => {
  const specs = [
    { label: 'سخت‌افزار دریافت', val: 'Dedicated LTE Outdoor Station (Category 12+)' },
    { label: 'تکنولوژی آنتن', val: '4x4 MIMO High-Gain Directional Antennas' },
    { label: 'واحد پردازش', val: 'Core Router with Optimized Xray Engine' },
    { label: 'تخصیص شبکه', val: 'Dedicated VPS per Client instance' },
    { label: 'آی‌پی اختصاصی', val: 'Independent ASN & Clean Netblock' },
    { label: 'مسیریابی', val: 'Smart Routing (Bypassing International Filtering)' }
  ];

  return (
    <section className="py-24 container mx-auto px-4">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-black text-white">زیرساخت فنی EdgeNet</h2>
          <p className="text-slate-400">مهندسی شده برای شرایط خاص جغرافیایی</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {specs.map((spec, i) => (
            <div key={i} className="bg-slate-800/30 p-6 rounded-2xl border border-slate-800 flex flex-col gap-2">
              <span className="text-[10px] text-cyan-500 font-bold uppercase tracking-widest">{spec.label}</span>
              <span className="text-lg font-bold text-slate-200" dir="ltr">{spec.val}</span>
            </div>
          ))}
        </div>

        <div className="p-10 bg-slate-800/50 rounded-[3rem] border border-slate-700">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <div className="w-2 h-8 bg-cyan-500 rounded-full"></div>
            امنیت و حریم خصوصی
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-400 leading-relaxed">
            <p>
              در سرویس PANBEH، ترافیک شما به صورت End-to-End رمزنگاری شده و مستقیماً به گیت‌وی اختصاصی شما در خارج از کشور هدایت می‌شود. این به معنای عدم امکان شنود یا تحلیل ترافیک توسط واسطه‌های محلی است.
            </p>
            <p>
              استفاده از پروتکل‌های نوین و مسیریابی هوشمند باعث می‌شود که ترافیک داخلی ایران (مانند سایت‌های بانکی) مستقیماً و بدون تغییر مسیر خارج شوند تا سرعت و امنیت آن‌ها حفظ شود.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
