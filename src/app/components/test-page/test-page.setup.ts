// import { withModifiers } from 'vue';
import { withModifiers } from '@/app/shared/utils/with-modifiers';
import type { EventHandler } from '@/app/shared/types';
import type {
  ContextOfSetupFunction,
  PropsOfSetupFunction,
  BindingsOfSetupFunction,
  UnwrappedBindingsOfSetupFunction
} from '@/app/shared/types/component/setup';

type Props = PropsOfSetupFunction;
type Context = ContextOfSetupFunction;

export const setup = (props: Props, context: Context) => {
  const onButtonClick = withModifiers<MouseEvent>(
    (event) => {
      // // @ts-ignore
      // onButtonClick.__proto__.modifiers = [];

      // console.log(event.type);
      // console.log(this);
    },
    ['once', 'self']
  );

  const onFormSubmit = withModifiers<Event>(
    (event) => {
      // console.log(event);
    },
    ['prevent']
  );

  const bindings = { props, context, onButtonClick, onFormSubmit };
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
