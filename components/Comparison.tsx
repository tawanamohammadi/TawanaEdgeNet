
import React from 'react';

export const Comparison: React.FC = () => {
  const data = [
    { feature: 'IP ثابت رزیدنتال', panbeh: '✅ دارد', starlink: '❌ ندارد', vpn: '⚠️ دیتاسنتر', isp: '❌ ندارد' },
    { feature: 'عملکرد در قطع سراسری', panbeh: '✅ پایدار', starlink: '✅ پایدار', vpn: '❌ قطع کامل', isp: '⚠️ اینترانت' },
    { feature: 'نیاز به تجهیزات فیزیکی', panbeh: 'بله (Outdoor)', starlink: 'بله (Dish)', vpn: 'خیر', isp: 'خیر' },
    { feature: 'سرعت متوسط', panbeh: '100-300 Mbps', starlink: '150+ Mbps', vpn: 'کاهش شدید', isp: 'نامشخص' },
    { feature: 'هزینه ماهیانه', panbeh: '$15 - $25', starlink: '$100+', vpn: '$3 - $10', isp: 'ریالی' },
    { feature: 'پایداری پینگ', panbeh: 'بسیار بالا', starlink: 'متوسط', vpn: 'نوسانی', isp: 'ضعیف' },
  ];

  return (
    <section className="py-24 container mx-auto px-4">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-black text-white">مقایسه سرویس‌ها</h2>
          <p className="text-slate-400">چرا PANBEH انتخاب هوشمندانه‌تری است؟</p>
        </div>

        <div className="overflow-x-auto rounded-[2.5rem] border border-slate-800 shadow-2xl">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-slate-800/50">
                <th className="p-6 text-sm font-black text-slate-300">ویژگی</th>
                <th className="p-6 text-sm font-black text-cyan-400 bg-cyan-500/10 border-x border-cyan-500/20">پنبه (EdgeNet)</th>
                <th className="p-6 text-sm font-black text-slate-300">استارلینک</th>
                <th className="p-6 text-sm font-black text-slate-300">VPN / Proxy</th>
                <th className="p-6 text-sm font-black text-slate-300">اینترنت معمولی</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {data.map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/20 transition-colors">
                  <td className="p-6 text-xs font-bold text-slate-400">{row.feature}</td>
                  <td className="p-6 text-sm font-black text-white bg-cyan-500/5 border-x border-cyan-500/10">{row.panbeh}</td>
                  <td className="p-6 text-xs text-slate-500">{row.starlink}</td>
                  <td className="p-6 text-xs text-slate-500">{row.vpn}</td>
                  <td className="p-6 text-xs text-slate-500">{row.isp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-loose">
          <div className="bg-slate-800/30 p-8 rounded-3xl border border-slate-800">
            <h4 className="font-black text-white mb-4">تفاوت با استارلینک</h4>
            <p className="text-slate-400">
              استارلینک علی‌رغم کیفیت بالا، هزینه خرید و شارژ ماهیانه بسیار سنگینی دارد و در برخی مناطق با محدودیت‌های سیگنالی مواجه است. PANBEH با هزینه به مراتب کمتر، پایداری و پینگ بهتری را برای مصارف حرفه‌ای فراهم می‌کند.
            </p>
          </div>
          <div className="bg-slate-800/30 p-8 rounded-3xl border border-slate-800">
            <h4 className="font-black text-white mb-4">تفاوت با VPN</h4>
            <p className="text-slate-400">
              وی‌پی‌ان‌ها فقط لایه نرم‌افزاری هستند و در صورت قطع شدن زیرساخت اینترنت محلی، از کار می‌افتند. PANBEH یک "اتصال مستقل" است که حتی در شرایط اختلال شدید اینترنت نیز عملکرد خود را حفظ می‌کند.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
