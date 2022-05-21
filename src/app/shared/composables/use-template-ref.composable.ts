import { ref } from 'vue';

/**
 * @see adad
 *
 * @description
 * adada
 *
 * @example
 * adada
 */
export const c = () => {
  const element = ref();

  const functionRef = (
    // el: Element | ComponentPublicInstance | null
    el: Element | null
  ): void => {
    element.value = el;
  };

  return functionRef;
};
