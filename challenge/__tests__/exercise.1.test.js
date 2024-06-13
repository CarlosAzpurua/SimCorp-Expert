import counter from './exercise.1';

describe('counter', () => {
  test('counts the number of boomerangs correctly', () => {
    expect(counter([9, 5, 9, 5, 1, 1, 1])).toBe(2);
    expect(counter([5, 6, 6, 7, 6, 3, 9])).toBe(1);
    expect(counter([4, 4, 4, 9, 9, 9, 9])).toBe(0);
    expect(counter([1, 4, 1])).toBe(1);
    expect(counter([1, 1, 1])).toBe(0);
    expect(counter([1, 4, 1, 4, 1, 4, 1])).toBe(3);
    expect(counter([])).toBe(0);
    expect(counter([1])).toBe(0);
    expect(counter([1, 2])).toBe(0);
  });
});