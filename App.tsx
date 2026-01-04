
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { HowItWorks } from './components/HowItWorks';
import { Technical } from './components/Technical';
import { Pricing } from './components/Pricing';
import { Comparison } from './components/Comparison';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { ConsultationForm } from './components/ConsultationForm';
import { Footer } from './components/Footer';
import { QuickConsultSection } from './components/QuickConsultSection';

export type ViewState = 'home' | 'about' | 'process' | 'tech' | 'pricing' | 'comparison' | 'booking' | 'faq' | 'contact';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');

  const renderContent = () => {
    switch (view) {
      case 'home':
        return (
          <>
            <Hero onStart={() => setView('booking')} />
            <About compact onLearnMore={() => setView('about')} />
            <QuickConsultSection onStartFullForm={() => setView('booking')} />
          </>
        );
      case 'about':
        return <About />;
      case 'process':
        return <HowItWorks />;
      case 'tech':
        return <Technical />;
      case 'pricing':
        return <Pricing onBook={() => setView('booking')} />;
      case 'comparison':
        return <Comparison />;
      case 'booking':
        return (
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <ConsultationForm />
            </div>
          </div>
        );
      case 'faq':
        return <FAQ />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onStart={() => setView('booking')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100">
      <Header currentView={view} setView={setView} />
      
      <main className="flex-grow pt-10">
        {renderContent()}
      </main>

      <Footer setView={setView} />
    </div>
  );
};

export default App;
