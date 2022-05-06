/**
 * @description
 * adada
 *
 * @example
 * adad
 */
export const getForwardElement = (componentUid: number) =>
  document.querySelector(
    `[data-root-el-id="${componentUid}"] [data-forward-el-id="${componentUid}"]`
  );

// document.querySelector('#v-id-7 > [data-root-el="true"]')

