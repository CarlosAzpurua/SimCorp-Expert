import counter from '../exercise.1';

describe('Function counter: ', () => {
  test('counts the number of boomerangs correctly', () => {

    // Arrange
    const input0 = [1, 4, 1];
    const input1 = [9, 5, 9, 5, 1, 1, 1]; 
    const input2 = [5, 6, 6, 7, 6, 3, 9]; 
    const input3 = [4, 4, 4, 9, 9, 9, 9];
    const input4 = [4, '4', 4, '9', 9, 9, 9];
    const input5 = ['2', 1, '2'];
    const input6 = [1, 1, 1];
    const input7 = ['example']
    const input8 = 'randomString';
    const input9 = 1234;
    const input10 = {};

    // Act and Assert
    expect(counter(input0)).toBe(1);
    expect(counter(input1)).toBe(2);
    expect(counter(input2)).toBe(1);
    expect(counter(input3)).toBe(0);
    expect(counter(input4)).toBe(1);
    expect(counter(input5)).toBe(1);
    expect(counter(input6)).toBe(0);
    expect(counter(input7)).toBe(0);
    expect(() => counter(input8)).toThrow(Error);
    expect(() => counter(input9)).toThrow(Error);
    expect(() => counter(input10)).toThrow(Error);
  });
});