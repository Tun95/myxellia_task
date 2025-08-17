// Format numbers with commas (e.g., 2,300,454)
export const formatNumberWithCommas = (num: number): string => {
  const validNumber = isNaN(num) || num === null || num === undefined ? 0 : num; // Fallback to 0 if num is invalid
  return validNumber.toLocaleString();
};

// Format numbers to compact form (e.g., 1.5k, 2.3m)
export const formatNumberCompact = (num: number): string => {
  const validNumber = isNaN(num) || num === null || num === undefined ? 0 : num;

  if (validNumber >= 1000000000) {
    return (validNumber / 1000000000).toFixed(1) + "b";
  }
  if (validNumber >= 1000000) {
    return (validNumber / 1000000).toFixed(1) + "m";
  }
  if (validNumber >= 1000) {
    return (validNumber / 1000).toFixed(1) + "k";
  }
  return validNumber.toString();
};

// Format numbers to compact form with locale awareness (e.g., 1.5K, 2.3M)
export const formatNumberCompactIntl = (num: number): string => {
  const validNumber = isNaN(num) || num === null || num === undefined ? 0 : num;
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
  }).format(validNumber);
};

// Format numbers with optional decimal places
export const formatNumberWithDecimals = (
  num: number,
  decimals: number = 2
): string => {
  const validNumber = isNaN(num) || num === null || num === undefined ? 0 : num;
  return validNumber.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

// Format currency
export const formatCurrency = (
  num: number,
  currency: string = "NGN"
): string => {
  const validNumber = isNaN(num) || num === null || num === undefined ? 0 : num;
  return validNumber.toLocaleString("en-NG", {
    style: "currency",
    currency: currency,
  });
};
