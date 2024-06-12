/*
EXERCISE #2

Given a string of letters, create a function that returns an array with the separator that yields the longest possible substring, provided that:

The substring starts and ends with the separator.
The separator doesn't occur inside the substring other than at the ends.
If two or more separators yield substrings with the same length, they should appear in alphabetical order.
Examples
separator("supercalifragilistic") ➞ ["s"]
// The longest substring is "supercalifragilis".

separator("laboratory") ➞ ["a", "o", "r"]
// "abora", "orato" and "rator" are the same length.

separator("candle") ➞ []
// No possible substrings.

INFO
All substrings should be at least of length 2 (i.e. no single-letter substrings).
Expect lowercase alphabetic characters only.

*/


/**
 * The substring starts and ends with the separator.
 * The separator doesn't occur inside the substring other than at the ends.
 * If two or more separators yield substrings with the same length, they should appear in alphabetical order.
 * 
 * 
 * Finds the characters in a string that have the longest distance between two consecutive 
 * occurrences consecutive without the character repeating in between.
 *
 * @param {string} str 
 * @return {Array} 
*/
function separator(str) {

  if (str.length < 2 ) {
    return [];
  }

  const charMap = new Map();
  const result = new Set();
  let maxDistance = 0; 

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (charMap.has(char)) { // duplication inside
      const prevIndex = charMap.get(char); 
      const distance = i - prevIndex + 1;

      if (distance > maxDistance) { 
        maxDistance = distance;
        result.clear()
        result.add(char);
      } else if (distance === maxDistance) {
        result.add(char);
      }
    } else {
      charMap.set(char, i);
    }
  }

  return [...result];
}

separator('happyanniversaryqontigo');
separator('futureofwork');
separator('Intranet');

console.log(separator('supercalifragilis'))