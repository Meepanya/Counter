import React, { useState } from "react";

import InputComponent from "./InputComponent";
import DivisionUnitConfiguration from "./DivisionUnitConfiguration";
import updateDivisionUnitConfig from "../../imports/api/update/updateDivisionUnitConfig";
import DivisionConfig from "../types/DivisionConfig";

interface ICounterConfiguration {
  divisionConfig: DivisionConfig;
}

const formValidation = (
  setError,
  { startFrom, interval, min, max }
): boolean => {
  if (isNaN(startFrom) || isNaN(interval) || isNaN(min) || isNaN(max)) {
    setError("Please provide value.");
    return true;
  }

  if (min > startFrom) {
    setError("Min range can't be greater than starting value");
    return true;
  }

  if (interval <= 0) {
    setError("Interval can't be negative or zero.");
    return true;
  }

  if (min >= max) {
    setError("Min range can't be greater or equal than max range.");
    return true;
  }

  return false;
};

const CounterConfiguration: React.FunctionComponent<ICounterConfiguration> = ({
  divisionConfig,
}: ICounterConfiguration) => {
  const [startFrom, setStartFrom] = useState(divisionConfig.startFrom);
  const [interval, setInterval] = useState(divisionConfig.interval);
  const [min, setMin] = useState(divisionConfig.min);
  const [max, setMax] = useState(divisionConfig.max);
  const [error, setError] = useState("");

  return (
    <div className="CounterConfiguration">
      <div className="CounterConfiguration__Wrap">
        <div className="Blue-1-32pxMedium ">Counter Configuration</div>

        <div style={{ height: "16px" }} />

        <form
          className="CounterConfiguration__Form"
          onSubmit={async (e) => {
            e.preventDefault();

            if (formValidation(setError, { startFrom, interval, min, max })) {
              return;
            }

            await updateDivisionUnitConfig(divisionConfig._id, {
              startFrom,
              interval,
              min,
              max,
            });
            window.location.reload();
          }}
        >
          <div className="Row">
            <div style={{ marginRight: "24px" }}>
              <InputComponent
                title="Start From -&nbsp;"
                setValue={(e) => setStartFrom(parseFloat(e.target.value))}
                className="Input"
                type="number"
                value={startFrom}
                name="name"
                step="0.01"
                text="Starting Value Input"
              />

              <InputComponent
                title="Interval -&nbsp;"
                setValue={(e) => setInterval(parseFloat(e.target.value))}
                className="Input"
                type="number"
                value={interval}
                name="name"
                step="0.01"
                text="Interval Input"
              />
            </div>

            <div style={{ marginRight: "64px" }}>
              <InputComponent
                title="Min Range -&nbsp;"
                setValue={(e) => setMin(parseFloat(e.target.value))}
                className="Input"
                type="number"
                value={min}
                name="name"
                step="0.01"
                text="Min Range Input"
              />

              <InputComponent
                title="Max Range -&nbsp;"
                setValue={(e) => setMax(parseFloat(e.target.value))}
                className="Input"
                type="number"
                step="0.01"
                value={max}
                name="name"
                text="Max Range Input"
              />
            </div>

            <DivisionUnitConfiguration divisionConfigId={divisionConfig._id} />
          </div>

          <button type="submit" className="BtnGreen">
            Confirm
          </button>
          <div style={{ height: "8px" }} />
          {error !== "" && <p className="Red-18pxMedium">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default CounterConfiguration;
