const createKeysWithEmptyArrayDictionary = (arr) =>
  (arr || []).reduce(
    (accumulator, value, index) => ({ ...accumulator, [value]: [] }),
    {}
  );

export default createKeysWithEmptyArrayDictionary;
