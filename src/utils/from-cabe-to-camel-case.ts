// const fromCabeToCamelCase = (str: string | undefined | null): string | null => {
//   if (str === undefined || str === null) return null;

//   const arr = str.split('-');
//   const capital = arr.map((item, index) =>
//     index ? `${item.charAt(0).toUpperCase()}${item.slice(1).toLowerCase()}` : item.toLowerCase()
//   );
//   const capitalString = capital.join('');

//   return capitalString;
// };
