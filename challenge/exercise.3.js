/*
EXERCISE #3

Write a function that returns the longest non-repeating substring for a string input.

Expected Result   
longestSubstring("abcabcbb") ➞ "abc"
longestSubstring("aaaaaa") ➞ "a"
longestSubstring("abcde") ➞ "abcde"
longestSubstring("abcda") ➞ "abcd


INFO
If multiple substrings tie in length, return the one which occurs first.
Bonus: Can you solve this problem in linear time?

*/

/**
 * This function find the longest substring in a string with no repeated characters.
 *
 * @param {string} str 
 * @return {string} 
 */
function longestSubstring(str) {
	if (str.length === 0) return "";
  if (str.length === 1) return str;

  let maxLength = 0;
  let start = 0;
  let seen = new Map();
  let maxSubstring = "";

  for (let end = 0; end < str.length; end++) {
    if (seen.has(str[end])) {
			//Math.max to be sure to advance/move the starting index only if is necessary
      start = Math.max(seen.get(str[end]) + 1, start);
    }
    seen.set(str[end], end);
    if (end - start + 1 > maxLength) {
      maxLength = end - start + 1;
      maxSubstring = str.slice(start, end + 1);
    }
  }

  return maxSubstring;
}

console.log(
	longestSubstring("aaaaaa"),
	longestSubstring("abcde"),
	longestSubstring("abcda"),
	longestSubstring("abcdefgabcbb"),
)

