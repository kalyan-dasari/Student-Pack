import React, { useState, useEffect } from 'react';
import { Navbar, AppView } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/views/HomeView';
import { ExplorerView } from './components/views/ExplorerView';
import { BestFirstView } from './components/views/BestFirstView';
import { ExpiringView } from './components/views/ExpiringView';
import { FAQView } from './components/views/FAQView';
import { OpenSourceView } from './components/views/OpenSourceView';
import { OfferDetail } from './components/OfferDetail';
import { StackBuilder } from './components/StackBuilder';
import { ComparisonTable } from './components/ComparisonTable';
import { LearningPath } from './components/LearningPath';
import { OFFERS_DATA } from './data/offers';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [selectedOfferId, setSelectedOfferId] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('studentpack_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Sync dark mode class with <html> element
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('studentpack_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('studentpack_theme', 'light');
    }
  }, [isDarkMode]);

  // Hash-based router listener for deep linking & browser back/forward
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (!hash) {
        setCurrentView('home');
        setSelectedOfferId(null);
        return;
      }

      if (hash.startsWith('offer/')) {
        const id = hash.replace('offer/', '');
        const exists = OFFERS_DATA.some((o) => o.id === id);
        if (exists) {
          setSelectedOfferId(id);
          setCurrentView('offer-detail');
        } else {
          setCurrentView('explorer');
        }
      } else if (
        [
          'home',
          'explorer',
          'best-first',
          'stack-builder',
          'compare',
          'learning-paths',
          'expiring',
          'faq',
          'open-source',
        ].includes(hash)
      ) {
        setCurrentView(hash as AppView);
        setSelectedOfferId(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (view: AppView, offerId?: string) => {
    setCurrentView(view);
    if (offerId) {
      setSelectedOfferId(offerId);
      window.location.hash = `offer/${offerId}`;
    } else {
      setSelectedOfferId(null);
      window.location.hash = view === 'home' ? '' : view;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectOffer = (offerId: string) => {
    setSelectedOfferId(offerId);
    setCurrentView('offer-detail');
    window.location.hash = `offer/${offerId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeOffer = selectedOfferId
    ? OFFERS_DATA.find((o) => o.id === selectedOfferId)
    : null;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#0d1117] text-slate-900 dark:text-slate-100 transition-colors font-sans antialiased selection:bg-sky-500 selection:text-white">
      {/* Top Main Navigation */}
      <Navbar
        currentView={currentView}
        onNavigate={navigate}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-24 sm:pb-12">
        {currentView === 'home' && (
          <HomeView
            onNavigate={navigate}
            onSelectOffer={handleSelectOffer}
          />
        )}

        {currentView === 'explorer' && (
          <ExplorerView
            onSelectOffer={handleSelectOffer}
          />
        )}

        {currentView === 'offer-detail' && activeOffer && (
          <OfferDetail
            offer={activeOffer}
            onBack={() => navigate('explorer')}
            onSelectRelatedOffer={handleSelectOffer}
          />
        )}

        {currentView === 'best-first' && (
          <BestFirstView
            onSelectOffer={handleSelectOffer}
          />
        )}

        {currentView === 'stack-builder' && (
          <div className="space-y-6 pb-12">
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
                Build Your Tech Stack
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Visual architectural recipes combining verified Student Pack tools into complete production pipelines.
              </p>
            </div>
            <StackBuilder onSelectOffer={handleSelectOffer} />
          </div>
        )}

        {currentView === 'compare' && (
          <div className="space-y-6 pb-12">
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
                Compare Developer Pack Offers
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Analyze features, duration, payment requirements, and limitations side-by-side.
              </p>
            </div>
            <ComparisonTable onSelectOffer={handleSelectOffer} />
          </div>
        )}

        {currentView === 'learning-paths' && (
          <div className="space-y-6 pb-12">
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
                Curated Career Learning Paths
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Step-by-step educational roadmaps powered by student pack courses, tools, and platforms.
              </p>
            </div>
            <LearningPath onSelectOffer={handleSelectOffer} />
          </div>
        )}

        {currentView === 'expiring' && (
          <ExpiringView onSelectOffer={handleSelectOffer} />
        )}

        {currentView === 'faq' && <FAQView />}

        {currentView === 'open-source' && <OpenSourceView />}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={navigate} />
    </div>
  );
}
