import { calculateTotalTax } from './taxes/taxes.js';

let grossIncome = 80000;

let taxBreakdown = calculateTotalTax(grossIncome);

// Display results
console.log(`=== TAX CALCULATION FOR $${grossIncome.toLocaleString()} ===`);
console.log(`Federal Income Tax: $${taxBreakdown.federal.federalIncomeTax.toFixed(2)}`);
console.log(`Medicare Tax: $${taxBreakdown.federal.medicareTax.toFixed(2)}`);
console.log(`Social Security Tax: $${taxBreakdown.federal.socialSecurityTax.toFixed(2)}`);
console.log(`State Tax: $${taxBreakdown.state.toFixed(2)}`);
console.log(`Total Taxes: $${taxBreakdown.total.toFixed(2)}`);
console.log(`After-Tax Income: $${grossIncome - taxBreakdown.total.toFixed(2)}`);
console.log(`Effective Tax Rate: ${(taxBreakdown.total / grossIncome * 100).toFixed(2)}%`);