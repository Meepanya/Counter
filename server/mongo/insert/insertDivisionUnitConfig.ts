import { DivisionUnitConfig } from "../../../imports/api/divisibleUnits";

export let divisionUnitConfigId = null;

async function insertDivisionUnitConfig(conf) {
  divisionUnitConfigId = await DivisionUnitConfig.insertAsync({
    ...conf,
    createdAt: new Date(),
  });
}

export default insertDivisionUnitConfig;
