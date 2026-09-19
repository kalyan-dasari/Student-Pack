import React from 'react';
import { OfferCard } from './OfferCard';
import { StudentPackOffer } from '../types';
import { SearchX, Sparkles } from 'lucide-react';

interface OfferGridProps {
  offers: StudentPackOffer[];
  onSelectOffer: (offerId: string) => void;
  onResetFilters?: () => void;
}

export const OfferGrid: React.FC<OfferGridProps> = ({
  offers,
  onSelectOffer,
  onResetFilters,
}) => {
  if (offers.length === 0) {
    return (
      <div
        id="offer-grid-empty-state"
        className="text-center py-16 px-4 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-white/40 dark:bg-slate-900/30 my-6"
      >
        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
          <SearchX className="w-6 h-6" />
        </div>
        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-1">
          No matching offers found
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-5">
          Try clearing your search query or selecting a different category filter to see available student benefits.
        </p>
        {onResetFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-emerald-500 text-white hover:bg-emerald-400 active:bg-emerald-600 shadow-xs transition-colors min-h-[40px]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Reset all filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div
      id="offers-grid-container"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
    >
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onSelectOffer={onSelectOffer}
        />
      ))}
    </div>
  );
};
