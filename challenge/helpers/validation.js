
export function isArray(value) {
  return Array.isArray(value);
}

export function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

export function throwErrorIfInvalidType(value, expectedType) {
  if (!expectedType(value)) {
    throw new Error(`Expected type ${expectedType}, but received ${typeof value}`);
  }
}