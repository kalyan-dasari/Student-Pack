export interface FAQItem {
  id: string;
  question: string;
  category: 'General' | 'Eligibility' | 'Billing & Cards' | 'Rules & Expiration';
  answer: string;
  verifiedOfficialSource?: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'what-is-pack',
    category: 'General',
    question: 'What is the GitHub Student Developer Pack?',
    answer:
      'The GitHub Student Developer Pack is a free educational benefit program created by GitHub in partnership with leading developer tool companies. It bundles hundreds or thousands of dollars worth of developer tools, cloud hosting credits, software licenses, domain registrations, and learning courses for verified students worldwide.',
    verifiedOfficialSource: 'https://education.github.com/pack',
  },
  {
    id: 'is-it-free',
    category: 'Billing & Cards',
    question: 'Is it really free?',
    answer:
      'Yes, the GitHub Student Developer Pack itself is 100% free to apply for and use. The partner benefits are provided as complimentary subscriptions, free promo credits, or full-duration student licenses. However, you should note that some cloud infrastructure partners (e.g. DigitalOcean, Heroku) may require an identity verification method or will revert to standard commercial pricing once your promotional credits expire if you leave resources running.',
  },
  {
    id: 'college-email',
    category: 'Eligibility',
    question: 'Do I need a college email (.edu)?',
    answer:
      'A school-issued email address (ending in .edu, .ac.uk, or your local school domain) makes automated verification much faster, but it is NOT strictly required. If your school does not provide email addresses, you can upload alternative official proof of enrollment, such as an official student ID card with an expiration date, dated transcript, or enrollment verification letter from your registrar.',
    verifiedOfficialSource: 'https://docs.github.com/en/education/explore-the-benefits-of-github-education/use-github-for-your-schoolwork/apply-for-a-student-developer-pack',
  },
  {
    id: 'school-students',
    category: 'Eligibility',
    question: 'Can high school or secondary school students use it?',
    answer:
      'Yes! Any student aged 13 or older currently enrolled in a degree or diploma-granting course of study (including high schools, secondary schools, colleges, universities, and accredited coding bootcamps) is eligible to apply for GitHub Education benefits.',
    verifiedOfficialSource: 'https://education.github.com/discount_requests/student',
  },
  {
    id: 'need-credit-card',
    category: 'Billing & Cards',
    question: 'Do I need a credit card?',
    answer:
      'For GitHub and the vast majority of software partners (such as JetBrains, Frontend Masters, MongoDB, Clerk, Icons8, and Sentry), NO credit card is required. However, certain cloud hosting providers (such as DigitalOcean and Heroku) require payment method verification (credit card or PayPal) during account creation solely to deter automated bot abuse, cryptocurrency mining, and spam.',
  },
  {
    id: 'claim-all',
    category: 'General',
    question: 'Do I have to claim every offer at once?',
    answer:
      'No! In fact, we strongly recommend NOT claiming every offer at once. Many learning platforms (like Frontend Masters, Scrimba, and DataCamp) give you 1 to 6 months of free access that starts ticking the moment you redeem the code. It is far smarter to claim learning offers one by one when you actually have dedicated free time or holiday breaks to study.',
  },
  {
    id: 'graduation',
    category: 'Rules & Expiration',
    question: 'What happens when I graduate?',
    answer:
      'Your GitHub Student Pack verification expires when your academic enrollment ends (typically after annual re-verification). When it expires, your GitHub Pro will downgrade back to standard GitHub Free (your repositories and code remain completely intact), and partner trial licenses will conclude or transition to their regular free tiers. You will never be charged automatically by GitHub for graduating.',
  },
  {
    id: 'commercial-projects',
    category: 'Rules & Expiration',
    question: 'Can I use these tools for commercial projects?',
    answer:
      'It depends on the individual partner terms. Tools like GitHub Pro, MongoDB Atlas, and Clerk allow you to build real production apps and side projects. However, educational desktop licenses (like JetBrains) are strictly restricted to non-commercial academic study and open-source personal work. Always review the specific partner agreement if you intend to generate direct commercial revenue.',
  },
  {
    id: 'for-startups',
    category: 'Rules & Expiration',
    question: 'Can I use the offers for my startup?',
    answer:
      'Early-stage student prototyping and proof-of-concepts are encouraged by partners like MongoDB, Appwrite, and DigitalOcean. However, if your startup incorporates as an enterprise, raises venture capital, or hires non-student employees, you are expected to migrate to the partners regular startup programs (e.g. MongoDB for Startups, DigitalOcean Hatch, etc.).',
  },
  {
    id: 'credit-expires',
    category: 'Billing & Cards',
    question: 'What happens when a credit expires?',
    answer:
      'If you have active servers, databases, or paid add-ons running after a promotional credit balance reaches $0.00, the provider will attempt to bill the payment method on file or suspend the instance. To prevent unexpected charges, always set spending alerts in your cloud dashboards and shut down test servers when finished.',
  },
  {
    id: 'claim-later',
    category: 'General',
    question: 'Can I claim an offer later?',
    answer:
      'Yes. As long as your GitHub Student Developer Pack remains active, you can return to the portal at any point during your studies to claim unused offers or newly added partner benefits.',
  },
  {
    id: 'why-unavailable',
    category: 'General',
    question: 'Why does an offer say unavailable or redirect to a dead page?',
    answer:
      'Partner agreements in the Student Developer Pack evolve over time. Partners periodically update their redemption links, modify student allocations, or conclude promotional campaigns (for example, DigitalOcean announced a sunsetting schedule for 2026). If an offer appears broken, check our Last Verified date or consult the official GitHub Education support portal.',
  },
  {
    id: 'github-copilot',
    category: 'General',
    question: 'Why is GitHub Copilot listed separately?',
    answer:
      'GitHub Copilot for Students is provided directly by GitHub to verified students at no cost, but is managed through your personal GitHub account billing settings rather than as a third-party redemption promo voucher in the Pack directory.',
    verifiedOfficialSource: 'https://docs.github.com/en/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/getting-free-access-to-copilot-as-a-student-teacher-or-maintainer',
  },
  {
    id: 'country-availability',
    category: 'Eligibility',
    question: 'Are all offers available in every country?',
    answer:
      'The vast majority of digital offers are globally available to all verified students. However, certain cloud and payment-verified providers must comply with international trade sanctions and regional financial regulations, which may restrict access in specific jurisdictions.',
  },
];
