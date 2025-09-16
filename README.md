# Taxes
// Assumptions
- not self-employed
- SINGLE filing Status
- Standard Deduction
- fixed state tax rate
- only current year (Should expand to keep the next 7 years)

# FIRE Movement

## Introduction
What is the FIRE movement? Brief history and rational behind it. Limitations to consider (low income job where savings rate may not be feasible)

### Years of work for 1 year of living expenses

savings_rate = savings / income

years_of_work = (1 - savings_rate) / savings_rate

| Savings Rate | Years of Work |
| - | - |
| 10% | 9 |
| 25% | 3 |
| 50% | 1 |
| 75% | 1/3 |

At a 75% savings rate, ignoring investment growth, it would take fewer than 10 years to accumulate 25 times annual living expenses — the level sometimes associated with the 4% rule for sustainable withdrawals. 

Based on this reasoning, advocates often aim for savings rates of 50% or more of income

- LeanFIRE: emphasizes achieving financial independence by maintaining very low living expenses, allowing a smaller investment portfolio to be sufficient.[12]
- FatFIRE: refers to pursuing early retirement while maintaining or exceeding a middle-class standard of living, requiring a larger savings target than LeanFIRE.[12]
- CoastFIRE: involves saving and investing aggressively in the early years until the portfolio is projected to grow to a sufficient level through compound interest alone, after which further contributions may be reduced or stopped.[13]
- BaristaFIRE: describes semi-retirement supported by part-time or lower-stress work, which may also provide benefits such as health insurance.[14][15] Day-to-day expenses are covered through a mix of employment income and modest portfolio withdrawals.[16] The investment portfolio is meant to grow with this approach.

## Core FIRE Equations

### 1. FIRE Number (Total needed to retire)
```
FIRE Number = Annual Expenses × 25
```
*Based on the 4% rule - you can safely withdraw 4% annually from your portfolio.*

### 2. Current Progress
```
FI Progress = Current Net Worth / FIRE Number × 100%
```

### 3. Time to FIRE (No additional contributions)
```
Years to FIRE = ln(FIRE Number / Current Savings) / ln(1 + Real Return Rate)
```
*This assumes no additional contributions.*

### 4. Time to FIRE with Regular Contributions
```
Years to FIRE = ln((FIRE Number × r / Annual Savings) + 1) / ln(1 + r)
```
*Where r = real annual return rate (typically 4-7% after inflation)*

### 5. Required Savings Rate
```
Savings Rate = (Annual Income - Annual Expenses) / Annual Income × 100%
```

### 6. Annual Expenses Multiple (Simplified)
```
Years to FIRE ≈ (1 / Savings Rate) - 10
```
*Simplified approximation assuming 5% real returns.*

## Supporting Calculations

### 7. Real Return Rate
```
Real Return = ((1 + Nominal Return) / (1 + Inflation Rate)) - 1
```

### 8. Future Value with Regular Contributions
```
FV = PMT × (((1 + r)^n - 1) / r) + PV × (1 + r)^n
```
*Where PMT = regular payment, PV = present value, r = rate, n = periods*

### 9. Coast FIRE Number
```
Coast FIRE = Current Savings × (1 + r)^(Years until traditional retirement age)
```

### 10. FIRE Variations
- **Lean FIRE**: `Annual Expenses × 25` (basic lifestyle)
- **Regular FIRE**: `Annual Expenses × 25-30` (current lifestyle) 
- **Fat FIRE**: `Annual Expenses × 30-40` (luxury lifestyle)

## Key Variables for Your JavaScript Tool

- **Current net worth**
- **Annual income**
- **Annual expenses**
- **Expected annual return rate** (7-10% nominal, 4-7% real)
- **Inflation rate** (typically 2-3%)
- **Current age**
- **Target retirement age**

## JavaScript Implementation Notes

- Use `Math.log()` for natural logarithm calculations
- Consider using libraries like `decimal.js` for precise financial calculations
- The time-to-FIRE calculations are the most mathematically complex
- Most other formulas are straightforward ratios and percentages
- Remember to validate inputs and handle edge cases (divide by zero, negative values, etc.)

## Common Assumptions

- **4% Rule**: Based on Trinity Study - assumes you can withdraw 4% of your portfolio annually
- **Real Returns**: Typically 4-7% after accounting for inflation
- **Inflation**: Usually estimated at 2-3% annually
- **Safe Withdrawal Rate**: Conservative estimate for portfolio longevity