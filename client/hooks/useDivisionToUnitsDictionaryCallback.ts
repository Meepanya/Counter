import { useCallback } from "react";
import createKeysWithEmptyArrayDictionary from "../utils/createKeysWithEmptyArrayDictionary";

const useDivisionToUnitsDictionaryCallback = (
  uniqueDivisions,
  divisibleUnits
) =>
  useCallback(() => {
    const divisionKeys = createKeysWithEmptyArrayDictionary(uniqueDivisions);

    divisibleUnits.map((unit) =>
      unit.dividedBy.map((division) => divisionKeys[division].push(unit))
    );

    return divisionKeys;
  }, [uniqueDivisions]);

export default useDivisionToUnitsDictionaryCallback;
