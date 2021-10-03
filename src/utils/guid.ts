export const generateGuid = (): string => {
  // eslint-disable-next-line no-bitwise
  const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  const guid = `
    ${S4().repeat(2)}
    ${`-${S4()}`.repeat(4)}
    ${S4().repeat(2)}
  `
    .replace(/\r?\n|\r/g, ' ')
    .replace(/\s/g, '');

  return guid;
};
