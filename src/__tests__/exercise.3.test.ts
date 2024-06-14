import {longestSubstring} from '../exercise.3'

describe('Function longestSubstring:', () => {
  test('finds the longest substring with no repeated characters', () => {
    // Arrange
    const input1 = "aaaaaa"; 
    const input2 = "abcde"; 
    const input3 = "abcda"; 
    const input4 = "abcdefgabcbb"; 

    // Act and Assert
    expect(longestSubstring(input1)).toBe("a"); 
    expect(longestSubstring(input2)).toBe("abcde"); 
    expect(longestSubstring(input3)).toBe("abcd"); 
    expect(longestSubstring(input4)).toBe("abcdefg"); 
  });

  test('handles empty input', () => {
    // Arrange
    const emptyString = "";

    // Act and Assert
    expect(longestSubstring(emptyString)).toBe(""); 
  });

  test('handles input with single character', () => {
    // Arrange
    const singleChar = "a";

    // Act and Assert
    expect(longestSubstring(singleChar)).toBe("a");
  });

  test('handles input with two identical characters', () => {
    // Arrange
    const twoIdenticalChars = "aa";

    // Act and Assert
    expect(longestSubstring(twoIdenticalChars)).toBe("a"); 
  });

  test('handles input with two different characters', () => {
    // Arrange
    const twoDifferentChars = "ab";

    // Act and Assert
    expect(longestSubstring(twoDifferentChars)).toBe("ab"); 
  });

  test('throws error for invalid input', () => {
    // Arrange
    const input8: any = 1234;
    const input9: any = {};
    const input10: any = ['error'];

    // Act and Assert
    expect(() => longestSubstring(input8)).toThrow(Error);
    expect(() => longestSubstring(input9)).toThrow(Error);
    expect(() => longestSubstring(input10)).toThrow(Error);
  })
});