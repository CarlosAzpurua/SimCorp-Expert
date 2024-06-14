"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwErrorIfInvalidType = exports.isString = exports.isArray = void 0;
/**
 * Checks if a value is an array
 *
 * @param {*} value
 * @returns {boolean} true if the value is an array, otherwise false
 */
function isArray(value) {
    return Array.isArray(value);
}
exports.isArray = isArray;
/**
 * Checks if a value is a string
 *
 * @param {*} value
 * @returns {boolean} true if the value is a string, otherwise false
 */
function isString(value) {
    return typeof value === 'string' || value instanceof String;
}
exports.isString = isString;
/**
 * Throws an error if the data type of a value does not match the expected type
 *
 * @param {*} value The value to check
 * @param {Function} expectedType The function representing the expected type
 * @throws {Error} If the data type of 'value' does not match 'expectedType'
 */
function throwErrorIfInvalidType(value, expectedType) {
    if (!expectedType(value)) {
        throw new Error(`Expected type ${expectedType}, but received ${typeof value}`);
    }
}
exports.throwErrorIfInvalidType = throwErrorIfInvalidType;
