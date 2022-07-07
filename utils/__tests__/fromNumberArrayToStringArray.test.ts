import { fromNumberArrayToStringArray } from '../fromNumberArrayToStringArray';

describe('fromNumberArrayToStringArray', () => {
  test('should return correct value', () => {
    const result = fromNumberArrayToStringArray([1, 2, 3]);

    expect(result).toEqual(['1', '2', '3']);
  });
});
