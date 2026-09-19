import React from 'react';
import { OFFERS_DATA } from '../../data/offers';
import { OfferCard } from '../OfferCard';
import { Disclaimer } from '../Disclaimer';
import { Sparkles, AlertTriangle, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

interface BestFirstViewProps {
  onSelectOffer: (offerId: string) => void;
}

export const BestFirstView: React.FC<BestFirstViewProps> = ({
  onSelectOffer,
}) => {
  const worthClaiming = OFFERS_DATA.filter((o) => o.worthClaimingFirst);
  const timeSensitive = OFFERS_DATA.filter((o) => o.isTimeSensitive);

  return (
    <div id="best-first-view" className="space-y-10 pb-12">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/40">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Strategic Claiming Roadmap</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          What to Claim First (And What to Save For Later)
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Many students make the mistake of clicking "Claim" on every single offer during their first week. But because several learning platforms and cloud trials start ticking down immediately, claiming blindly wastes valuable months of access.
        </p>
      </div>

      <Disclaimer compact={true} />

      {/* Strategic Golden Rules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl border border-emerald-200 dark:border-emerald-900/40 bg-emerald-50/40 dark:bg-emerald-950/20 space-y-3">
          <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-base">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <h2>Claim These Right Away</h2>
          </div>
          <p className="text-xs sm:text-sm text-emerald-900/90 dark:text-emerald-200/90 leading-relaxed">
            These benefits remain active for your entire academic career or renew annually with proof of student status. There is zero downside to activating them immediately:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-emerald-950 dark:text-emerald-200 font-medium">
            <li className="flex items-center gap-2">
              <span className="text-emerald-500">•</span>
              <span><strong>GitHub Pro:</strong> Unlimited private repos, 3,000 CI minutes, GitHub Pages.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-500">•</span>
              <span><strong>JetBrains IDEs:</strong> All Ultimate IDEs free throughout your degree.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-500">•</span>
              <span><strong>MongoDB Atlas:</strong> $500 cloud database credits to power side projects.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-500">•</span>
              <span><strong>Clerk Authentication:</strong> Production-ready auth with 10k monthly active users.</span>
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl border border-amber-200 dark:border-amber-900/40 bg-amber-50/40 dark:bg-amber-950/20 space-y-3">
          <div className="flex items-center gap-2 text-amber-900 dark:text-amber-200 font-bold text-base">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            <h2>Wait Until You Actually Need Them</h2>
          </div>
          <p className="text-xs sm:text-sm text-amber-900/90 dark:text-amber-300/90 leading-relaxed">
            These benefits have short expiration windows (1 to 6 months) that begin the instant you redeem your code or voucher:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-amber-950 dark:text-amber-200 font-medium">
            <li className="flex items-center gap-2">
              <span className="text-amber-500">•</span>
              <span><strong>Frontend Masters (6 Months):</strong> Wait for summer break or a semester gap.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-500">•</span>
              <span><strong>DataCamp (3 Months):</strong> Wait until your data science / ML course starts.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-500">•</span>
              <span><strong>DigitalOcean ($200 Credit):</strong> Wait until you have a real app ready to deploy.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-500">•</span>
              <span><strong>Free .TECH / Namecheap Domains (1 Year):</strong> Wait until your project is ready to launch.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Recommended First Claims Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <span>Priority 1: Zero-Risk "Duration of Study" Benefits</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {worthClaiming.map((offer) => (
            <OfferCard
              key={offer.id}
              offer={offer}
              onSelectOffer={onSelectOffer}
            />
          ))}
        </div>
      </div>

      {/* Time-Sensitive Offers Table */}
      <div className="space-y-4 pt-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Clock className="w-5 h-5 text-orange-500" />
          <span>Priority 2: Time-Sensitive Benefits (Claim on Demand)</span>
        </h2>
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-x-auto custom-scrollbar shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                <th className="p-3.5 font-bold text-slate-600 dark:text-slate-300">Tool</th>
                <th className="p-3.5 font-bold text-slate-600 dark:text-slate-300">Pack Benefit</th>
                <th className="p-3.5 font-bold text-slate-600 dark:text-slate-300">Clock Window</th>
                <th className="p-3.5 font-bold text-slate-600 dark:text-slate-300">Best Time to Claim</th>
                <th className="p-3.5 font-bold text-slate-600 dark:text-slate-300">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {timeSensitive.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                  <td className="p-3.5 font-bold text-slate-900 dark:text-slate-100">
                    {item.name}
                  </td>
                  <td className="p-3.5 text-slate-600 dark:text-slate-300">
                    {item.benefit}
                  </td>
                  <td className="p-3.5 text-orange-600 dark:text-orange-400 font-semibold">
                    {item.duration}
                  </td>
                  <td className="p-3.5 text-slate-500 dark:text-slate-400 text-xs">
                    {item.expirationNote || 'When your active project requires it'}
                  </td>
                  <td className="p-3.5">
                    <button
                      type="button"
                      onClick={() => onSelectOffer(item.id)}
                      className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline py-1"
                    >
                      View Guide
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
