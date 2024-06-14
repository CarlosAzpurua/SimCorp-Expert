import {getLength} from '../exercise.5'

describe('Function getLength:', () => {
  test('gets the total number of non nested items in an array', () => {
    // Arrange
    const input1 = [1, [2, 3]];
    const input2 = [1, [2, [3, 4]]];
    const input3 = [1, [2, [3, [4, [5, 6]]]]];
    const input4 = [1, [2], 1, [2], 1];

    // Act and Assert
    expect(getLength(input1)).toBe(3); 
    expect(getLength(input2)).toBe(4); 
    expect(getLength(input3)).toBe(6); 
    expect(getLength(input4)).toBe(5); 
  });

  test('handles empty input', () => {
    // Arrange
    const emptyArray: any[] = [];

    // Act and Assert
    expect(getLength(emptyArray)).toBe(0); 
  });

  test('handles input with single non-array element', () => {
    // Arrange
    const singleElementArray = [1];

    // Act and Assert
    expect(getLength(singleElementArray)).toBe(1);
  });

  test('handles input with only nested arrays', () => {
    // Arrange
    const nestedArrays = [[1, 2], [[3, 4], [5, [6]]]];

    // Act and Assert
    expect(getLength(nestedArrays)).toBe(6); 
  });

  test('throws error for invalid input', () => {
    // Arrange
    const input8: any = 1234;
    const input9: any = {};
    const input10: any = 'error';

    // Act and Assert
    expect(() => getLength(input8)).toThrow(Error);
    expect(() => getLength(input9)).toThrow(Error);
    expect(() => getLength(input10)).toThrow(Error);
  })
});