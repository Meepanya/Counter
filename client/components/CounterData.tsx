import React from "react";
import {
  DivisibleUnits,
  DivisionUnitConfig,
} from "../../imports/api/divisibleUnits";
import { useTracker } from "meteor/react-meteor-data";
import IterableCounter from "./IterableCounter";
import CounterConfiguration from "./CounterConfiguration";
import DivisionConfig from "../types/DivisionConfig";
import DivisibleUnitType from "../types/DivisibleUnitType";

const CounterData: React.FunctionComponent = () => {
  const divisionConfig: DivisionConfig = useTracker<any>(() => {
    return DivisionUnitConfig.find().fetch()[0];
  });

  const divisibleUnits: DivisibleUnitType[] = useTracker<any>(() => {
    return DivisibleUnits.find().fetch();
  });

  if (divisibleUnits.length === 0 || !divisionConfig) {
    return null;
  }

  return (
    <>
      <IterableCounter
        divisionConfig={divisionConfig}
        divisibleUnits={divisibleUnits}
      />
      <CounterConfiguration divisionConfig={divisionConfig} />
    </>
  );
};

export default CounterData;
