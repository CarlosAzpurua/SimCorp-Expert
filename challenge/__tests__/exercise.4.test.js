import sizeParentheses from '../exercise.4'

describe('Function sizeParentheses:', () => {
  test('calculates the size of the longest substring of balanced parentheses', () => {
    expect(sizeParentheses("(()")).toBe(2);
    expect(sizeParentheses(")()())")).toBe(4);
    expect(sizeParentheses("()))))(()())(")).toBe(6);
  });
});