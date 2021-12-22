/**
 * @description
 * Generate pseudo random id.
 *
 * @example
 * const guid = generateGuid();
 * console.log(guid); // 8a878a87-0e55-0e55-0e55-0e556bbf6bbf
 */
export const generateGuid = (): string => {
  // eslint-disable-next-line no-bitwise
  const S4 = () =>
    (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);

  const withoutEscapeCharacters = (string: string): string =>
    string.replace(/\r?\n|\r/g, ' ').replace(/\s/g, '');

  const guid = withoutEscapeCharacters(`
    ${S4().repeat(2)}
    ${`-${S4()}`.repeat(4)}
    ${S4().repeat(2)}
  `);

  return guid;
};
