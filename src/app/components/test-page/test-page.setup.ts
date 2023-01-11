// import { withModifiers } from 'vue';
import { withModifiers } from '@/app/shared/utils/with-modifiers';
import type { EventHandler } from '@/app/shared/types';
import type {
  ContextOfSetupFunction,
  PropsOfSetupFunction,
  BindingsOfSetupFunction,
  UnwrappedBindingsOfSetupFunction
} from '@/app/shared/types/component/setup';
import { getCurrentInstance, onMounted } from 'vue';
import type { HTMLAttributes } from 'vue';

type Props = PropsOfSetupFunction;
type Context = ContextOfSetupFunction<HTMLAttributes, {}, {}>;

export const setup = (props: Props, context: Context) => {
  const cache: any[] = [];

  const onButtonClick: EventHandler<MouseEvent> = withModifiers(
    (event) => {
      console.log('"this" of "onButtonClick":', this);
      // // @ts-ignore
      // onButtonClick.__proto__.modifiers = [];

      // console.log(event.type);
      // console.log(this);
    },
    ['once', 'self']
  );

  const onFormSubmit = withModifiers<Event>(
    (event) => {
      console.log('"this" of "onFormSubmit":', this);
      // console.log(event);
    },
    ['prevent']
  );

  onMounted(() => {
    // console.log('"TestPage" CurrentInstance:', getCurrentInstance());
  });

  const bindings = { props, context, cache, onButtonClick, onFormSubmit };
  const exposes = {};

  context.expose(exposes);

  return bindings;
};

export type TestPageSetupFunction = typeof setup;

export type TestPageBindings = BindingsOfSetupFunction<TestPageSetupFunction>;

export type TestPageUnwrappedBindings =
  UnwrappedBindingsOfSetupFunction<TestPageSetupFunction>;

// export type TestPageExposes = Pick<TestPageUnwrappedBindings, ''>;
export type TestPageExposes = {};
