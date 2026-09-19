import React, { useState } from 'react';
import { LEARNING_PATHS } from '../data/learningPaths';
import { OFFERS_DATA } from '../data/offers';
import { ExternalLink, Compass, ArrowRight, GraduationCap } from 'lucide-react';

interface LearningPathProps {
  onSelectOffer: (offerId: string) => void;
}

export const LearningPath: React.FC<LearningPathProps> = ({ onSelectOffer }) => {
  const [selectedPathId, setSelectedPathId] = useState<string>('fullstack');

  const activePath =
    LEARNING_PATHS.find((p) => p.id === selectedPathId) || LEARNING_PATHS[0];

  return (
    <div id="learning-paths-container" className="space-y-8">
      {/* Path selector tabs */}
      <div className="space-y-3">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
          Select Your Career or Development Goal:
        </label>
        <div className="flex flex-wrap items-center gap-2">
          {LEARNING_PATHS.map((path) => {
            const isSelected = path.id === activePath.id;
            return (
              <button
                key={path.id}
                type="button"
                id={`path-tab-${path.id}`}
                onClick={() => setSelectedPathId(path.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all min-h-[38px] ${
                  isSelected
                    ? 'bg-sky-500 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-sky-300 dark:hover:border-sky-700/60'
                }`}
              >
                {path.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Path Header */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-xs space-y-2">
        <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 text-xs font-bold uppercase tracking-wider">
          <GraduationCap className="w-4 h-4" />
          <span>Curated Curriculum Roadmap</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
          {activePath.title} Track
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
          {activePath.roleDescription}
        </p>
      </div>

      {/* Step by Step Timeline */}
      <div className="space-y-4 max-w-3xl">
        {activePath.recommendedOffers.map((item, index) => {
          const offer = OFFERS_DATA.find((o) => o.id === item.offerId);

          return (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-2xs hover:border-sky-400 dark:hover:border-sky-600 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="space-y-1.5 flex-1 min-w-0">
                <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block">
                  {item.step}
                </span>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                    {offer ? offer.name : item.offerId}
                  </h3>
                  {offer && (
                    <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
                      ({offer.category})
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.why}
                </p>
                {offer?.benefit && (
                  <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    Pack benefit: {offer.benefit}
                  </p>
                )}
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
          );
        })}
      </div>
    </div>
  );
};
