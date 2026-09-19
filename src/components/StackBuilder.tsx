import React, { useState } from 'react';
import { TECH_STACKS } from '../data/stacks';
import { OFFERS_DATA } from '../data/offers';
import { ArrowDown, ExternalLink, Layers, Sparkles, CheckCircle2 } from 'lucide-react';

interface StackBuilderProps {
  onSelectOffer: (offerId: string) => void;
}

export const StackBuilder: React.FC<StackBuilderProps> = ({ onSelectOffer }) => {
  const [selectedStackId, setSelectedStackId] = useState<string>('saas');

  const activeStack = TECH_STACKS.find((s) => s.id === selectedStackId) || TECH_STACKS[0];

  return (
    <div id="stack-builder-component" className="space-y-8">
      {/* Category selector pills */}
      <div className="space-y-3">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
          Select what you want to build:
        </label>
        <div className="flex flex-wrap items-center gap-2">
          {TECH_STACKS.map((stack) => {
            const isSelected = stack.id === activeStack.id;
            return (
              <button
                key={stack.id}
                type="button"
                id={`stack-select-btn-${stack.id}`}
                onClick={() => setSelectedStackId(stack.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all min-h-[38px] ${
                  isSelected
                    ? 'bg-sky-500 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-sky-300 dark:hover:border-sky-700'
                }`}
              >
                {stack.name.replace('Build ', '')}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Stack Overview Card */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-900/40">
              {activeStack.category} Architecture
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-2">
              {activeStack.name}
            </h2>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {activeStack.offers.length} integrated Student Pack tools
          </span>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
          {activeStack.description}
        </p>
      </div>

      {/* Visual Flow Architecture */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-100">
          <Layers className="w-4 h-4 text-sky-600" />
          <h3>Recommended Architecture Pipeline</h3>
        </div>

        <div className="space-y-3 max-w-2xl mx-auto">
          {activeStack.offers.map((item, index) => {
            const offer = OFFERS_DATA.find((o) => o.id === item.offerId);
            const isLast = index === activeStack.offers.length - 1;

            return (
              <React.Fragment key={index}>
                <div
                  id={`stack-step-${item.role.toLowerCase().replace(/\s+/g, '-')}`}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-2xs hover:border-sky-400 dark:hover:border-sky-600 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 group"
                >
                  <div className="space-y-1 min-w-0 flex-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 block">
                      {item.role}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-slate-900 dark:text-slate-100">
                        {offer ? offer.name : item.offerId}
                      </span>
                      {offer?.duration && (
                        <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
                          • {offer.duration}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-snug">
                      {item.notes}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-stretch sm:self-center w-full sm:w-auto">
                    {offer && (
                      <button
                        type="button"
                        onClick={() => onSelectOffer(offer.id)}
                        className="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-center min-h-[38px]"
                      >
                        Details
                      </button>
                    )}
                    {offer && (
                      <a
                        href={offer.githubOfferUrl || offer.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-sky-500 hover:bg-sky-400 active:bg-sky-600 inline-flex items-center justify-center gap-1 transition-colors min-h-[38px]"
                      >
                        Claim <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                {!isLast && (
                  <div className="flex justify-center my-0.5">
                    <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 shadow-2xs">
                      <ArrowDown className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};
