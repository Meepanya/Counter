import { useTracker } from "meteor/react-meteor-data";
import createKeysWithEmptyArrayDictionary from "../utils/createKeysWithEmptyArrayDictionary";

const withDivisibleUnitsData = (
  counter: number,
  uniqueDivisions: number[],
  divisionToUnitsDictionary: any
) =>
  useTracker(() => {
    const divisibleTableData =
      createKeysWithEmptyArrayDictionary(uniqueDivisions);

    Object.fromEntries(
      Object.entries(divisionToUnitsDictionary).map(([key, value]: any) => {
        if (counter % key === 0) {
          divisibleTableData[key].push(...value);
          return { ...value };
        }

        return { ...value };
      })
    );

    return divisibleTableData;
  }, [counter]);

export default withDivisibleUnitsData;
