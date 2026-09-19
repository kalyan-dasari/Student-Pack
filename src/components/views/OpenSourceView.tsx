import React from 'react';
import { Disclaimer } from '../Disclaimer';
import {
  Github,
  GitPullRequest,
  CheckCircle2,
  FileCode2,
  AlertCircle,
  Database,
  ExternalLink,
  BookOpen,
} from 'lucide-react';

export const OpenSourceView: React.FC = () => {
  return (
    <div id="open-source-view" className="space-y-10 pb-12 max-w-4xl mx-auto">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
          <Github className="w-3.5 h-3.5" />
          <span>Open Source Community Project</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          Transparency, Data Sources & Contributing
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Student Pack is an open-source educational knowledge base. We believe every student deserves honest, transparent, and accurate guidance about developer tools.
        </p>
      </div>

      <Disclaimer />

      {/* Core Principles */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
          <CheckCircle2 className="w-5 h-5 text-sky-600" />
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">No Invented Data</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Every benefit, duration, and claim step is verified directly against official partner documentation or GitHub Education portals.
          </p>
        </div>

        <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
          <FileCode2 className="w-5 h-5 text-cyan-600" />
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Clean Schema</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Typed in TypeScript with strict fields for payment verification, sunset notes, and claim prerequisites.
          </p>
        </div>

        <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
          <GitPullRequest className="w-5 h-5 text-emerald-600" />
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Community Maintained</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Found an expired link or changed benefit? Anyone can propose updates via pull requests or issue reports.
          </p>
        </div>
      </div>

      {/* How Data is Structured */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-100">
          <Database className="w-4 h-4 text-sky-600" />
          <h2>The Structured Knowledge Base Schema</h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Offers are not hardcoded into HTML layout components. They reside in structured TypeScript files under <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-sky-600 dark:text-sky-400 font-mono text-xs">src/data/offers.ts</code> adhering to the <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-sky-600 dark:text-sky-400 font-mono text-xs">StudentPackOffer</code> interface:
        </p>

        <div className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto custom-scrollbar">
          <pre>{`interface StudentPackOffer {
  id: string;
  name: string;
  category: OfferCategory;
  description: string;
  benefit: string;
  duration: string;
  eligibility: string;
  whatItDoes: string;
  whyStudentsShouldCare: string;
  whatYouCanBuild: string[];
  exampleUseCases: string[];
  howToClaim: string[];
  requirements: string[];
  limitations: string[];
  requiresCreditCard: boolean;
  requiresGithubAuthFirst: boolean;
  isTimeSensitive: boolean;
  worthClaimingFirst: boolean;
  lastVerified: string;
  sourceUrls: string[];
}`}</pre>
        </div>
      </section>

      {/* Contributing Guide */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-100">
          <GitPullRequest className="w-4 h-4 text-emerald-600" />
          <h2>How to Contribute or Update an Offer</h2>
        </div>
        <ol className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 list-decimal list-inside leading-relaxed">
          <li>
            <strong>Fork the Repository:</strong> Clone the project and create a new feature branch (e.g. <code className="font-mono text-xs text-sky-600 dark:text-sky-400">fix/update-clerk-limits</code>).
          </li>
          <li>
            <strong>Locate the Data Entry:</strong> Open <code className="font-mono text-xs text-sky-600 dark:text-sky-400">src/data/offers.ts</code> and locate the partner offer object.
          </li>
          <li>
            <strong>Include Official Source Citation:</strong> Every modification must provide a valid URL in <code className="font-mono text-xs text-sky-600 dark:text-sky-400">sourceUrls</code> linking to the official partner landing page or GitHub Education docs.
          </li>
          <li>
            <strong>Update the Verification Date:</strong> Update <code className="font-mono text-xs text-sky-600 dark:text-sky-400">lastVerified</code> with the current date (YYYY-MM-DD).
          </li>
          <li>
            <strong>Submit Pull Request:</strong> Open a PR with a concise description of the policy or tier change.
          </li>
        </ol>
      </section>

      {/* Verified Official Data Sources */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-100">
          <BookOpen className="w-4 h-4 text-sky-600" />
          <h2>Primary Official Reference Sources</h2>
        </div>
        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
            <span>Official GitHub Education Student Pack Catalog</span>
            <a
              href="https://education.github.com/pack"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 dark:text-sky-400 font-semibold hover:underline inline-flex items-center gap-1"
            >
              education.github.com/pack <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
            <span>GitHub Documentation: Applying for Student Benefits</span>
            <a
              href="https://docs.github.com/en/education/explore-the-benefits-of-github-education/use-github-for-your-schoolwork/apply-for-a-student-developer-pack"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 dark:text-sky-400 font-semibold hover:underline inline-flex items-center gap-1"
            >
              docs.github.com <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
            <span>GitHub Copilot for Students Subscription Management</span>
            <a
              href="https://docs.github.com/en/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/getting-free-access-to-copilot-as-a-student-teacher-or-maintainer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 dark:text-sky-400 font-semibold hover:underline inline-flex items-center gap-1"
            >
              copilot student docs <ExternalLink className="w-3 h-3" />
            </a>
          </li>
        </ul>
      </section>

      {/* Community Verification Tracking / TODO List */}
      <section className="rounded-2xl border border-amber-200 dark:border-amber-900/40 bg-amber-50/40 dark:bg-amber-950/20 p-6 sm:p-7 space-y-4">
        <div className="flex items-center gap-2 text-sm font-bold text-amber-950 dark:text-amber-200">
          <AlertCircle className="w-4 h-4 text-amber-600" />
          <h2>Community Verification Tracking (TODO List)</h2>
        </div>
        <p className="text-xs sm:text-sm text-amber-900/90 dark:text-amber-300/90 leading-relaxed">
          The following partner items or regional policies are currently tagged for ongoing re-verification by community maintainers:
        </p>
        <div className="space-y-2 pt-1 text-xs text-amber-900 dark:text-amber-300">
          <div className="p-3 rounded-lg bg-white/70 dark:bg-slate-900/70 border border-amber-200/80 dark:border-amber-900/40 flex items-start gap-2">
            <span className="font-bold text-amber-700 dark:text-amber-400">TODO 1:</span>
            <span>DigitalOcean sunset timeline monitoring — checking for official API replacements or alternative cloud voucher extensions.</span>
          </div>
          <div className="p-3 rounded-lg bg-white/70 dark:bg-slate-900/70 border border-amber-200/80 dark:border-amber-900/40 flex items-start gap-2">
            <span className="font-bold text-amber-700 dark:text-amber-400">TODO 2:</span>
            <span>Heroku Eco Dyno monthly credit allocation review — confirming voucher renewal requirements across academic terms.</span>
          </div>
          <div className="p-3 rounded-lg bg-white/70 dark:bg-slate-900/70 border border-amber-200/80 dark:border-amber-900/40 flex items-start gap-2">
            <span className="font-bold text-amber-700 dark:text-amber-400">TODO 3:</span>
            <span>Regional accreditation exceptions — testing verification requirements for international coding bootcamps without formal .edu domains.</span>
          </div>
        </div>
      </section>
    </div>
  );
};
