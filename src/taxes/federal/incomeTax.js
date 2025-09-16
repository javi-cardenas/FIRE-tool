import { STANDARD_DEDUCTION, TAX_BRACKETS } from '../constants.js';

export function calculateFederalIncomeTax(grossIncome) {
    let remainingIncome = grossIncome - STANDARD_DEDUCTION;
    let federalIncomeTax = 0;
    let previousLimit = 0;

    for (let bracket of TAX_BRACKETS) {
        if (remainingIncome <= 0) break;
        
        const bracketRange = bracket.limit - previousLimit;
        const taxableInThisBracket = Math.min(remainingIncome, bracketRange);
        
        if (taxableInThisBracket > 0) {
            federalIncomeTax += taxableInThisBracket * bracket.rate;
            remainingIncome -= taxableInThisBracket;
        }
        
        previousLimit = bracket.limit;
    }

    return federalIncomeTax;
}
