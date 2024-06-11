import getLength from '../exercise.5'

test('Description example of what exercise5 should do', () => {
  
  expect(
    getLength([1, [2, 3]])
  ).toBe('expected output');

  /**
    getLength([1, [2, 3]]);
    getLength([1, [2, [3, 4]]]);
    getLength([1, [2, [3, [4, [5, 6]]]]]);
    getLength([1, [2], 1, [2], 1]);
   */
});