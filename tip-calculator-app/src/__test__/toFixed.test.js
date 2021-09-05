/* eslint-disable no-undef */
import { expect, describe } from '@jest/globals';
import toFixed from '../app/utils/toFixed';

describe('Fixed Number Conversion', () => {
  test('Test 1: 32.7865 to 32.78 ', () => {
    expect(toFixed(32.7865, true)).toBe(32.79);
  });

  test('Test 2: 4.2765 to 4.27', () => {
    expect(toFixed(4.2765, false)).toBe(4.27);
  });

  test('Test 3: 100.2418538 to 100.24', () => {
    expect(toFixed(100.2418538, true)).toBe(100.24);
  });

  test('Test 4: 10.2123 to 10.21', () => {
    expect(toFixed(10.2123, true)).toBe(10.21);
  });

  test('Test 5: 5.6789 does not round up to 5.68', () => {
    expect(toFixed(5.6789, false)).toBe(5.67);
  });
});
