import React from 'react';
import { OFFERS_DATA } from '../../data/offers';
import { calculateDatasetStats } from '../../utils/stats';
import { OfferGrid } from '../OfferGrid';
import { Disclaimer } from '../Disclaimer';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Code2,
  Compass,
  Layers,
  GraduationCap,
  ExternalLink,
} from 'lucide-react';
import { AppView } from '../Navbar';

interface HomeViewProps {
  onNavigate: (view: AppView, offerId?: string) => void;
  onSelectOffer: (offerId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectOffer,
}) => {
  const stats = calculateDatasetStats();
  const topOffers = OFFERS_DATA.filter((o) => o.worthClaimingFirst).slice(0, 6);

  return (
    <div className="space-y-12 pb-12">
      {/* Top Disclaimer */}
      <Disclaimer />

      {/* Hero Section */}
      <section className="relative rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-b from-sky-50/70 via-white to-white dark:from-sky-950/20 dark:via-slate-900 dark:to-slate-900 p-6 sm:p-12 shadow-xs text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100/80 dark:bg-sky-900/40 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800/40">
          <Sparkles className="w-3.5 h-3.5 text-sky-500" />
          <span>The Unofficial Student Developer Pack Guide</span>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
          Everything You Can Get With Your{' '}
          <span className="text-sky-600 dark:text-sky-400">Student Developer Pack</span>
        </h1>

        <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Demystifying every offer in the GitHub Student Developer Pack: what each tool actually does, what students can build with it, how long it is free, and verified redemption steps.
        </p>

        {/* Primary CTA buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2">
          <button
            type="button"
            id="hero-explore-btn"
            onClick={() => onNavigate('explorer')}
            className="px-6 py-3 rounded-xl text-sm font-semibold bg-sky-500 hover:bg-sky-400 active:bg-sky-600 text-white shadow-xs transition-all flex items-center justify-center gap-2 min-h-[44px]"
          >
            <span>Explore All {stats.totalOffers} Offers</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            id="hero-stack-builder-btn"
            onClick={() => onNavigate('stack-builder')}
            className="px-6 py-3 rounded-xl text-sm font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-all flex items-center justify-center gap-2 min-h-[44px]"
          >
            <Layers className="w-4 h-4 text-sky-500" />
            <span>Build Your Stack</span>
          </button>
        </div>

        {/* Real-data stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-slate-200/60 dark:border-slate-800/80 text-left">
          <div className="space-y-0.5">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Verified Partner Tools
            </span>
            <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              {stats.totalOffers}
            </p>
          </div>
          <div className="space-y-0.5">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Software Categories
            </span>
            <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              {stats.totalCategories}
            </p>
          </div>
          <div className="space-y-0.5">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              No Card Required
            </span>
            <p className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
              {stats.noCreditCardRequiredCount}
            </p>
          </div>
          <div className="space-y-0.5">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Curated Roadmaps
            </span>
            <p className="text-xl sm:text-2xl font-black text-sky-600 dark:text-sky-400">
              9 Tracks
            </p>
          </div>
        </div>
      </section>

      {/* Feature Blocks: Quick Shortcuts */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        <div
          onClick={() => onNavigate('best-first')}
          className="p-5 sm:p-6 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-sky-400 dark:hover:border-sky-600 transition-all cursor-pointer group shadow-2xs space-y-2"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-sky-600 transition-colors flex items-center justify-between">
            <span>Start Here (Top Offers)</span>
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            The fundamental tools you should claim right away without burning down limited trial clocks.
          </p>
        </div>

        <div
          onClick={() => onNavigate('stack-builder')}
          className="p-5 sm:p-6 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-sky-400 dark:hover:border-sky-600 transition-all cursor-pointer group shadow-2xs space-y-2"
        >
          <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 flex items-center justify-center">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-sky-600 transition-colors flex items-center justify-between">
            <span>Build Your Tech Stack</span>
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Visual architectural recipes for SaaS apps, AI agents, mobile apps, portfolios, and databases.
          </p>
        </div>

        <div
          onClick={() => onNavigate('learning-paths')}
          className="p-5 sm:p-6 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-sky-400 dark:hover:border-sky-600 transition-all cursor-pointer group shadow-2xs space-y-2"
        >
          <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-sky-600 transition-colors flex items-center justify-between">
            <span>Career Learning Paths</span>
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Curated roadmaps for Frontend, Backend, AI/ML, DevOps, and Data Science students.
          </p>
        </div>
      </section>

      {/* Start Here / Worth Claiming First section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span>Recommended to Claim First</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              High-value tools that last the entire duration of your student enrollment.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('best-first')}
            className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1 self-start sm:self-auto"
          >
            <span>View all recommended first claims</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <OfferGrid
          offers={topOffers}
          onSelectOffer={onSelectOffer}
        />
      </section>

      {/* Strategy Tip: How not to waste your pack */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-5 sm:p-8 space-y-4">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-sky-600" />
          <span>The Student Pack Strategy: How Not to Waste It</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          <div className="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 space-y-1.5">
            <span className="font-bold text-slate-900 dark:text-slate-100 block">
              1. Claim "Duration of Study" offers immediately
            </span>
            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
              GitHub Pro, JetBrains, Clerk, and MongoDB renew as long as you are enrolled. Activate them on day one.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 space-y-1.5">
            <span className="font-bold text-slate-900 dark:text-slate-100 block">
              2. Save learning courses for holidays & breaks
            </span>
            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
              Frontend Masters, Scrimba, and DataCamp timers begin immediately upon redemption. Only claim when you have free time to study.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 space-y-1.5">
            <span className="font-bold text-slate-900 dark:text-slate-100 block">
              3. Set billing alerts on cloud platforms
            </span>
            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
              If using DigitalOcean or Heroku credits, configure $1.00 budget alerts and destroy unused servers to prevent charges after credits expire.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
