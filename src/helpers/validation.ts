/**
 * Checks if a value is an array
 * 
 * @param {*} value 
 * @returns {boolean} true if the value is an array, otherwise false
 */
export function isArray(value: any): boolean {
  return Array.isArray(value);
}

/**
 * Checks if a value is a string
 * 
 * @param {*} value 
 * @returns {boolean} true if the value is a string, otherwise false
 */
export function isString(value: any): boolean {
  return typeof value === 'string' || value instanceof String;
}

/**
 * Throws an error if the data type of a value does not match the expected type
 * 
 * @param {*} value The value to check
 * @param {Function} expectedType The function representing the expected type
 * @throws {Error} If the data type of 'value' does not match 'expectedType'
 */
export function throwErrorIfInvalidType(value: (string | number)[] | string, expectedType: any): void {
  if (!expectedType(value)) {
    throw new Error(`Expected type ${expectedType}, but received ${typeof value}`);
  }
}