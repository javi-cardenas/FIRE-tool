export const STANDARD_DEDUCTION = 15750;

export const TAX_BRACKETS = [
    { limit: 11925, rate: 0.10 },
    { limit: 48475, rate: 0.12 },
    { limit: 103350, rate: 0.22 },
    { limit: 197300, rate: 0.24 },
    { limit: 250525, rate: 0.32 },
    { limit: 626350, rate: 0.35 },
    { limit: Infinity, rate: 0.37 }
];

export const MEDICARE_TAX_RATE = 0.0145;
export const ADDITIONAL_MEDICARE_THRESHOLD = 200000;
export const ADDITIONAL_MEDICARE_TAX_RATE = 0.009;

export const SOCIAL_SECURITY_TAX_RATE = 0.062;
export const SOCIAL_SECURITY_CAP = 176100;

export const STATE_INCOME_TAX_RATE = 0.045;
