import {sizeParentheses} from '../exercise.4'

describe('Function sizeParentheses:', () => {
  test('calculates the size of the longest substring of balanced parentheses', () => {
    // Arrange
    const input1 = "(()";
    const input2 = ")()())";
    const input3 = "()))))(()())(";

    // Act and Assert
    expect(sizeParentheses(input1)).toBe(2); 
    expect(sizeParentheses(input2)).toBe(4); 
    expect(sizeParentheses(input3)).toBe(6); 
  });

  test('handles input with no balanced parentheses', () => {
    // Arrange
    const inputNoParentheses = "abcde";

    // Act and Assert
    expect(sizeParentheses(inputNoParentheses)).toBe(0); 
  });

  test('handles empty input', () => {
    // Arrange
    const emptyString = "";

    // Act and Assert
    expect(sizeParentheses(emptyString)).toBe(0); 
  });

  test('handles input with single character', () => {
    // Arrange
    const singleChar = "(";

    // Act and Assert
    expect(sizeParentheses(singleChar)).toBe(0);
  });

  test('handles input with only one type of parenthesis', () => {
    // Arrange
    const singleTypeParentheses = ")))))))))";

    // Act and Assert
    expect(sizeParentheses(singleTypeParentheses)).toBe(0);
  });

  test('throws error for invalid input', () => {
    // Arrange
    const input8: any = 1234;
    const input9: any = {};
    const input10: any = ['error'];

    // Act and Assert
    expect(() => sizeParentheses(input8)).toThrow(Error);
    expect(() => sizeParentheses(input9)).toThrow(Error);
    expect(() => sizeParentheses(input10)).toThrow(Error);
  })
});