import React from 'react';
import { ShieldAlert, ExternalLink } from 'lucide-react';

interface DisclaimerProps {
  compact?: boolean;
  className?: string;
}

export const Disclaimer: React.FC<DisclaimerProps> = ({ compact = false, className = '' }) => {
  if (compact) {
    return (
      <div
        id="unofficial-disclaimer-compact"
        className={`flex items-center gap-2 p-3 rounded-xl border border-amber-200/80 dark:border-amber-900/50 bg-amber-50/60 dark:bg-amber-950/20 text-xs text-amber-800 dark:text-amber-300 ${className}`}
      >
        <ShieldAlert className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400" />
        <span>
          <strong>Unofficial Community Guide:</strong> Not affiliated with, endorsed by, or operated by GitHub. Terms and availability change; always verify on official portals before redeeming.
        </span>
      </div>
    );
  }

  return (
    <aside
      id="unofficial-disclaimer-banner"
      aria-label="Unofficial community guide disclaimer"
      className={`rounded-2xl border border-amber-200/80 dark:border-amber-900/40 bg-amber-50/80 dark:bg-amber-950/20 p-4 sm:p-5 text-sm text-amber-900 dark:text-amber-200 ${className}`}
    >
      <div className="flex items-start gap-3.5">
        <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 shrink-0 mt-0.5">
          <ShieldAlert className="w-5 h-5" />
        </div>
        <div className="space-y-1.5 flex-1">
          <h2 className="font-semibold text-amber-950 dark:text-amber-100 flex items-center gap-2 text-sm sm:text-base">
            Independent Community Educational Guide
          </h2>
          <p className="leading-relaxed text-xs sm:text-sm text-amber-800/90 dark:text-amber-300/90">
            <strong>Student Pack</strong> is an independent open-source educational knowledge base created to help students understand, compare, and effectively utilize developer tools. This project is <strong>NOT</strong> affiliated with, endorsed by, sponsored by, or operated by GitHub Inc. or Microsoft Corporation. GitHub and the GitHub logo are registered trademarks of GitHub, Inc.
          </p>
          <div className="pt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-amber-700 dark:text-amber-400">
            <span>• Verified against public partner documentation</span>
            <a
              href="https://education.github.com/pack"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 underline hover:text-amber-900 dark:hover:text-amber-200 font-medium"
            >
              Official GitHub Education Portal <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};
