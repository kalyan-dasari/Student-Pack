import React, { useState, useMemo } from 'react';
import { OFFERS_DATA } from '../../data/offers';
import { OfferCategory, StudentPackOffer } from '../../types';
import { SearchBar, SortOption } from '../SearchBar';
import { CategoryFilter } from '../CategoryFilter';
import { OfferGrid } from '../OfferGrid';
import { Disclaimer } from '../Disclaimer';

interface ExplorerViewProps {
  onSelectOffer: (offerId: string) => void;
  claimedOfferIds: string[];
}

export const ExplorerView: React.FC<ExplorerViewProps> = ({
  onSelectOffer,
  claimedOfferIds,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<OfferCategory | 'All'>('All');
  const [selectedSort, setSelectedSort] = useState<SortOption>('worth-first');
  const [noCardFilter, setNoCardFilter] = useState<boolean>(false);

  // Filter and sort computation
  const filteredOffers = useMemo(() => {
    let result = [...OFFERS_DATA];

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter((o) => o.category === selectedCategory);
    }

    // No credit card filter
    if (noCardFilter) {
      result = result.filter((o) => !o.requiresCreditCard);
    }

    // Search query filter (matches name, description, category, tags, whatItDoes, whatYouCanBuild)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (o) =>
          o.name.toLowerCase().includes(q) ||
          o.description.toLowerCase().includes(q) ||
          o.category.toLowerCase().includes(q) ||
          o.benefit.toLowerCase().includes(q) ||
          o.whatItDoes.toLowerCase().includes(q) ||
          (o.tags && o.tags.some((tag) => tag.toLowerCase().includes(q))) ||
          o.whatYouCanBuild.some((item) => item.toLowerCase().includes(q))
      );
    }

    // Sorting
    result.sort((a, b) => {
      switch (selectedSort) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'category':
          return a.category.localeCompare(b.category);
        case 'duration':
          return a.duration.localeCompare(b.duration);
        case 'worth-first':
          if (a.worthClaimingFirst && !b.worthClaimingFirst) return -1;
          if (!a.worthClaimingFirst && b.worthClaimingFirst) return 1;
          return a.name.localeCompare(b.name);
        case 'beginners':
          const aBeg = a.bestForBeginners || a.recommendedAudience?.toLowerCase().includes('beginner');
          const bBeg = b.bestForBeginners || b.recommendedAudience?.toLowerCase().includes('beginner');
          if (aBeg && !bBeg) return -1;
          if (!aBeg && bBeg) return 1;
          return a.name.localeCompare(b.name);
        case 'building':
          const aBuild = a.bestForBuilding || a.category === 'Cloud' || a.category === 'Infrastructure & APIs' || a.category === 'Developer Tools';
          const bBuild = b.bestForBuilding || b.category === 'Cloud' || b.category === 'Infrastructure & APIs' || b.category === 'Developer Tools';
          if (aBuild && !bBuild) return -1;
          if (!aBuild && bBuild) return 1;
          return a.name.localeCompare(b.name);
        case 'learning':
          const aLearn = a.bestForLearning || a.category === 'Learning';
          const bLearn = b.bestForLearning || b.category === 'Learning';
          if (aLearn && !bLearn) return -1;
          if (!aLearn && bLearn) return 1;
          return a.name.localeCompare(b.name);
        case 'startups':
          const aStart = a.bestForStartups || a.category === 'Cloud' || a.category === 'Infrastructure & APIs';
          const bStart = b.bestForStartups || b.category === 'Cloud' || b.category === 'Infrastructure & APIs';
          if (aStart && !bStart) return -1;
          if (!aStart && bStart) return 1;
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return result;
  }, [searchQuery, selectedCategory, selectedSort, noCardFilter]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedSort('worth-first');
    setNoCardFilter(false);
  };

  return (
    <div id="explorer-view" className="space-y-6 pb-12">
      {/* Top Header */}
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
          Explore Student Pack Offers
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Search and filter verified benefits by category, tech requirements, and project types.
        </p>
      </div>

      <Disclaimer compact={true} />

      {/* Search & Sort Controls */}
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedSort={selectedSort}
        onSortChange={setSelectedSort}
        noCardFilter={noCardFilter}
        onToggleNoCardFilter={() => setNoCardFilter(!noCardFilter)}
        totalFilteredCount={filteredOffers.length}
      />

      {/* Category Pills */}
      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        offers={OFFERS_DATA}
      />

      {/* Offer Cards Grid */}
      <OfferGrid
        offers={filteredOffers}
        onSelectOffer={onSelectOffer}
        claimedOfferIds={claimedOfferIds}
        onResetFilters={handleResetFilters}
      />
    </div>
  );
};
