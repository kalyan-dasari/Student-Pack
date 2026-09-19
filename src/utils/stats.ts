import { OFFERS_DATA } from '../data/offers';

export interface DatasetStats {
  totalOffers: number;
  totalCategories: number;
  developerToolsCount: number;
  cloudCount: number;
  learningCount: number;
  infrastructureCount: number;
  securityAnalyticsCount: number;
  designCount: number;
  noCreditCardRequiredCount: number;
  timeSensitiveCount: number;
}

export function calculateDatasetStats(): DatasetStats {
  const categoriesSet = new Set(OFFERS_DATA.map((o) => o.category));

  return {
    totalOffers: OFFERS_DATA.length,
    totalCategories: categoriesSet.size,
    developerToolsCount: OFFERS_DATA.filter((o) => o.category === 'Developer Tools').length,
    cloudCount: OFFERS_DATA.filter((o) => o.category === 'Cloud').length,
    learningCount: OFFERS_DATA.filter((o) => o.category === 'Learning').length,
    infrastructureCount: OFFERS_DATA.filter((o) => o.category === 'Infrastructure & APIs').length,
    securityAnalyticsCount: OFFERS_DATA.filter((o) => o.category === 'Security & Analytics').length,
    designCount: OFFERS_DATA.filter((o) => o.category === 'Design').length,
    noCreditCardRequiredCount: OFFERS_DATA.filter((o) => !o.requiresCreditCard).length,
    timeSensitiveCount: OFFERS_DATA.filter((o) => o.isTimeSensitive).length,
  };
}
