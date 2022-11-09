import { DivisionUnitConfig } from "../../../imports/api/divisibleUnits";

const updateDivisionUnitConfig = async (_id, conf) => {
  await DivisionUnitConfig.updateAsync(
    { _id },
    {
      $set: {
        ...conf,
      },
    }
  );
};

export default updateDivisionUnitConfig;
