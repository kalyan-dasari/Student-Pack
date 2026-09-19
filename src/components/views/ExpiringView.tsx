import React from 'react';
import { OFFERS_DATA } from '../../data/offers';
import { Disclaimer } from '../Disclaimer';
import { Clock, AlertTriangle, ExternalLink, Calendar, Info, ShieldAlert } from 'lucide-react';

interface ExpiringViewProps {
  onSelectOffer: (offerId: string) => void;
}

export const ExpiringView: React.FC<ExpiringViewProps> = ({ onSelectOffer }) => {
  const timeSensitive = OFFERS_DATA.filter((o) => o.isTimeSensitive);

  return (
    <div id="expiring-view" className="space-y-8 pb-12">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-800/40">
          <Clock className="w-3.5 h-3.5" />
          <span>Clock Awareness</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          Time-Sensitive Benefits & Sunsetting Offers
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Not all Student Developer Pack offers last until graduation. This page monitors offers with strict countdown clocks, sunset dates, and fixed expiration policies.
        </p>
      </div>

      <Disclaimer compact={true} />

      {/* Special Notice: DigitalOcean Sunset Tracking */}
      <div className="rounded-2xl border border-rose-200 dark:border-rose-900/50 bg-rose-50/50 dark:bg-rose-950/20 p-6 sm:p-7 space-y-3">
        <div className="flex items-center gap-2 text-rose-800 dark:text-rose-300 font-bold text-base">
          <ShieldAlert className="w-5 h-5 text-rose-600" />
          <h2>High Priority Alert: DigitalOcean Student Pack Sunset</h2>
        </div>
        <p className="text-xs sm:text-sm text-rose-950/90 dark:text-rose-200/90 leading-relaxed">
          DigitalOcean officially announced changes to their GitHub Student Developer Pack partnership. Active credits granted under previous promotions remain valid until their individual expiration dates or May 2026, but the redemption window for new vouchers is sunsetting. If you have an unredeemed DigitalOcean student code, review your account dashboard immediately.
        </p>
        <div className="pt-1 flex items-center gap-4 text-xs font-semibold">
          <a
            href="https://www.digitalocean.com/github-students"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-700 dark:text-rose-300 hover:underline inline-flex items-center gap-1"
          >
            DigitalOcean Official Sunset Notice <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Grid of All Time-Sensitive Offers with Countdowns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {timeSensitive.map((offer) => (
          <div
            key={offer.id}
            id={`expiring-card-${offer.id}`}
            className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-800/40">
                  {offer.duration}
                </span>
                <span className="text-xs text-slate-400">{offer.category}</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                {offer.name}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {offer.benefit}
              </p>

              {offer.expirationNote && (
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/50 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                  <span className="font-semibold text-orange-600 dark:text-orange-400 block">
                    Important Timing Note:
                  </span>
                  <p>{offer.expirationNote}</p>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => onSelectOffer(offer.id)}
                className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline py-1.5"
              >
                Read Full Claim Guide →
              </button>
              <a
                href={offer.githubOfferUrl || offer.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 inline-flex items-center gap-1 min-h-[36px]"
              >
                <span>Check Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
