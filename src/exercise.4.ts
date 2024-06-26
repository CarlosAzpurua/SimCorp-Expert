/*
Exercise #4

Given a string containing just the characters ( and ), find the length of the longest valid (well-formed) parentheses substring.

Expected Result 
sizeParentheses("(()") ➞ 2
// Longest valid parentheses substring is "()"

sizeParentheses(")()())") ➞ 4
// Longest valid parentheses substring is "()()"

sizeParentheses("()))))(()())(") ➞ 6

*/

import { isString, throwErrorIfInvalidType } from "./helpers/validation";

/**
 * Calculates the size of the longest substring of balanced parentheses in a string
 *
 * @param {string} str 
 * @return {number} 
 */
export function sizeParentheses(str: string): number {
  
  throwErrorIfInvalidType(str, isString);

  const CLOSE_PAREN = ')';
  const OPEN_PAREN = '(';

  if (!str.includes(OPEN_PAREN) || !str.includes(CLOSE_PAREN) || str.length === 0) return 0; 

  let maxLength = 0; 
  
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];

    if (currentChar === OPEN_PAREN && str[i+1] === CLOSE_PAREN) {
      maxLength += 2;
      i++; // Move to the next character after the closed parenthesis
    }
  }

  return maxLength; 
}

sizeParentheses("(()"); // ➞ 2
sizeParentheses(")()())"); // ➞ 4
sizeParentheses("()))))(()())("); // ➞ 6