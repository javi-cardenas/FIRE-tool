import { calculateFederalIncomeTax } from './federal/incomeTax.js';
import { calculateMedicareTax } from './federal/medicareTax.js';
import { calculateSocialSecurityTax } from './federal/socialSecurityTax.js';
import { calculateStateIncomeTax } from './state/incomeTax.js';

export function calculateFederalTaxes(grossIncome) {
    console.log("Calculating Federal Taxes...");

    let federalIncomeTax = calculateFederalIncomeTax(grossIncome);
    console.log("Federal Income Tax: ", federalIncomeTax);

    let medicareTax = calculateMedicareTax(grossIncome);
    console.log("Medicare Tax: ", medicareTax);

    let socialSecurityTax = calculateSocialSecurityTax(grossIncome);
    console.log("Social Security Tax: ", socialSecurityTax);

    return federalIncomeTax + medicareTax + socialSecurityTax;
}

export function calculateTotalTax(grossIncome) {
    console.log("Calculating Total Taxes...");
    let federalTaxes = calculateFederalTaxes(grossIncome);

    let stateIncomeTax = calculateStateIncomeTax(grossIncome);
    console.log("State Income Tax: ", stateIncomeTax);

    let totalTax = federalTaxes + stateIncomeTax;
    console.log("Total Taxes: ", totalTax);

    return totalTax;
}