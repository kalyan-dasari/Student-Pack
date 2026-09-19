import React from 'react';
import { GraduationCap, ExternalLink, Github, Heart } from 'lucide-react';
import { AppView } from './Navbar';

interface FooterProps {
  onNavigate: (view: AppView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer
      id="main-footer"
      className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-[#090d13] text-slate-600 dark:text-slate-400 mt-20 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-extrabold text-base">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-sky-500 to-cyan-400 text-white flex items-center justify-center shadow-xs">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span>Student Pack</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
              An unofficial, community-maintained developer guide to the GitHub Student Developer Pack. We explain what every partner tool actually does, what students can build with it, and verified redemption steps.
            </p>
            <div className="pt-2 text-xs text-slate-400 flex items-center gap-1">
              <span>Maintained with</span>
              <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
              <span>for student developers globally</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
              Guide Exploration
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('explorer')}
                  className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  All Verified Offers
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('best-first')}
                  className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  Best Offers to Claim First
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('stack-builder')}
                  className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  Stack Builder Recipes
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('compare')}
                  className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  Side-by-Side Comparison
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('expiring')}
                  className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  Time-Sensitive Benefits
                </button>
              </li>
            </ul>
          </div>

          {/* Community & Legal */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
              Community & Verification
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('open-source')}
                  className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-1"
                >
                  <Github className="w-3 h-3" />
                  <span>Open Source & Contributing</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('faq')}
                  className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <a
                  href="https://education.github.com/pack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors inline-flex items-center gap-1"
                >
                  Official GitHub Education <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Prominent Legal Disclaimer Banner */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400 space-y-1">
          <p>
            <strong>Disclaimer:</strong> This website is an independent community resource and is{' '}
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              NOT affiliated with, endorsed by, sponsored by, or operated by GitHub, Inc. or Microsoft Corporation
            </span>
            . GitHub, GitHub Student Developer Pack, and related trademarks belong to GitHub, Inc. Partner offers, benefits, trial limits, and redemption requirements are subject to change at the sole discretion of each respective partner company. Always verify current terms on the official partner and GitHub Education portals.
          </p>
        </div>
      </div>
    </footer>
  );
};
