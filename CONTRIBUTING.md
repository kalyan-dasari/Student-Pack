# Contributing to Student Pack

Thank you for helping keep the **Student Pack** accurate, up-to-date, and helpful for students worldwide!

---

## 🎯 Ground Rules

1. **Official Verification Required**: Never guess or estimate benefits, limits, prices, or redemption steps. Every modification or addition must be backed by an official documentation URL (e.g., GitHub Education or partner portal).
2. **Payment Requirement Honesty**: Clearly state whether a partner requires a credit card or PayPal for verification. Never hide billing details.
3. **Time-Sensitive Warnings**: If an offer starts ticking down upon redemption (e.g. 6-month or 3-month trial), explicitly note this in `isTimeSensitive` and `expirationNote`.

---

## 📝 How to Add or Update an Offer

1. Open `src/data/offers.ts`.
2. Locate the offer object or add a new object adhering to the `StudentPackOffer` interface:
   ```typescript
   {
     id: 'unique-id',
     name: 'Partner Name',
     category: 'Cloud', // Or Developer Tools, Learning, etc.
     description: '1-sentence overview',
     benefit: 'Exact student benefit',
     duration: 'e.g. 1 year or While student',
     eligibility: 'Verified GitHub Student Developer Pack',
     whatItDoes: 'Simple explanation of the product',
     whyStudentsShouldCare: 'Why it matters for learning and portfolios',
     whatYouCanBuild: ['Project 1', 'Project 2'],
     exampleUseCases: ['Use case 1', 'Use case 2'],
     howToClaim: ['Step 1', 'Step 2'],
     requirements: ['Requirement 1'],
     limitations: ['Limitation 1'],
     requiresCreditCard: false,
     requiresGithubAuthFirst: true,
     isTimeSensitive: false,
     worthClaimingFirst: true,
     lastVerified: 'YYYY-MM-DD',
     sourceUrls: ['https://example.com/student-offer']
   }
   ```
3. Run `npm run build` or the local dev server to ensure there are no TypeScript compile errors.
4. Submit a Pull Request describing the update.
