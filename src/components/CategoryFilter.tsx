import React from 'react';
import { CATEGORIES } from '../data/categories';
import { OfferCategory, StudentPackOffer } from '../types';

interface CategoryFilterProps {
  selectedCategory: OfferCategory | 'All';
  onSelectCategory: (category: OfferCategory | 'All') => void;
  offers: StudentPackOffer[];
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  offers,
}) => {
  // Count items per category
  const counts: Record<string, number> = {
    All: offers.length,
  };

  offers.forEach((o) => {
    counts[o.category] = (counts[o.category] || 0) + 1;
  });

  return (
    <div className="w-full overflow-x-auto pb-2.5 custom-scrollbar">
      <div id="category-filter-list" className="flex items-center gap-2 min-w-max px-0.5">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          const count = counts[cat.id] || 0;

          return (
            <button
              key={cat.id}
              type="button"
              id={`filter-cat-${cat.id.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => onSelectCategory(cat.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap min-h-[36px] ${
                isSelected
                  ? 'bg-emerald-500 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200/90 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700/60'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isSelected
                    ? 'bg-emerald-600/70 text-emerald-50 font-bold'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
