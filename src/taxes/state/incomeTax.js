import { STANDARD_DEDUCTION, STATE_INCOME_TAX_RATE } from '../constants.js';

export function calculateStateIncomeTax(grossIncome) {
    return (grossIncome - STANDARD_DEDUCTION) * STATE_INCOME_TAX_RATE;
}