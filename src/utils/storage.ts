import { ClaimStatus, UserChecklistState } from '../types';

const STORAGE_KEY = 'studentpack_claim_checklist_v1';

export function getStoredChecklist(): UserChecklistState {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch (err) {
    console.warn('Failed to parse claim checklist from localStorage', err);
    return {};
  }
}

export function saveChecklistStatus(
  offerId: string,
  status: ClaimStatus,
  notes?: string
): UserChecklistState {
  const current = getStoredChecklist();
  const updated: UserChecklistState = {
    ...current,
    [offerId]: {
      status,
      claimedDate: status !== 'not_claimed' ? current[offerId]?.claimedDate || new Date().toISOString() : undefined,
      notes: notes !== undefined ? notes : current[offerId]?.notes,
    },
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.warn('Failed to save claim checklist to localStorage', err);
  }
  return updated;
}

export function clearChecklist(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.warn('Failed to clear claim checklist', err);
  }
}
