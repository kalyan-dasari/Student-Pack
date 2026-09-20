import React from 'react';
import { ExternalLink, ArrowRight, ShieldCheck, CreditCard, Clock, Sparkles } from 'lucide-react';
import { StudentPackOffer } from '../types';

interface OfferCardProps {
  offer: StudentPackOffer;
  onSelectOffer: (offerId: string) => void;
}

export const OfferCard: React.FC<OfferCardProps> = ({
  offer,
  onSelectOffer,
}) => {
  return (
    <article
      id={`offer-card-${offer.id}`}
      className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 dark:border-slate-800/80 bg-white dark:bg-slate-900/80 p-5 shadow-xs hover:border-emerald-300 dark:hover:border-emerald-700/60 hover:shadow-md transition-all duration-200 relative overflow-hidden"
    >
      {/* Top badges bar */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/50">
            {offer.category}
          </span>
          <div className="flex items-center gap-1.5">
            {offer.worthClaimingFirst && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/40">
                <Sparkles className="w-3 h-3" /> Start Here
              </span>
            )}
            {offer.isTimeSensitive && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-800/40" title="Time sensitive benefit window">
                <Clock className="w-3 h-3" /> Limited Time
              </span>
            )}
          </div>
        </div>

        {/* Header: Identity */}
        <div className="flex items-start gap-3.5 mb-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white flex items-center justify-center font-bold text-base shadow-xs shrink-0 select-none">
            {offer.name.substring(0, 2).toUpperCase()}
          </div>
          <div className="min-w-0 flex-1">
            <h3
              onClick={() => onSelectOffer(offer.id)}
              className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 cursor-pointer transition-colors truncate"
            >
              {offer.name}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
              {offer.description}
            </p>
          </div>
        </div>

        {/* Benefit Highlight Box */}
        <div className="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800">
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
            Pack Benefit
          </div>
          <p className="text-xs sm:text-sm font-medium text-slate-900 dark:text-slate-200 leading-snug">
            {offer.benefit}
          </p>
        </div>

        {/* Recommendation Pill */}
        {offer.recommendedAudience && (
          <div className="text-xs text-slate-600 dark:text-slate-300 font-medium mb-3 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
            <span>{offer.recommendedAudience}</span>
          </div>
        )}

        {/* Metadata items */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400 pt-1 pb-3 border-t border-slate-100 dark:border-slate-800/60">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{offer.duration}</span>
          </span>
          {offer.requiresCreditCard ? (
            <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400" title="Partner requires payment method verification for anti-bot / verification">
              <CreditCard className="w-3.5 h-3.5" />
              <span>Card req. for verification</span>
            </span>
          ) : (
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400" title="No payment details required">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>No card required</span>
            </span>
          )}
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2">
        <button
          type="button"
          id={`btn-view-${offer.id}`}
          onClick={() => onSelectOffer(offer.id)}
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700/80 transition-colors min-h-[38px]"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <a
          id={`btn-claim-${offer.id}`}
          href={offer.githubOfferUrl || offer.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 transition-colors shadow-xs min-h-[38px]"
          title="Opens official GitHub Education or partner claim portal"
        >
          <span>Claim</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </article>
  );
};
