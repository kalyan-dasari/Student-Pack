import React from 'react';
import { ExternalLink, Link as LinkIcon } from 'lucide-react';

interface SourceBadgeProps {
  urls: string[];
  className?: string;
}

export const SourceBadge: React.FC<SourceBadgeProps> = ({ urls, className = '' }) => {
  if (!urls || urls.length === 0) return null;

  return (
    <div id="source-links-container" className={`flex flex-wrap items-center gap-2 ${className}`}>
      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1">
        <LinkIcon className="w-3 h-3" /> Sources:
      </span>
      {urls.map((url, idx) => {
        let domain = 'Source';
        try {
          domain = new URL(url).hostname.replace('www.', '');
        } catch {
          domain = `Source ${idx + 1}`;
        }

        return (
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-sky-950/40 hover:text-sky-600 dark:hover:text-sky-400 border border-slate-200 dark:border-slate-700/60 transition-colors"
          >
            <span>{domain}</span>
            <ExternalLink className="w-2.5 h-2.5 opacity-70" />
          </a>
        );
      })}
    </div>
  );
};
