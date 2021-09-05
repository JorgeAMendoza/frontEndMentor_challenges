import { expect, describe, it } from '@jest/globals';
import validatePercent from '../app/utils/validate/validatePercent';

describe('Validate tip percentage', () => {
  it('Test 1: Default tip percentage of 10%', () => {
    expect(validatePercent(0.1)).toBe(true);
  });
  it('Test 2: Default tip percentage of 25%', () => {
    expect(validatePercent(0.25)).toBe(true);
  });
  it('Test 3: Custom value of 9.50%', () => {
    expect(validatePercent(0.095)).toBe(true);
  });
  it('Test 4: Custom value of 99.99%', () => {
    expect(validatePercent(0.9999)).toBe(true);
  });
  it('Test 5: Custom value of -12.5', () => {
    expect(validatePercent(-0.125)).toBe(false);
  });
  it('Test 6: Custom value of 100.00', () => {
    expect(validatePercent(100.0)).toBe(false);
  });
});
