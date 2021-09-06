import { expect, describe, it } from '@jest/globals';
import validateBill from '../app/utils/validate/validateBill';

describe('Testing Validation Functions', () => {
  it('Test 1: Bill input of 0 or below returns false', () => {
    expect(validateBill(0)).toBe(false);
  });
  it('Test 2: Bill input of 1000 or more returns true', () => {
    expect(validateBill(1000)).toBe(false);
  });
  it('Test 3: Valid input of 63.45 returns true', () => {
    expect(validateBill(63.45)).toBe(true);
  });
  it('Test 4: Valid input of 142.55 returns true', () => {
    expect(validateBill(142.55)).toBe(true);
  });
  it('Test 5: Input of e', () => {
    expect(validateBill('e')).toBe(false);
  });
});
