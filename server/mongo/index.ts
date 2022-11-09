import {
  DivisibleUnits,
  DivisionUnitConfig,
} from "../../imports/api/divisibleUnits";
import startedDivisibleUnitsData from "../mocked/defaultDividisibleUnitsData";
import StartedDivisibleUnitDataType from "../mocked/defaultDivisibleUnitDataType";
import divisibleUnitPromise from "./promises/divisibleUnitPromise";
import insertDivisionUnitConfig from "./insert/insertDivisionUnitConfig";
import flattenArraysUniqueValues from "../utils/flattenArraysUniqueValues";
import defaultDivisionConfiguration from "../mocked/defaultDivisionConfiguration";

const onStartMongo = async () => {
  if ((await DivisionUnitConfig.find().countAsync()) === 0) {
    const divisions = flattenArraysUniqueValues(
      startedDivisibleUnitsData.map((unit) => unit.dividedBy)
    );

    await insertDivisionUnitConfig({
      ...defaultDivisionConfiguration,
      uniqueDivisions: divisions,
    });
  }

  if ((await DivisibleUnits.find().countAsync()) === 0) {
    const divisiblePromises = [];

    startedDivisibleUnitsData.map(
      ({ name, dividedBy }: StartedDivisibleUnitDataType) =>
        divisiblePromises.push(divisibleUnitPromise({ name, dividedBy }))
    );

    await Promise.all(divisiblePromises);
  }
};

export default onStartMongo;
