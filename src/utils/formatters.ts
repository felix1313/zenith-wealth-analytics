/**
 * Financial Formatting Utilities
 * Handles deterministic, locale-specific formatting for currencies, percentages, and metrics.
 */

/**
 * Formats a raw numeric value into a localized currency string.
 * @param value The raw numeric amount.
 * @param currency Strict ISO 4217 Currency Code (e.g., 'USD', 'EUR', 'GBP').
 * @param locale Optional localized format. Defaults to 'en-US'.
 */
export function formatCurrency(
  value: number,
  currency: 'USD' | 'EUR' | 'GBP' = 'USD',
  locale: string = 'en-US'
): string {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  } catch (error) {
    console.error('Error formatting currency, returning fallback:', error);
    return `${currency} ${value.toFixed(2)}`;
  }
}

/**
 * Formats a decimal percentage into a localized percentage string.
 * @param value The percentage as a decimal (e.g., 0.0842 for 8.42%).
 * @param decimals Decimals to preserve. Defaults to 2.
 * @param locale Optional localized format. Defaults to 'en-US'.
 */
export function formatPercentage(
  value: number,
  decimals: number = 2,
  locale: string = 'en-US'
): string {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'percent',
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value);
  } catch (error) {
    console.error('Error formatting percentage, returning fallback:', error);
    return `${(value * 100).toFixed(decimals)}%`;
  }
}
