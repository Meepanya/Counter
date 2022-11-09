import {
  DivisibleUnits,
  DivisionUnitConfig,
} from "../../../imports/api/divisibleUnits";

const createDivisionUnit = async (_id, { name, division }) => {
  const divisionConfig = await DivisionUnitConfig.findOneAsync({ _id });

  const uniqueDivisions = [...divisionConfig.uniqueDivisions];

  if (!uniqueDivisions.find((num) => num === division)) {
    uniqueDivisions.push(division);
  }

  await DivisionUnitConfig.updateAsync(
    { _id },
    {
      $set: {
        uniqueDivisions,
      },
    }
  );

  await DivisibleUnits.insertAsync({
    name,
    dividedBy: [division],
    createdAt: new Date(),
  });
};

export default createDivisionUnit;
