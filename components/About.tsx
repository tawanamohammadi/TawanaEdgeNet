
import React from 'react';

interface AboutProps {
  compact?: boolean;
  onLearnMore?: () => void;
}

export const About: React.FC<AboutProps> = ({ compact, onLearnMore }) => {
  return (
    <section className="py-24 container mx-auto px-4">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-white">پنبه چیست؟</h2>
          <p className="text-cyan-500 font-bold tracking-widest text-sm uppercase">Independent Internet Infrastructure</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-200">فراتر از یک اینترنت معمولی</h3>
            <p className="text-slate-400 leading-relaxed text-justify">
              سرویس PANBEH یک VPN، پروکسی یا تونل ساده نیست. این راهکار، یک معماری اینترنت مستقل مبتنی بر لبه (Edge-Based) است که با استفاده از تجهیزات اختصاصی LTE Outdoor و مسیریابی خصوصی، اینترنت را بدون محدودیت‌های رایج به دست شما می‌رساند.
            </p>
            <p className="text-slate-400 leading-relaxed text-justify">
              برخلاف اینترنت‌های اشتراکی که با افزایش ترافیک دچار افت کیفیت می‌شوند، زیرساخت Tawana EdgeNet با تخصیص VPS اختصاصی برای هر کاربر و مدیریت هوشمند ترافیک، پایداری ۲۴ ساعته را تضمین می‌کند.
            </p>
            {compact && (
              <button 
                onClick={onLearnMore}
                className="text-cyan-400 font-bold flex items-center gap-2 hover:gap-4 transition-all"
              >
                مطالعه جزئیات بیشتر
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-180" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 1.414l-3.586 3.586 3.586 3.586a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>

          <div className="bg-slate-800/50 rounded-[3rem] p-8 border border-slate-700 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full"></div>
            <ul className="space-y-6 relative z-10">
              {[
                { t: 'عدم نیاز به فیلترشکن', d: 'تمامی سرویس‌ها به صورت مستقیم در دسترس هستند.' },
                { t: 'IP رزیدنتال واقعی', d: 'شناخته شدن به عنوان کاربر خانگی در کشورهای مرجع.' },
                { t: 'پایداری در اختلالات ملی', d: 'طراحی شده برای حفظ اتصال حتی در شرایط خاص.' },
                { t: 'تأخیر (Latency) بسیار پایین', d: 'ایده‌آل برای گیمینگ، ترید و ویدیو کنفرانس.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">{item.t}</h4>
                    <p className="text-xs text-slate-500">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
