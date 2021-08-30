/* eslint-disable no-undef */
import { expect, describe } from '@jest/globals';
import tipCalculation from '../src/app/tipCalculation';

describe('Tip Calculation Module Test', () => {
  const testCalculator = tipCalculation();

  test('Test 1: Calculate tip with percentage of 15%', () => {
    expect(testCalculator.calculateTip(142.55, 0.15, 5)).toStrictEqual({
      tipTotal: 32.79,
      tipAmount: 4.27,
    });
  });

  test('Test 2: Calculate tip with percentage of 25%', () => {
    expect(testCalculator.calculateTip(76.25, 0.25, 3)).toStrictEqual({
      tipTotal: 31.77,
      tipAmount: 6.35,
    });
  });

  test('Test 3: Calculate tip with percentage of 10% with a bill of 124.36 and 4 people', () => {
    expect(testCalculator.calculateTip(124.36, 0.1, 4)).toStrictEqual({
      tipTotal: 34.2,
      tipAmount: 3.1,
    });
  });

  test('Test 4: Calculate tip with percentage of 8.25 with a bill of 62.56 and 2 people', () => {
    expect(testCalculator.calculateTip(62.56, 0.0825, 2)).toStrictEqual({
      tipTotal: 33.86,
      tipAmount: 2.58,
    });
  });
});
