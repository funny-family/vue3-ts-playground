export const renderOnce = () => {
  // grab the second argument of "render" function (cache)
  // @ts-ignore
  const cache = arguments[1];

  console.log(56756757, cache);
};
