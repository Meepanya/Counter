import React from "react";
import withDivisibleUnitsData from "../hooks/withDivisibleUnitsData";
import useDivisionToUnitsDictionaryCallback from "../hooks/useDivisionToUnitsDictionaryCallback";
import StartedDivisibleUnitDataType from "../../server/mocked/defaultDivisibleUnitDataType";
import DivisibleUnitType from "../types/DivisibleUnitType";
import DivisionConfig from "../types/DivisionConfig";

interface IDivisionToUnitsDictionary {
  divisibleUnits: StartedDivisibleUnitDataType[];
  counter: number;
  divisionConfig: DivisionConfig;
  Component: React.FunctionComponent<{
    divisibleUnitsData: DivisibleUnitType[];
  }>;
}

const DivisionToUnitsDictionary: React.FunctionComponent<IDivisionToUnitsDictionary> =
  ({
    divisionConfig,
    divisibleUnits,
    counter,
    Component,
  }: IDivisionToUnitsDictionary) => {
    const divisionToUnitsDictionary = useDivisionToUnitsDictionaryCallback(
      divisionConfig?.uniqueDivisions,
      divisibleUnits
    );

    const divisibleUnitsData: DivisibleUnitType[] = withDivisibleUnitsData(
      counter,
      divisionConfig?.uniqueDivisions,
      divisionToUnitsDictionary()
    );

    return <Component divisibleUnitsData={divisibleUnitsData} />;
  };

export default DivisionToUnitsDictionary;
