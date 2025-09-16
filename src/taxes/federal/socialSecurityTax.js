import { SOCIAL_SECURITY_TAX_RATE, SOCIAL_SECURITY_CAP } from '../constants.js';

export function calculateSocialSecurityTax(grossIncome) {
    let socialSecurityTax = grossIncome * SOCIAL_SECURITY_TAX_RATE;

    if (grossIncome > SOCIAL_SECURITY_CAP) {
        socialSecurityTax = SOCIAL_SECURITY_CAP * SOCIAL_SECURITY_TAX_RATE;
    }

    return socialSecurityTax;
}
