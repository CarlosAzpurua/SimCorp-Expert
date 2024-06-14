/*
Exercise #5

The length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:

Example
  [1, [2, 3]]
  2 elements, number 1 and array [2, 3]

Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.


Expected Result 
  getLength([1, [2, 3]]) ➞ 3
  getLength([1, [2, [3, 4]]]) ➞ 4
  getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6
  getLength([1, [2], 1, [2], 1]) ➞ 5
*/

/**
 * Gets the total number of non-nested items in an array. 
 * 
 * @param {any[]} arr 
 * @return {number} 
 */
export function getLength(arr: any[]): number {
  return arr.reduce((count, element) => {

    return count + (Array.isArray(element) ? getLength(element) : 1 ); // Recursively count if element is an array
  
  }, 0);
}

getLength([1, [2, 3]]); //➞ 3
getLength([1, [2, [3, 4]]]); //➞ 4
getLength([1, [2, [3, [4, [5, 6]]]]]); //➞ 6
getLength([1, [2], 1, [2], 1]); //➞ 5