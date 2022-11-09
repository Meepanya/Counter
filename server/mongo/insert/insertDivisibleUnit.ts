import { DivisibleUnits } from "../../../imports/api/divisibleUnits";

async function insertDivisibleUnit({ name, dividedBy }) {
  await DivisibleUnits.insertAsync({ name, dividedBy, createdAt: new Date() });
}

export default insertDivisibleUnit;
