import getLength from '../exercise.5'

describe('Function getLength:', () => {
  test('gets the total number of non nested items in an array', () => {
    expect(getLength([1, [2, 3]])).toBe(3);
    expect(getLength([1, [2, [3, 4]]])).toBe(4);
    expect(getLength([1, [2, [3, [4, [5, 6]]]]])).toBe(6);
    expect(getLength([1, [2], 1, [2], 1])).toBe(5);
    expect(getLength([])).toBe(0);
    expect(getLength([[], []])).toBe(0);
    expect(getLength([[1], [2, [3, 4], 5], 6])).toBe(6);
  });
});