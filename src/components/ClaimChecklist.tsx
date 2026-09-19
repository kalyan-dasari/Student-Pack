import React, { useState } from 'react';
import { OFFERS_DATA } from '../data/offers';
import { ClaimStatus, UserChecklistState } from '../types';
import {
  saveChecklistStatus,
  clearChecklist,
} from '../utils/storage';
import {
  CheckCircle2,
  Clock,
  AlertOctagon,
  Circle,
  ExternalLink,
  Trash2,
  Filter,
} from 'lucide-react';

interface ClaimChecklistProps {
  checklistState: UserChecklistState;
  onUpdateState: (newState: UserChecklistState) => void;
  onSelectOffer: (offerId: string) => void;
}

export const ClaimChecklist: React.FC<ClaimChecklistProps> = ({
  checklistState,
  onUpdateState,
  onSelectOffer,
}) => {
  const [filterStatus, setFilterStatus] = useState<ClaimStatus | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const checklistValues = Object.values(checklistState) as UserChecklistState[string][];
  const totalOffers = OFFERS_DATA.length;
  const claimedCount = checklistValues.filter(
    (item) => item?.status === 'claimed' || item?.status === 'using'
  ).length;
  const percentage = Math.round((claimedCount / totalOffers) * 100);

  const handleStatusChange = (offerId: string, status: ClaimStatus) => {
    const updated = saveChecklistStatus(offerId, status);
    onUpdateState(updated);
  };

  const handleClearAll = () => {
    if (window.confirm('Reset all saved checklist progress in your browser?')) {
      clearChecklist();
      onUpdateState({});
    }
  };

  const filteredOffers = OFFERS_DATA.filter((offer) => {
    const currentStatus = checklistState[offer.id]?.status || 'not_claimed';
    const matchesStatus = filterStatus === 'all' || currentStatus === filterStatus;
    const matchesSearch =
      offer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      offer.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div id="claim-checklist-manager" className="space-y-6">
      {/* Progress Card */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Student Pack Claim Tracker
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Locally saved in your browser. No account or login required.
            </p>
          </div>
          <div className="text-right">
            <span className="text-2xl font-black text-sky-600 dark:text-sky-400">
              {claimedCount} / {totalOffers}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 block">
              offers activated ({percentage}%)
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-sky-500 to-cyan-500 transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>

        {/* Quick status counters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
          <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-center">
            <span className="text-[11px] font-semibold text-slate-500">Not Claimed</span>
            <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
              {totalOffers - claimedCount}
            </p>
          </div>
          <div className="p-2 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 text-center">
            <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">Claimed</span>
            <p className="text-sm font-bold text-emerald-800 dark:text-emerald-300">
              {checklistValues.filter((s) => s?.status === 'claimed').length}
            </p>
          </div>
          <div className="p-2 rounded-xl bg-sky-50/60 dark:bg-sky-950/20 text-center">
            <span className="text-[11px] font-semibold text-sky-700 dark:text-sky-400">Actively Using</span>
            <p className="text-sm font-bold text-sky-800 dark:text-sky-300">
              {checklistValues.filter((s) => s?.status === 'using').length}
            </p>
          </div>
          <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-center">
            <span className="text-[11px] font-semibold text-slate-500">Expired</span>
            <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
              {checklistValues.filter((s) => s?.status === 'expired').length}
            </p>
          </div>
        </div>
      </div>

      {/* Filter and search controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5">
          {(['all', 'not_claimed', 'claimed', 'using', 'expired'] as const).map((st) => (
            <button
              key={st}
              type="button"
              id={`filter-checklist-${st}`}
              onClick={() => setFilterStatus(st)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize transition-colors min-h-[36px] ${
                filterStatus === st
                  ? 'bg-sky-500 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-sky-300'
              }`}
            >
              {st.replace('_', ' ')}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Filter list..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 sm:flex-initial px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50 min-h-[36px]"
          />
          {claimedCount > 0 && (
            <button
              type="button"
              onClick={handleClearAll}
              className="p-2 rounded-xl text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors shrink-0 min-h-[36px]"
              title="Reset checklist"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Checklist items */}
      <div className="space-y-2.5">
        {filteredOffers.length === 0 ? (
          <div className="text-center py-10 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 text-xs text-slate-500">
            No offers matching this status filter.
          </div>
        ) : (
          filteredOffers.map((offer) => {
            const currentStatus = checklistState[offer.id]?.status || 'not_claimed';

            return (
              <div
                key={offer.id}
                id={`checklist-item-${offer.id}`}
                className="p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-sky-300 dark:hover:border-sky-700/60 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs"
              >
                <div className="flex items-start gap-3 min-w-0 flex-1">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {offer.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3
                        onClick={() => onSelectOffer(offer.id)}
                        className="text-sm font-bold text-slate-900 dark:text-slate-100 hover:text-sky-600 cursor-pointer transition-colors"
                      >
                        {offer.name}
                      </h3>
                      <span className="text-[11px] text-slate-400 px-2 py-0.2 rounded-md bg-slate-100 dark:bg-slate-800">
                        {offer.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                      {offer.benefit}
                    </p>
                  </div>
                </div>

                {/* Status Switcher Buttons */}
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-1.5 shrink-0 self-stretch sm:self-center">
                  <button
                    type="button"
                    onClick={() => handleStatusChange(offer.id, 'not_claimed')}
                    className={`flex-1 sm:flex-initial px-2 py-1 rounded-lg text-[11px] font-medium transition-colors text-center ${
                      currentStatus === 'not_claimed'
                        ? 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white font-semibold'
                        : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    Not Claimed
                  </button>
                  <button
                    type="button"
                    onClick={() => handleStatusChange(offer.id, 'claimed')}
                    className={`flex-1 sm:flex-initial px-2 py-1 rounded-lg text-[11px] font-medium transition-colors text-center ${
                      currentStatus === 'claimed'
                        ? 'bg-emerald-600 text-white font-semibold shadow-2xs'
                        : 'text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40'
                    }`}
                  >
                    Claimed
                  </button>
                  <button
                    type="button"
                    onClick={() => handleStatusChange(offer.id, 'using')}
                    className={`flex-1 sm:flex-initial px-2 py-1 rounded-lg text-[11px] font-medium transition-colors text-center ${
                      currentStatus === 'using'
                        ? 'bg-sky-500 text-white font-semibold shadow-2xs'
                        : 'text-sky-700 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-950/40'
                    }`}
                  >
                    Using
                  </button>
                  <button
                    type="button"
                    onClick={() => handleStatusChange(offer.id, 'expired')}
                    className={`flex-1 sm:flex-initial px-2 py-1 rounded-lg text-[11px] font-medium transition-colors text-center ${
                      currentStatus === 'expired'
                        ? 'bg-slate-600 text-white font-semibold'
                        : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    Expired
                  </button>

                  <a
                    href={offer.githubOfferUrl || offer.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-slate-400 hover:text-sky-600 ml-1 shrink-0"
                    title="Open official claim portal"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
