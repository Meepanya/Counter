function flattenArraysUniqueValues(arr) {
  return [...new Set(arr.flat())];
}

export default flattenArraysUniqueValues;
