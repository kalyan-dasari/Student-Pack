import React, { useEffect, useRef } from 'react';
import { Search, X, SlidersHorizontal } from 'lucide-react';

export type SortOption =
  | 'name-asc'
  | 'name-desc'
  | 'category'
  | 'duration'
  | 'worth-first'
  | 'beginners'
  | 'building'
  | 'learning'
  | 'startups';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedSort: SortOption;
  onSortChange: (sort: SortOption) => void;
  noCardFilter: boolean;
  onToggleNoCardFilter: () => void;
  totalFilteredCount: number;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedSort,
  onSortChange,
  noCardFilter,
  onToggleNoCardFilter,
  totalFilteredCount,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Global '/' keyboard shortcut to focus search input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === '/' &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="space-y-3">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        {/* Search input with shortcut badge */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
          <input
            ref={inputRef}
            id="offer-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by company, tool name, or what you want to build..."
            className="w-full pl-10 pr-20 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 shadow-xs"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
            {searchQuery ? (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            ) : (
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono font-medium text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 select-none">
                /
              </kbd>
            )}
          </div>
        </div>

        {/* Sort dropdown and no card filter */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2">
          <div className="relative flex-1 sm:flex-initial">
            <SlidersHorizontal className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
            <select
              id="offer-sort-select"
              value={selectedSort}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              className="w-full sm:w-auto pl-8 pr-8 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 appearance-none shadow-xs cursor-pointer"
            >
              <optgroup label="Standard Order">
                <option value="worth-first">Worth claiming first (Community recommended)</option>
                <option value="name-asc">Name (A → Z)</option>
                <option value="name-desc">Name (Z → A)</option>
                <option value="category">Category</option>
                <option value="duration">Benefit Duration</option>
              </optgroup>
              <optgroup label="Community Curations">
                <option value="beginners">Best for beginners</option>
                <option value="building">Best for building projects</option>
                <option value="learning">Best for learning</option>
                <option value="startups">Best for startups</option>
              </optgroup>
            </select>
          </div>

          {/* Quick toggle: No card required */}
          <button
            type="button"
            id="toggle-no-card-required"
            onClick={onToggleNoCardFilter}
            className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-colors shrink-0 ${
              noCardFilter
                ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-slate-300'
            }`}
          >
            No Card Required
          </button>
        </div>
      </div>

      {/* Results counter & active state */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
        <span>
          Showing <strong>{totalFilteredCount}</strong> offers
        </span>
        {(searchQuery || noCardFilter || selectedSort !== 'worth-first') && (
          <span className="text-[11px] text-sky-600 dark:text-sky-400 font-medium">
            Filtered view active
          </span>
        )}
      </div>
    </div>
  );
};
