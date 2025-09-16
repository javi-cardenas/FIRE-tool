import { calculateFederalIncomeTax } from './federal/incomeTax.js';
import { calculateMedicareTax } from './federal/medicareTax.js';
import { calculateSocialSecurityTax } from './federal/socialSecurityTax.js';
import { calculateStateIncomeTax } from './state/incomeTax.js';

export function calculateFederalTaxes(grossIncome) {
    let federalIncomeTax = calculateFederalIncomeTax(grossIncome);
    let medicareTax = calculateMedicareTax(grossIncome);
    let socialSecurityTax = calculateSocialSecurityTax(grossIncome);

    return {
        federalIncomeTax,
        medicareTax,
        socialSecurityTax,
        total: federalIncomeTax + medicareTax + socialSecurityTax
    };
}

export function calculateTotalTax(grossIncome) {
    let federalTaxes = calculateFederalTaxes(grossIncome);
    let stateIncomeTax = calculateStateIncomeTax(grossIncome);
    let totalTax = federalTaxes.total + stateIncomeTax;

    return {
        federal: federalTaxes,
        state: stateIncomeTax,
        total: totalTax
    };
}