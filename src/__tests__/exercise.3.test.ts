import {longestSubstring} from '../exercise.3'

describe('Function longestSubstring:', () => {
  test('finds the longest substring with no repeated characters', () => {
    expect(longestSubstring("aaaaaa")).toBe("a");
    expect(longestSubstring("abcde")).toBe("abcde");
    expect(longestSubstring("abcda")).toBe("abcd");
    expect(longestSubstring("abcdefgabcbb")).toBe("abcdefg");
  });
});