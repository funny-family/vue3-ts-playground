export type RenderFunction<T> = (
  this: T,
  ctx,
  cache,
  $props,
  $setup,
  $options
) => {};
