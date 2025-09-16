import { calculateTotalTax } from './taxes/taxes.js';

let grossIncome = 80000;

let totalTaxes = calculateTotalTax(grossIncome);

console.log("Total Taxes in 2025: ", totalTaxes);
console.log("After-Tax Income: ", grossIncome - totalTaxes);