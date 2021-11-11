export const extractFromEnv = <T extends string>(envVariable: T | undefined): T => {
  if (!envVariable) {
    throw new Error(`Env variable does not exist!`);
  }

  return envVariable;
};
