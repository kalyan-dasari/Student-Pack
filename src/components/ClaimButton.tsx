import React from 'react';
import { ExternalLink, CreditCard, ShieldCheck, AlertCircle } from 'lucide-react';
import { StudentPackOffer } from '../types';

interface ClaimButtonProps {
  offer: StudentPackOffer;
  size?: 'sm' | 'md' | 'lg';
  showRequirementsHint?: boolean;
  className?: string;
}

export const ClaimButton: React.FC<ClaimButtonProps> = ({
  offer,
  size = 'md',
  showRequirementsHint = false,
  className = '',
}) => {
  const targetUrl = offer.githubOfferUrl || offer.officialUrl;

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs font-medium',
    md: 'px-4 py-2 text-sm font-semibold',
    lg: 'px-6 py-3 text-base font-semibold',
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {showRequirementsHint && (
        <div className="space-y-1 text-xs">
          {offer.requiresGithubAuthFirst && (
            <div className="flex items-center gap-1.5 text-sky-700 dark:text-sky-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span>Sign into GitHub Education student account first</span>
            </div>
          )}
          {offer.requiresCreditCard ? (
            <div className="flex items-center gap-1.5 text-amber-700 dark:text-amber-400">
              <CreditCard className="w-3.5 h-3.5 shrink-0" />
              <span>Partner requires card / PayPal for identity verification</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span>No credit card required for student redemption</span>
            </div>
          )}
          {offer.isTimeSensitive && (
            <div className="flex items-center gap-1.5 text-amber-700 dark:text-amber-400">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>Time-sensitive: {offer.duration}</span>
            </div>
          )}
        </div>
      )}

      <a
        id={`claim-btn-${offer.id}`}
        href={targetUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 hover:bg-sky-400 active:bg-sky-600 text-white shadow-xs transition-all focus:outline-none focus:ring-2 focus:ring-sky-400/50 min-h-[44px] ${sizeClasses[size]} w-full sm:w-auto text-center`}
      >
        <span>Claim on Official Portal</span>
        <ExternalLink className="w-4 h-4 shrink-0" />
      </a>
    </div>
  );
};
