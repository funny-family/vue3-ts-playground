// https://vue3js.cn/es6/typeScript.html
// https://github.com/vuejs/composition-api/issues/191
// separate setup????? https://github.com/vuejs/composition-api/issues/650
// https://mrcrmn.dev/articles/lightweight-components-with-vue3-and-jsx/

import type {
  ContextOfSetupFunction,
  PropsOfSetupFunction
} from '@/app/shared/types/component/setup';
import { generateGuid } from '@/app/shared/utils/guid';
import {
  onBeforeMount,
  onMounted,
  onUnmounted,
  shallowRef,
  ref,
  getCurrentInstance,
  getCurrentScope
} from 'vue';
import type { UnwrapNestedRefs } from 'vue';

type Context = ContextOfSetupFunction;
type Props = PropsOfSetupFunction;

export const setup = (props: Props, context: Context) => {
  const tabId = generateGuid();

  const channel = new BroadcastChannel('tab');
  // let isOriginal = true;
  const isOriginal = shallowRef(true);

  channel.postMessage('another-tab');
  // note that listener is added after posting the message

  const onMessage = function (message: MessageEvent<any>): any {
    if (message.data === 'another-tab' && isOriginal) {
      // message received from 2nd tab
      // reply to all new tabs that the website is already open
      channel.postMessage('already-open');
    }
    if (message.data === 'already-open') {
      // isOriginal = false;
      isOriginal.value = false;
      // message received from original tab
      // replace this with whatever logic you need
      // alert('Cannot open multiple instances');
    }
  };

  onBeforeMount(() => {
    console.group('"App"');
    // console.log('CurrentInstance:', getCurrentInstance());
    // console.log('CurrentScope:', getCurrentScope());
    console.groupEnd();

    channel.addEventListener('message', onMessage);
  });

  onUnmounted(() => {
    channel.removeEventListener('message', onMessage);
    channel.close();
  });

  return {
    props,
    context,
    isOriginal
  };
};

export type AppBindings = UnwrapNestedRefs<ReturnType<typeof setup>>;
// export type AppBindings2 = ReturnType<typeof setup>;
