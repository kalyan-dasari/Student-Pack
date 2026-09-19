import React, { useState } from 'react';
import {
  GraduationCap,
  Layers,
  Sparkles,
  GitCompare,
  Compass,
  Clock,
  HelpCircle,
  Github,
  Sun,
  Moon,
  Menu,
  X,
  Search,
} from 'lucide-react';

export type AppView =
  | 'home'
  | 'explorer'
  | 'offer-detail'
  | 'best-first'
  | 'stack-builder'
  | 'compare'
  | 'learning-paths'
  | 'expiring'
  | 'faq'
  | 'open-source';

interface NavbarProps {
  currentView: AppView;
  onNavigate: (view: AppView, offerId?: string) => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  isDarkMode,
  onToggleTheme,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: { view: AppView; label: string; icon: React.ReactNode }[] = [
    { view: 'explorer', label: 'All Offers', icon: <Search className="w-4 h-4" /> },
    { view: 'best-first', label: 'Start Here', icon: <Sparkles className="w-4 h-4" /> },
    { view: 'stack-builder', label: 'Stack Builder', icon: <Layers className="w-4 h-4" /> },
    { view: 'compare', label: 'Compare', icon: <GitCompare className="w-4 h-4" /> },
    { view: 'learning-paths', label: 'Roadmaps', icon: <Compass className="w-4 h-4" /> },
    { view: 'expiring', label: 'Time-Sensitive', icon: <Clock className="w-4 h-4" /> },
    { view: 'faq', label: 'FAQ', icon: <HelpCircle className="w-4 h-4" /> },
    { view: 'open-source', label: 'Open Source', icon: <Github className="w-4 h-4" /> },
  ];

  const handleNavClick = (view: AppView) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        id="main-header"
        className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-[#0d1117]/95 backdrop-blur-md transition-colors"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-3">
            {/* Logo Brand */}
            <div
              onClick={() => handleNavClick('home')}
              id="brand-logo-btn"
              className="flex items-center gap-2.5 cursor-pointer select-none shrink-0 group py-1"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-cyan-400 text-white flex items-center justify-center shadow-xs group-hover:from-sky-400 group-hover:to-cyan-300 transition-all">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  Student Pack
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200/80 dark:border-sky-800/60">
                    Guide
                  </span>
                </span>
                <span className="hidden sm:block text-[11px] text-slate-400 font-medium leading-none">
                  Unofficial GitHub Pack Catalog
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive =
                  currentView === link.view ||
                  (link.view === 'explorer' && currentView === 'offer-detail');

                return (
                  <button
                    key={link.view}
                    type="button"
                    id={`nav-link-${link.view}`}
                    onClick={() => handleNavClick(link.view)}
                    className={`relative px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 border border-sky-200/70 dark:border-sky-800/50'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/50 border border-transparent'
                    }`}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Right Actions: Dark mode toggle & mobile hamburger */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                id="theme-toggle-btn"
                onClick={onToggleTheme}
                className="p-2.5 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
              </button>

              {/* Mobile menu trigger button */}
              <button
                type="button"
                id="mobile-menu-trigger"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5 text-sky-500" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer with backdrop */}
        {isMobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 top-16 bg-slate-900/40 backdrop-blur-xs z-30 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div
              id="mobile-nav-drawer"
              className="relative z-40 lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d1117] px-4 pt-3 pb-6 space-y-1.5 shadow-xl max-h-[calc(100vh-4.5rem)] overflow-y-auto custom-scrollbar animate-in slide-in-from-top-2 duration-150"
            >
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
                Navigation
              </div>
              {navLinks.map((link) => {
                const isActive = currentView === link.view;
                return (
                  <button
                    key={link.view}
                    type="button"
                    onClick={() => handleNavClick(link.view)}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition-colors min-h-[44px] ${
                      isActive
                        ? 'bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 font-semibold border border-sky-200/80 dark:border-sky-800/60'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={isActive ? 'text-sky-500' : 'text-slate-400'}>{link.icon}</span>
                      <span>{link.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </>
        )}
      </header>

      {/* Mobile Quick-Action Bottom Bar for easy one-hand thumb navigation */}
      <nav
        id="mobile-bottom-nav"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 dark:bg-[#0d1117]/95 backdrop-blur-md border-t border-slate-200/90 dark:border-slate-800 px-2 py-1.5 shadow-lg flex items-center justify-around"
      >
        <button
          type="button"
          onClick={() => handleNavClick('explorer')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl text-[11px] font-medium min-w-[56px] min-h-[44px] transition-colors ${
            currentView === 'explorer' || currentView === 'offer-detail'
              ? 'text-sky-600 dark:text-sky-400 font-semibold'
              : 'text-slate-500 dark:text-slate-400'
          }`}
        >
          <Search className="w-5 h-5 mb-0.5" />
          <span>Offers</span>
        </button>

        <button
          type="button"
          onClick={() => handleNavClick('best-first')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl text-[11px] font-medium min-w-[56px] min-h-[44px] transition-colors ${
            currentView === 'best-first'
              ? 'text-sky-600 dark:text-sky-400 font-semibold'
              : 'text-slate-500 dark:text-slate-400'
          }`}
        >
          <Sparkles className="w-5 h-5 mb-0.5" />
          <span>Start Here</span>
        </button>

        <button
          type="button"
          onClick={() => handleNavClick('stack-builder')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl text-[11px] font-medium min-w-[56px] min-h-[44px] transition-colors ${
            currentView === 'stack-builder'
              ? 'text-sky-600 dark:text-sky-400 font-semibold'
              : 'text-slate-500 dark:text-slate-400'
          }`}
        >
          <Layers className="w-5 h-5 mb-0.5" />
          <span>Stacks</span>
        </button>

        <button
          type="button"
          onClick={() => handleNavClick('learning-paths')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl text-[11px] font-medium min-w-[56px] min-h-[44px] transition-colors ${
            currentView === 'learning-paths'
              ? 'text-sky-600 dark:text-sky-400 font-semibold'
              : 'text-slate-500 dark:text-slate-400'
          }`}
        >
          <Compass className="w-5 h-5 mb-0.5" />
          <span>Roadmaps</span>
        </button>

        <button
          type="button"
          onClick={() => handleNavClick('checklist')}
          className={`relative flex flex-col items-center justify-center py-1 px-2 rounded-xl text-[11px] font-medium min-w-[56px] min-h-[44px] transition-colors ${
            currentView === 'checklist'
              ? 'text-sky-600 dark:text-sky-400 font-semibold'
              : 'text-slate-500 dark:text-slate-400'
          }`}
        >
          <CheckSquare className="w-5 h-5 mb-0.5" />
          <span>Saved</span>
          {checklistCount > 0 && (
            <span className="absolute top-1 right-2.5 w-4 h-4 rounded-full bg-sky-500 text-white font-mono text-[9px] flex items-center justify-center font-bold">
              {checklistCount}
            </span>
          )}
        </button>
      </nav>
    </>
  );
};
