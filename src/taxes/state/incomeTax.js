import { STATE_INCOME_TAX_RATE } from '../constants.js';

export function calculateStateIncomeTax(grossIncome) {
    return grossIncome * STATE_INCOME_TAX_RATE;
}