import { validateValue } from '../validateValue';

describe('validateValue', () => {
  test('should return correct value', () => {
    expect(validateValue(50)).toBe(true);
  });

  test('should return correct result with corner value', () => {
    expect(validateValue(100)).toBe(true);
  });

  test('should return false', () => {
    expect(validateValue(-1)).toBe(false);
  });
});
