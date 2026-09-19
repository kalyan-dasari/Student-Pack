import React from 'react';
import { CalendarCheck, ShieldCheck, AlertTriangle } from 'lucide-react';

interface LastVerifiedProps {
  date: string;
  status?: 'verified' | 'partially_verified' | 'needs_update';
  className?: string;
}

export const LastVerified: React.FC<LastVerifiedProps> = ({
  date,
  status = 'verified',
  className = '',
}) => {
  return (
    <div
      id={`verified-badge-${date}`}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border ${
        status === 'verified'
          ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/40'
          : status === 'partially_verified'
          ? 'bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/40'
          : 'bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800/40'
      } ${className}`}
    >
      {status === 'verified' ? (
        <ShieldCheck className="w-3.5 h-3.5" />
      ) : (
        <AlertTriangle className="w-3.5 h-3.5" />
      )}
      <CalendarCheck className="w-3.5 h-3.5 opacity-75" />
      <span>Verified {date}</span>
    </div>
  );
};
