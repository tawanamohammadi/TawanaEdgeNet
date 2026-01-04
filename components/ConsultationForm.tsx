
import React, { useState, useEffect } from 'react';
import { FormStep, FormData, IRAN_PROVINCES } from '../types';

const INITIAL_STATE: FormData = {
  identity: { fullName: '', phoneNumber: '', province: 'تهران', city: '', areaDetail: '', telegramHandle: '' },
  usage: { home: false, freelance: false, trading: false, server: false, streaming: false, enterprise: false },
  currentStatus: { operator: '', downloadSpeed: '', ping: '', mainIssue: 'filtering' },
  installation: { buildingType: 'apartment', unitFloor: '', totalFloors: '', roofAccess: 'easy', outdoorSpace: 'roof', powerOnRoof: 'no', cableEstimate: '20_50m' },
  expectations: { minSpeed: '100', stabilityImportance: 'high', staticIpNeeded: 'consult' },
  scheduling: { preferredDays: [], timeSlot: '', description: '' },
  confirmed: false
};

export const ConsultationForm: React.FC = () => {
  const [step, setStep] = useState<FormStep>(FormStep.Identity);
  const [formData, setFormData] = useState<FormData>(INITIAL_STATE);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const t = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(t);
  }, [step]);

  const updateFormData = (section: keyof FormData, fields: any) => {
    setFormData(prev => ({ ...prev, [section]: { ...prev[section], ...fields } }));
  };

  const next = () => setStep(prev => prev + 1);
  const prev = () => setStep(prev => prev - 1);

  const renderStep = () => {
    switch (step) {
      case FormStep.Identity:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-white">اطلاعات اولیه و محل نصب</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 mr-2">نام و نام خانوادگی</label>
                <input 
                  className="w-full input-standard rounded-2xl px-5 py-4 text-white font-bold text-sm outline-none"
                  value={formData.identity.fullName}
                  onChange={e => updateFormData('identity', { fullName: e.target.value })}
                  placeholder="مثال: علی محمدی"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 mr-2">شماره موبایل (جهت هماهنگی)</label>
                <input 
                  className="w-full input-standard rounded-2xl px-5 py-4 text-white font-bold text-sm outline-none text-left"
                  dir="ltr"
                  value={formData.identity.phoneNumber}
                  onChange={e => updateFormData('identity', { phoneNumber: e.target.value })}
                  placeholder="09123456789"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 mr-2">استان</label>
                <select 
                  className="w-full input-standard rounded-2xl px-5 py-4 text-white font-bold text-sm outline-none appearance-none"
                  value={formData.identity.province}
                  onChange={e => updateFormData('identity', { province: e.target.value })}
                >
                  {IRAN_PROVINCES.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 mr-2">شهر و محله</label>
                <input 
                  className="w-full input-standard rounded-2xl px-5 py-4 text-white font-bold text-sm outline-none"
                  value={formData.identity.city}
                  onChange={e => updateFormData('identity', { city: e.target.value })}
                  placeholder="مثال: تهران، سعادت‌آباد"
                />
              </div>
            </div>
          </div>
        );

      case FormStep.TechnicalUsage:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-white text-center">اینترنت را برای چه مصرفی نیاز دارید؟</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {k: 'home', l: 'خانگی و فیلم', i: '🎬'},
                {k: 'freelance', l: 'دورکاری فنی', i: '⌨️'},
                {k: 'trading', l: 'ترید و صرافی', i: '💹'},
                {k: 'server', l: 'دانلود/آپلود سنگین', i: '📥'},
                {k: 'streaming', l: 'استریم/گیمینگ', i: '🎮'},
                {k: 'enterprise', l: 'شرکتی و اداری', i: '🏢'},
              ].map(item => (
                <button
                  key={item.k}
                  onClick={() => updateFormData('usage', { [item.k]: !formData.usage[item.k as keyof typeof formData.usage] })}
                  className={`p-6 rounded-3xl border-2 flex flex-col items-center gap-3 transition-all ${
                    formData.usage[item.k as keyof typeof formData.usage] ? 'bg-cyan-500/10 border-cyan-500' : 'bg-slate-900 border-slate-800'
                  }`}
                >
                  <span className="text-3xl">{item.i}</span>
                  <span className="text-xs font-black">{item.l}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case FormStep.PhysicalFeasibility:
        return (
          <div className="space-y-8">
            <h3 className="text-xl font-black text-white">اطلاعات فنی محل نصب</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-sm font-bold text-slate-400">نوع ساختمان:</p>
                <div className="grid grid-cols-3 gap-2">
                  {['apartment', 'villa', 'office'].map(type => (
                    <button
                      key={type}
                      onClick={() => updateFormData('installation', { buildingType: type })}
                      className={`py-3 rounded-xl text-xs font-bold transition-all ${
                        formData.installation.buildingType === type ? 'bg-white text-black' : 'bg-slate-900 text-slate-500 border border-slate-800'
                      }`}
                    >
                      {type === 'apartment' ? 'آپارتمان' : type === 'villa' ? 'ویلایی' : 'اداری'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-bold text-slate-400">دسترسی به پشت‌بام:</p>
                <div className="grid grid-cols-3 gap-2">
                  {['easy', 'needs_key', 'impossible'].map(acc => (
                    <button
                      key={acc}
                      onClick={() => updateFormData('installation', { roofAccess: acc })}
                      className={`py-3 rounded-xl text-xs font-bold transition-all ${
                        formData.installation.roofAccess === acc ? 'bg-cyan-600 text-white' : 'bg-slate-900 text-slate-500 border border-slate-800'
                      }`}
                    >
                      {acc === 'easy' ? 'آزاد' : acc === 'needs_key' ? 'کلید دارد' : 'ناممکن'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="p-5 bg-blue-500/5 rounded-2xl border border-blue-500/10 flex gap-4 items-start">
              <div className="text-blue-500 text-xl font-bold">!</div>
              <p className="text-xs text-blue-300/80 leading-relaxed">
                نکته: تجهیزات ما از نوع Outdoor هستند و باید در بالاترین نقطه ساختمان نصب شوند تا بهترین پهنای باند را از دکل‌های دوردست دریافت کنند.
              </p>
            </div>
          </div>
        );

      case FormStep.Review:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-white text-center">تأیید اطلاعات نهایی</h3>
            <div className="bg-slate-900/50 rounded-3xl p-6 border border-slate-800 space-y-4">
              <div className="flex justify-between items-center text-sm border-b border-slate-800 pb-3">
                <span className="text-slate-500 font-bold">نام متقاضی:</span>
                <span className="text-white font-black">{formData.identity.fullName}</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-slate-800 pb-3">
                <span className="text-slate-500 font-bold">موقعیت:</span>
                <span className="text-white font-black">{formData.identity.city}</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-slate-800 pb-3">
                <span className="text-slate-500 font-bold">تلفن تماس:</span>
                <span className="text-white font-black" dir="ltr">{formData.identity.phoneNumber}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 font-bold">نوع کاربری:</span>
                <span className="text-cyan-400 font-black">حرفه‌ای / اختصاصی</span>
              </div>
            </div>
            <p className="text-[10px] text-slate-500 text-center font-bold">با ثبت این فرم، کارشناس فنی توانا نتورک در کمتر از ۲ ساعت جهت تعیین وقت بازدید با شما تماس می‌گیرد.</p>
          </div>
        );

      case FormStep.Success:
        return (
          <div className="text-center py-10 space-y-6">
            <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">✓</div>
            <h2 className="text-2xl font-black text-white">درخواست شما ثبت شد</h2>
            <p className="text-slate-400 text-sm max-w-xs mx-auto">اطلاعات شما در نوبت کارشناسی قرار گرفت. همکاران ما به زودی با شما تماس می‌گیرند.</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-white text-slate-900 rounded-xl font-black text-sm"
            >
              بازگشت به صفحه اصلی
            </button>
          </div>
        );

      default: return null;
    }
  };

  if (step === FormStep.Success) return <div className="glass-card rounded-[2.5rem] p-10 max-w-lg mx-auto">{renderStep content()}</div>;

  return (
    <div className="glass-card rounded-[2.5rem] p-8 md:p-12 max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="flex gap-2 mb-10 h-1">
        {[0, 1, 3, 6].map((s, i) => (
          <div key={i} className={`flex-grow rounded-full transition-all duration-500 ${step >= s ? 'bg-cyan-500 shadow-[0_0_10px_rgba(14,165,233,0.5)]' : 'bg-slate-800'}`} />
        ))}
      </div>

      <div className={`min-h-[300px] ${isAnimating ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}>
        {renderStep()}
      </div>

      <div className="mt-12 flex justify-between items-center">
        <button 
          onClick={prev}
          disabled={step === FormStep.Identity}
          className={`text-slate-500 font-black text-xs hover:text-white uppercase tracking-widest ${step === FormStep.Identity ? 'invisible' : ''}`}
        >
          مرحله قبل
        </button>
        <button 
          onClick={() => step === FormStep.Review ? setStep(FormStep.Success) : next()}
          className="bg-cyan-600 hover:bg-cyan-500 text-white px-10 py-4 rounded-2xl font-black text-sm transition-all shadow-lg shadow-cyan-900/20 active:scale-95"
        >
          {step === FormStep.Review ? 'تأیید و ثبت نهایی' : 'ادامه فرآیند'}
        </button>
      </div>
    </div>
  );
};
