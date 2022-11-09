import React, { useState } from "react";
import createDivisionUnit from "../../imports/api/create/createDivisionUnit";
import InputComponent from "./InputComponent";

interface IDivisionUnitConfiguration {
  divisionConfigId: string;
}

const formValidation = (setError, { division, name }) => {
  if (isNaN(division)) {
    setError("Please provide division value.");
    return true;
  }

  if (division === 0) {
    setError("Division can't be equal 0.");
    return true;
  }

  if (name === "") {
    setError("Please provide word string.");
    return true;
  }
};

const DivisionUnitConfiguration: React.FunctionComponent<IDivisionUnitConfiguration> =
  ({ divisionConfigId }: IDivisionUnitConfiguration) => {
    const [division, setDivision] = useState(0);
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (formValidation(setError, { division, name })) {
        return;
      }

      await createDivisionUnit(divisionConfigId, {
        division,
        name,
      });

      window.location.reload();
    };

    return (
      <div>
        <div className="DivisionUnitConfiguration__Form">
          <div className="Row">
            <InputComponent
              title="Division -&nbsp;"
              setValue={(e) => setDivision(parseFloat(e.target.value))}
              className="Input"
              type="number"
              value={division}
              name="division"
              step="0.01"
              text="Division Input"
            />

            <InputComponent
              title="Word -&nbsp;"
              setValue={(e) => setName(e.target.value)}
              className="Input"
              type="text"
              value={name}
              name="word"
              text="Word Input"
            />
          </div>
          <div style={{ width: "24px" }} />

          <button
            type="button"
            className="BtnGreen"
            onClick={async (e) => await handleSubmit(e)}
          >
            Add Division
          </button>
          <div style={{ height: "8px" }} />
          {error !== "" && <p className="Red-18pxMedium">{error}</p>}
        </div>
      </div>
    );
  };

export default DivisionUnitConfiguration;
