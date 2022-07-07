import { square } from '../square';

describe('square', () => {
  let spiedMathValue: jest.SpyInstance;

  beforeAll(() => {
    spiedMathValue = jest.spyOn(Math, 'pow');
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should return correct value', () => {
    const result = square(2);

    expect(spiedMathValue).toBeCalledTimes(1);
    expect(result).toBe(4);
  });

  test('should not call Math.pow', () => {
    const result = square(1);

    expect(spiedMathValue).not.toBeCalled();
    expect(result).toBe(1);
  });
});
