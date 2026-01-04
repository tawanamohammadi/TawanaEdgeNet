
import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section className="py-24 container mx-auto px-4">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-black text-white">ارتباط با ما</h2>
          <p className="text-slate-400">تیم Tawana Network آماده پاسخگویی به سوالات شماست</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-slate-800/30 rounded-[3rem] p-12 border border-slate-700 space-y-8">
            <h3 className="text-2xl font-black text-white">مشاوره مستقیم</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              برای دریافت پاسخ سریع‌تر و بررسی جزییات فنی پروژه خود، می‌توانید از طریق تلگرام با کارشناس ارشد ما در ارتباط باشید.
            </p>
            <a 
              href="https://t.me/rahbarusd" 
              target="_blank"
              className="flex items-center gap-4 p-6 bg-cyan-600/10 border border-cyan-500/20 rounded-3xl hover:bg-cyan-600/20 transition-all group"
            >
              <div className="w-12 h-12 bg-cyan-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-cyan-900/40">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.35-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.35-.49.96-.75 3.78-1.64 6.3-2.73 7.55-3.25 3.59-1.51 4.33-1.77 4.83-1.77.11 0 .35.03.5.15.13.11.16.26.18.37.02.11.02.24.01.37z"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-300">ارتباط در تلگرام</span>
                <span className="text-xl font-black text-white" dir="ltr">@rahbarusd</span>
              </div>
            </a>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-800">
              <h4 className="text-white font-bold mb-2">هویت تجاری</h4>
              <p className="text-slate-500 text-sm">Tawana Network | توانا نتورک</p>
              <p className="text-slate-600 text-[10px] mt-4 uppercase tracking-widest font-bold">Independent Internet Solutions Specialist</p>
            </div>
            
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-800">
              <h4 className="text-white font-bold mb-2">ساعات کاری</h4>
              <p className="text-slate-500 text-sm">شنبه تا پنجشنبه: ۹:۰۰ الی ۲۱:۰۰</p>
              <p className="text-slate-500 text-sm mt-1 text-xs">پشتیبانی مانیتورینگ: ۲۴/۷</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
