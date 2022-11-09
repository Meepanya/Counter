import React from "react";
import DivisibleUnitType from "../types/DivisibleUnitType";

interface IDivisionTable {
  divisibleUnitsData: DivisibleUnitType[];
}

const DivisionTable: React.FunctionComponent<IDivisionTable> = ({
  divisibleUnitsData,
}: IDivisionTable) => {
  const columns = [];
  const rows = [];

  let columnWordsAmount = 0;

  // Object mapping through divisionKeysToUnitsValueDictionary
  Object.fromEntries(
    Object.entries(divisibleUnitsData).map(([division, units]: any) => {
      if (units.length > columnWordsAmount) {
        columnWordsAmount = units.length;
      }

      rows.push(
        <tr key={division}>
          <td>{division}</td>

          {units.map((unit) => (
            <td key={unit?._id}>{unit.name}</td>
          ))}
        </tr>
      );
      return { ...units };
    })
  );

  for (let i = 0; i <= columnWordsAmount; i += 1) {
    columns.push(<th key={i}>{i === 0 ? "Divisions" : "Words"}</th>);
  }

  return (
    <table className="DivisionTable">
      <tbody>
        <tr>{columns.map((column) => column)}</tr>
        {rows.map((row) => row)}
      </tbody>
    </table>
  );
};

export default DivisionTable;
