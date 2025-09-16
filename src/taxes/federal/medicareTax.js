import { MEDICARE_TAX_RATE, ADDITIONAL_MEDICARE_THRESHOLD,ADDITIONAL_MEDICARE_TAX_RATE } from '../constants.js';

export function calculateMedicareTax(grossIncome) {
    let medicareTax = grossIncome * MEDICARE_TAX_RATE;

    if (grossIncome > ADDITIONAL_MEDICARE_THRESHOLD) {
        let additionalMedicareTax = (grossIncome - ADDITIONAL_MEDICARE_THRESHOLD) * ADDITIONAL_MEDICARE_TAX_RATE;
        medicareTax += additionalMedicareTax;
    }

    return medicareTax;
}