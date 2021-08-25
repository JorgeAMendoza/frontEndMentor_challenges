import { expect, describe } from '@jest/globals';
import toFixed from '../src/app/utils/toFixed';

describe('Fixed Number Conversion', () => {
  test('Test 1: 32.78 to 32.78 ', () => {
    expect(toFixed(32.7865, 2)).toBe(32.78);
  });

  test('Test 2: 4.2765 to 4.27', () => {
    expect(toFixed(4.2765, 2)).toBe(4.27);
  });

  test('Test 3: 100.2418538 to 100.24', () => {
    expect(toFixed(100.2418538, 2)).toBe(100.24);
  });
});
