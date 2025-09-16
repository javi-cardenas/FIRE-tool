import { calculateTotalTax } from './taxes/taxes.js';

let grossIncome = 48475 + 15750;
// let grossIncome = 80000;

let taxBreakdown = calculateTotalTax(grossIncome);

// Display results
console.log(`=== TAX CALCULATION FOR $${grossIncome.toLocaleString()} ===`);
console.log(`Federal Income Tax: $${taxBreakdown.federal.federalIncomeTax.toFixed(2)}`);
console.log(`Medicare Tax: $${taxBreakdown.federal.medicareTax.toFixed(2)}`);
console.log(`Social Security Tax: $${taxBreakdown.federal.socialSecurityTax.toFixed(2)}`);
console.log(`State Tax: $${taxBreakdown.state.toFixed(2)}`);
console.log(`Total Taxes: $${taxBreakdown.total.toFixed(2)}`);
console.log(`Effective Tax Rate: ${(taxBreakdown.total / grossIncome * 100).toFixed(2)}%`);


let afterTaxIncome = grossIncome - taxBreakdown.total;
console.log(`After-Tax Income: $${afterTaxIncome.toFixed(2)}`);

console.log('Needs: $' + (afterTaxIncome * 0.6).toFixed(2));
console.log('Wants: $' + (afterTaxIncome * 0.1).toFixed(2));
console.log('Savings: $' + (afterTaxIncome * 0.3).toFixed(2));
console.log();
console.log('60% Needs, 10% Wants, 30% Savings');
console.log('Monthly Needs: $' + (afterTaxIncome * 0.6 / 12).toFixed(2));
console.log('Monthly Wants: $' + (afterTaxIncome * 0.1 / 12).toFixed(2));
console.log('Monthly Savings: $' + (afterTaxIncome * 0.3 / 12).toFixed(2));