import React from 'react';
import {
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  CreditCard,
  Layers,
  Sparkles,
  HelpCircle,
  Hammer,
  CheckCircle2,
  AlertTriangle,
  Link as LinkIcon,
  BookOpen,
} from 'lucide-react';
import { StudentPackOffer } from '../types';
import { ClaimButton } from './ClaimButton';
import { LastVerified } from './LastVerified';
import { SourceBadge } from './SourceBadge';
import { OFFERS_DATA } from '../data/offers';

interface OfferDetailProps {
  offer: StudentPackOffer;
  onBack: () => void;
  onSelectRelatedOffer: (offerId: string) => void;
}

export const OfferDetail: React.FC<OfferDetailProps> = ({
  offer,
  onBack,
  onSelectRelatedOffer,
}) => {
  // Find related offers data
  const relatedOffers = OFFERS_DATA.filter((o) =>
    offer.relatedOffers.includes(o.id)
  );

  return (
    <div id={`offer-detail-${offer.id}`} className="max-w-4xl mx-auto space-y-8 pb-16">
      {/* Navigation & breadcrumbs */}
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={onBack}
          id="btn-back-to-explorer"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all offers</span>
        </button>

        <div className="flex items-center gap-2">
          <LastVerified date={offer.lastVerified} status={offer.verificationStatus} />
        </div>
      </div>

      {/* 1. Overview Hero */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xs relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white flex items-center justify-center font-bold text-2xl shadow-sm shrink-0 select-none">
              {offer.name.substring(0, 2).toUpperCase()}
            </div>
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-900/60">
                  {offer.category}
                </span>
                {offer.recommendedAudience && (
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {offer.recommendedAudience}
                  </span>
                )}
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                {offer.name}
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                {offer.description}
              </p>
            </div>
          </div>

          <div className="w-full sm:w-auto shrink-0 sm:self-start">
            <ClaimButton offer={offer} size="lg" showRequirementsHint={true} />
          </div>
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/80">
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
              Pack Benefit Duration
            </span>
            <p className="text-xs font-semibold text-slate-900 dark:text-slate-100">
              {offer.duration}
            </p>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
              Payment Requirement
            </span>
            <p className="text-xs font-semibold flex items-center gap-1.5 text-slate-900 dark:text-slate-100">
              {offer.requiresCreditCard ? (
                <>
                  <CreditCard className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Card required for verification</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>No card or payment details needed</span>
                </>
              )}
            </p>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
              Eligibility
            </span>
            <p className="text-xs font-semibold text-slate-900 dark:text-slate-100">
              {offer.eligibility}
            </p>
          </div>
        </div>
      </section>

      {/* 2. What it actually does & 3. What the Pack gives you */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-3">
          <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-semibold text-sm">
            <HelpCircle className="w-4 h-4" />
            <h2>What is this company / tool?</h2>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {offer.whatItDoes}
          </p>
        </section>

        <section className="rounded-2xl border border-sky-200 dark:border-sky-900/50 bg-sky-50/40 dark:bg-sky-950/20 p-6 space-y-3">
          <div className="flex items-center gap-2 text-sky-800 dark:text-sky-300 font-semibold text-sm">
            <Sparkles className="w-4 h-4" />
            <h2>What the Student Pack gives you</h2>
          </div>
          <p className="text-sm text-slate-900 dark:text-slate-100 font-medium leading-relaxed">
            {offer.benefit}
          </p>
          <div className="text-xs text-sky-700 dark:text-sky-300/80 pt-1">
            <strong>Duration:</strong> {offer.duration}
          </div>
        </section>
      </div>

      {/* 4. Why students should care */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-3">
        <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-bold text-base">
          <BookOpen className="w-4 h-4 text-sky-600" />
          <h2>Why students should care</h2>
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {offer.whyStudentsShouldCare}
        </p>
      </section>

      {/* 5. What you can build & 6. Real student project examples */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4">
          <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-bold text-sm">
            <Hammer className="w-4 h-4 text-emerald-600" />
            <h2>What you can build with it</h2>
          </div>
          <ul className="space-y-2.5">
            {offer.whatYouCanBuild.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4">
          <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-bold text-sm">
            <Layers className="w-4 h-4 text-indigo-600" />
            <h2>Real student project examples</h2>
          </div>
          <ul className="space-y-2.5">
            {offer.exampleUseCases.map((useCase, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <span className="w-4 h-4 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{useCase}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* 7. How to claim it (numbered steps based only on verified official instructions) */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 space-y-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span>How to claim step-by-step</span>
          </h2>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Verified official redemption flow
          </span>
        </div>

        <ol className="space-y-3 pt-2">
          {offer.howToClaim.map((step, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
              <div className="w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                {idx + 1}
              </div>
              <p className="leading-relaxed flex-1 pt-0.5">{step}</p>
            </li>
          ))}
        </ol>

        <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Ready to redeem your student benefit?
          </span>
          <ClaimButton offer={offer} size="md" />
        </div>
      </section>

      {/* 8. Requirements & 9. Limitations / exclusions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-3">
          <h2 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-sky-500" />
            <span>Eligibility & Requirements</span>
          </h2>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            {offer.requirements.map((req, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-sky-500 shrink-0">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-amber-200 dark:border-amber-900/40 bg-amber-50/30 dark:bg-amber-950/10 p-6 space-y-3">
          <h2 className="text-sm font-bold text-amber-950 dark:text-amber-200 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>Limitations & Exclusions</span>
          </h2>
          <ul className="space-y-2 text-xs sm:text-sm text-amber-900/90 dark:text-amber-300/90">
            {offer.limitations.map((lim, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-amber-500 shrink-0">•</span>
                <span>{lim}</span>
              </li>
            ))}
            {offer.expirationNote && (
              <li className="flex items-start gap-2 font-medium text-amber-800 dark:text-amber-200">
                <span className="text-amber-500 shrink-0">•</span>
                <span>{offer.expirationNote}</span>
              </li>
            )}
          </ul>
        </section>
      </div>

      {/* 10. How it can be combined with other Pack offers */}
      {relatedOffers.length > 0 && (
        <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4">
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Layers className="w-4 h-4 text-sky-600" />
            <span>How to combine with other Pack offers</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Maximizing your developer value often means pairing complimentary services together:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {relatedOffers.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onSelectRelatedOffer(rel.id)}
                className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-sky-400 dark:hover:border-sky-600 cursor-pointer bg-slate-50/60 dark:bg-slate-800/40 transition-colors flex items-center justify-between gap-3 group"
              >
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-400">
                    {rel.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                    {rel.description}
                  </p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-500 shrink-0" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 11. Official links & 12. Last verified date */}
      <section className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
            <LinkIcon className="w-3.5 h-3.5" />
            <span>Official URLs:</span>
            <a
              href={offer.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 dark:text-sky-400 hover:underline inline-flex items-center gap-1"
            >
              {offer.name} Homepage <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
          <SourceBadge urls={offer.sourceUrls} />
        </div>

        <LastVerified date={offer.lastVerified} status={offer.verificationStatus} />
      </section>
    </div>
  );
};
