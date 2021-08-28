import { expect, describe } from '@jest/globals';
import tipCalculation from '../src/app/tipCalculation';

describe('Tip Calculation Module Test', () => {
  const testCalculator = tipCalculation();

  test('Test 1: Calculate tip with percentage of 15%', () => {
    expect(testCalculator.calculateTip(142.55, 0.15, 5)).toStrictEqual({
      tipTotal: 32.78,
      tipAmount: 4.27,
    });
  });

  test('Test 2: Calculate tip with percentage of 25%', () => {
    expect(testCalculator.calculateTip(76.25, 0.25, 3)).toStrictEqual({
      tipTotal: 31.77,
      tipAmount: 6.35,
    });
  });
});
