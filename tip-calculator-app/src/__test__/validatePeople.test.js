import { expect, describe, it } from '@jest/globals';
import validatePeople from '../app/utils/validate/validatePeople';

describe('Validating People Input', () => {
  it('Test 1: People amount of 15', () => {
    expect(validatePeople(15)).toBe(true);
  });
  it('Test 2: People amount of 99', () => {
    expect(validatePeople(99)).toBe(true);
  });
  it('Test 3: People amount of 0', () => {
    expect(validatePeople(0)).toBe(false);
  });
  it('Test 4: People amount of 101', () => {
    expect(validatePeople(101)).toBe(false);
  });
});
