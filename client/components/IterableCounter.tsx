import React, { useState } from "react";
import DivisibleUnitType from "../types/DivisibleUnitType";
import DivisionConfig from "../types/DivisionConfig";
import DivisionTable from "./DivisionTable";
import DivisionToUnitsDictionary from "./DivisionToUnitsDictionary";

interface IIterableCounter {
  divisionConfig: DivisionConfig;
  divisibleUnits: DivisibleUnitType[];
}

const IterableCounter: React.FunctionComponent<IIterableCounter> = ({
  divisionConfig,
  divisibleUnits,
}: IIterableCounter) => {
  const [counter, setCounter] = useState(divisionConfig.startFrom);

  const increment = () => {
    if (divisionConfig.max < counter + divisionConfig.interval) {
      setCounter(divisionConfig.min);
      return;
    }

    setCounter((prev) =>
      parseFloat((prev + divisionConfig.interval).toFixed(2))
    );
  };

  return (
    <div className="IterableCounter">
      <div className="IterableCounter__Wrap">
        <div className="PureWhite32pxMedium">Counter Table</div>

        <div style={{ height: "32px" }} />

        <DivisionToUnitsDictionary
          counter={counter}
          divisionConfig={divisionConfig}
          divisibleUnits={divisibleUnits}
          Component={DivisionTable}
        />

        <div style={{ height: "24px" }} />

        <div className="Row">
          <div className="PureWhite18pxMedium">Iteration Result - &nbsp;</div>
          <div className="Secondary20pxMedium">{counter}</div>
        </div>

        <div style={{ height: "24px" }} />

        <button className="BtnWhiteOutline" onClick={increment}>
          Interact
        </button>
      </div>
    </div>
  );
};

export default IterableCounter;
