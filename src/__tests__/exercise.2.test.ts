import {separator} from '../exercise.2';

describe('Function separator:', () => {
  test('returns an array with the separator that yields the longest possible substring', () => {
    expect(separator('supercalifragilistic')).toEqual(['s']);
    expect(separator('laboratory')).toEqual(['a', 'o', 'r']);
    expect(separator('candle')).toEqual([]);
  });

  test('handles empty input', () => {
    // Arrange
    const emptyString = '';

    // Act and Assert
    expect(separator(emptyString)).toEqual([]);
  });

  test('handles input with single character', () => {
    // Arrange
    const singleChar = 'a';

    // Act and Assert
    expect(separator(singleChar)).toEqual([]); 
  });

  test('handles input with two identical characters', () => {
    // Arrange
    const twoIdenticalChars = 'aa';

    // Act and Assert
    expect(separator(twoIdenticalChars)).toEqual(['a']); 
  });

  test('handles input with two different characters', () => {
    // Arrange
    const twoDifferentChars = 'ab';

    // Act and Assert
    expect(separator(twoDifferentChars)).toEqual([]); 
  });

  test('throws error for invalid input', () => {
    // Arrange
    const input8: any = 1234;
    const input9: any = {};
    const input10: any = ['error'];

    // Act and Assert
    expect(() => separator(input8)).toThrow(Error);
    expect(() => separator(input9)).toThrow(Error);
    expect(() => separator(input10)).toThrow(Error);
  })
});
