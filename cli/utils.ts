const spliceByIndex = <T>(array: T[], index: number) =>
  array.slice(0, index).concat(array.slice(index + 1));

export const getScriptArguments = () => spliceByIndex(spliceByIndex(process.argv, 0), 0);
