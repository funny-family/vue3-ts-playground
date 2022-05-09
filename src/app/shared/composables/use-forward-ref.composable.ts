import { getCurrentInstance } from 'vue';

/**
 * @see https://github.com/vuejs/rfcs/issues/258
 * @see https://github.com/vuejs/rfcs/issues/134
 */
export const useForwardRef = () => {
  const instance = getCurrentInstance()!;

  const handleRefChange = (ref: any) => {
    console.log(84569486946, ref);

    instance.exposed = ref;
    instance.exposeProxy = ref;
  };

  return handleRefChange;
};
