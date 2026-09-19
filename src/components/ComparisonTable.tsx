import React, { useState, useRef, useEffect } from 'react';
import { OFFERS_DATA } from '../data/offers';
import { StudentPackOffer } from '../types';
import { ExternalLink, X, Plus, ChevronDown, Search, ShieldCheck, CreditCard } from 'lucide-react';

interface ComparisonTableProps {
  initialOfferIds?: string[];
  onSelectOffer: (offerId: string) => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  initialOfferIds = ['digitalocean', 'heroku', 'appwrite'],
  onSelectOffer,
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>(initialOfferIds);
  const [openSlot, setOpenSlot] = useState<number | null>(null);
  const [dropdownSearch, setDropdownSearch] = useState<string>('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenSlot(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const comparedOffers = selectedIds
    .map((id) => OFFERS_DATA.find((o) => o.id === id))
    .filter((o): o is StudentPackOffer => Boolean(o));

  const toggleSlot = (slotIndex: number) => {
    setOpenSlot((current) => (current === slotIndex ? null : slotIndex));
    setDropdownSearch('');
  };

  const handleAddOffer = (offerId: string) => {
    if (selectedIds.length < 3 && !selectedIds.includes(offerId)) {
      setSelectedIds([...selectedIds, offerId]);
    }
    setOpenSlot(null);
    setDropdownSearch('');
  };

  const handleRemoveOffer = (offerId: string) => {
    setSelectedIds(selectedIds.filter((id) => id !== offerId));
  };

  const handleQuickPreset = (ids: string[]) => {
    setSelectedIds(ids);
  };

  return (
    <div id="comparison-tool" className="space-y-6">
      {/* Top selector and controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            Compare Up to 3 Offers
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Side-by-side comparison of verified benefits, durations, and limitations.
          </p>
        </div>

        {/* Quick presets */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          <span className="text-slate-400 font-medium">Quick compare:</span>
          <button
            type="button"
            onClick={() => handleQuickPreset(['digitalocean', 'heroku', 'appwrite'])}
            className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium"
          >
            Cloud Backends
          </button>
          <button
            type="button"
            onClick={() => handleQuickPreset(['frontend-masters', 'bootdev', 'datacamp'])}
            className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium"
          >
            Learning
          </button>
          <button
            type="button"
            onClick={() => handleQuickPreset(['browserstack', 'sentry', 'codecov'])}
            className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium"
          >
            Testing & QA
          </button>
        </div>
      </div>

      {/* Offer picker slot bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[0, 1, 2].map((slotIndex) => {
          const offer = comparedOffers[slotIndex];
          if (offer) {
            return (
              <div
                key={offer.id}
                className="p-3 rounded-xl border border-sky-200 dark:border-sky-900/60 bg-sky-50/50 dark:bg-sky-950/20 flex items-center justify-between gap-2"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-sky-500 text-white flex items-center justify-center font-bold text-xs shrink-0">
                    {offer.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">
                      {offer.name}
                    </h3>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block truncate">
                      {offer.category}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveOffer(offer.id)}
                  className="p-1 rounded-md text-slate-400 hover:text-rose-500 transition-colors"
                  title="Remove from comparison"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            );
          }

          return (
            <div
              key={`empty-${slotIndex}`}
              className="p-3 rounded-xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30"
            >
              <div
                className="relative"
                ref={openSlot === slotIndex ? dropdownRef : undefined}
              >
                <button
                  type="button"
                  onClick={() => toggleSlot(slotIndex)}
                  className={`w-full flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-semibold transition-colors min-h-[38px] ${
                    openSlot === slotIndex
                      ? 'bg-sky-500 text-white shadow-xs'
                      : 'bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 border border-sky-300/70 dark:border-sky-800/60 hover:border-sky-500 dark:hover:border-sky-600 shadow-2xs'
                  }`}
                >
                  <Plus className="w-3.5 h-3.5 shrink-0" />
                  <span>Add tool to compare</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                      openSlot === slotIndex ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openSlot === slotIndex && (
                  <div className="absolute z-20 mt-2 left-0 right-0 min-w-[230px] rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xl overflow-hidden">
                    <div className="flex items-center gap-2 px-3 py-2.5 border-b border-slate-100 dark:border-slate-800">
                      <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <input
                        type="text"
                        placeholder="Search tools..."
                        value={dropdownSearch}
                        onChange={(e) => setDropdownSearch(e.target.value)}
                        className="w-full text-xs bg-transparent outline-none text-slate-900 dark:text-slate-100 placeholder-slate-400"
                      />
                    </div>
                    <ul className="max-h-56 overflow-y-auto custom-scrollbar py-1">
                      {OFFERS_DATA.filter(
                        (o) =>
                          !selectedIds.includes(o.id) &&
                          (dropdownSearch.trim() === '' ||
                            o.name.toLowerCase().includes(dropdownSearch.toLowerCase()) ||
                            o.category.toLowerCase().includes(dropdownSearch.toLowerCase()))
                      ).map((opt) => (
                        <li key={opt.id}>
                          <button
                            type="button"
                            onClick={() => handleAddOffer(opt.id)}
                            className="w-full text-left px-3 py-2 hover:bg-sky-50 dark:hover:bg-sky-950/40 transition-colors flex items-center justify-between gap-2 min-h-[36px]"
                          >
                            <span className="text-xs font-semibold text-slate-900 dark:text-slate-100 truncate">
                              {opt.name}
                            </span>
                            <span className="text-[10px] text-slate-500 dark:text-slate-400 shrink-0">
                              {opt.category}
                            </span>
                          </button>
                        </li>
                      ))}
                      {OFFERS_DATA.filter(
                        (o) =>
                          !selectedIds.includes(o.id) &&
                          (dropdownSearch.trim() === '' ||
                            o.name.toLowerCase().includes(dropdownSearch.toLowerCase()) ||
                            o.category.toLowerCase().includes(dropdownSearch.toLowerCase()))
                      ).length === 0 && (
                        <li className="px-3 py-3 text-center text-xs text-slate-500 dark:text-slate-400">
                          No tools match your search.
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Comparison Grid */}
      {comparedOffers.length === 0 ? (
        <div className="text-center py-12 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-500">
          Select at least one tool above to start comparing.
        </div>
      ) : (
        <div className="overflow-x-auto custom-scrollbar rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/60">
                <th className="p-4 font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-[11px] w-1/4">
                  Feature / Dimension
                </th>
                {comparedOffers.map((offer) => (
                  <th key={offer.id} className="p-4 font-bold text-slate-900 dark:text-slate-100 w-1/4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm sm:text-base font-extrabold">{offer.name}</span>
                      <button
                        type="button"
                        onClick={() => onSelectOffer(offer.id)}
                        className="text-[11px] font-medium text-sky-600 dark:text-sky-400 hover:underline"
                      >
                        Details
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
              {/* What it does */}
              <tr>
                <td className="p-4 font-semibold text-slate-500 dark:text-slate-400 align-top">
                  What it does
                </td>
                {comparedOffers.map((offer) => (
                  <td key={offer.id} className="p-4 text-slate-700 dark:text-slate-300 align-top text-xs sm:text-sm leading-relaxed">
                    {offer.description}
                  </td>
                ))}
              </tr>

              {/* Pack Benefit */}
              <tr className="bg-sky-50/30 dark:bg-sky-950/10">
                <td className="p-4 font-semibold text-sky-800 dark:text-sky-300 align-top">
                  Student Pack Benefit
                </td>
                {comparedOffers.map((offer) => (
                  <td key={offer.id} className="p-4 font-medium text-slate-900 dark:text-slate-100 align-top text-xs sm:text-sm leading-snug">
                    {offer.benefit}
                  </td>
                ))}
              </tr>

              {/* Duration */}
              <tr>
                <td className="p-4 font-semibold text-slate-500 dark:text-slate-400 align-top">
                  Free Duration
                </td>
                {comparedOffers.map((offer) => (
                  <td key={offer.id} className="p-4 text-slate-700 dark:text-slate-300 align-top text-xs sm:text-sm font-semibold">
                    {offer.duration}
                  </td>
                ))}
              </tr>

              {/* Best use case */}
              <tr>
                <td className="p-4 font-semibold text-slate-500 dark:text-slate-400 align-top">
                  Best For
                </td>
                {comparedOffers.map((offer) => (
                  <td key={offer.id} className="p-4 text-slate-700 dark:text-slate-300 align-top text-xs sm:text-sm">
                    {offer.recommendedAudience || 'General development'}
                  </td>
                ))}
              </tr>

              {/* Credit Card Verification */}
              <tr>
                <td className="p-4 font-semibold text-slate-500 dark:text-slate-400 align-top">
                  Payment Verification
                </td>
                {comparedOffers.map((offer) => (
                  <td key={offer.id} className="p-4 align-top text-xs sm:text-sm">
                    {offer.requiresCreditCard ? (
                      <span className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 font-medium">
                        <CreditCard className="w-3.5 h-3.5" /> Card required for verification
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                        <ShieldCheck className="w-3.5 h-3.5" /> No card required
                      </span>
                    )}
                  </td>
                ))}
              </tr>

              {/* Important Limitations */}
              <tr>
                <td className="p-4 font-semibold text-slate-500 dark:text-slate-400 align-top">
                  Key Limitations
                </td>
                {comparedOffers.map((offer) => (
                  <td key={offer.id} className="p-4 align-top text-xs text-slate-600 dark:text-slate-400">
                    <ul className="space-y-1 list-disc list-inside">
                      {offer.limitations.slice(0, 2).map((lim, idx) => (
                        <li key={idx}>{lim}</li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>

              {/* Action */}
              <tr className="bg-slate-50/50 dark:bg-slate-800/40">
                <td className="p-4 font-semibold text-slate-500 dark:text-slate-400 align-middle">
                  Official Claim Link
                </td>
                {comparedOffers.map((offer) => (
                  <td key={offer.id} className="p-4 align-middle">
                    <a
                      href={offer.githubOfferUrl || offer.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-sky-500 text-white hover:bg-sky-400 active:bg-sky-600 transition-colors shadow-2xs min-h-[36px]"
                    >
                      <span>Claim {offer.name}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
