import insertDivisibleUnit from "../insert/insertDivisibleUnit";

const divisibleUnitPromise = ({ name, dividedBy }) => {
  return new Promise(async (resolve, reject) => {
    try {
      await insertDivisibleUnit({ name, dividedBy });

      return resolve({
        name,
        dividedBy,
      });
    } catch (error) {
      return reject(error);
    }
  });
};

export default divisibleUnitPromise;
