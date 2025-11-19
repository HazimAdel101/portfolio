/**
 * Utility functions and helpers
 */

/**
 * Generate a unique key for list items
 */
export function generateKey(prefix: string, index: number, identifier?: string): string {
  return identifier ? `${prefix}-${identifier}-${index}` : `${prefix}-${index}`;
}

/**
 * Check if a value is defined
 */
export function isDefined<T>(value: T | undefined | null): value is T {
  return value !== undefined && value !== null;
}

