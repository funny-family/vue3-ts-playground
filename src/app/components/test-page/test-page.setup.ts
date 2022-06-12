import type { EventHandler } from '@/app/shared/types';
import type {
  ContextOfSetupFunction,
  PropsOfSetupFunction,
  BindingsOfSetupFunction,
  UnwrappedBindingsOfSetupFunction
} from '@/app/shared/types/component/setup';
import { withModifiers, normalizeClass } from 'vue';

type Props = PropsOfSetupFunction;
type Context = ContextOfSetupFunction;

export const setup = (props: Props, context: Context) => {
  // const onButtonClick: EventHandler<MouseEvent> = (event) => {
  //   console.log(event.type);
  //   console.log(this);
  // };

  const onButtonClick: EventHandler<MouseEvent> = withModifiers(
    (event) => {
      console.log(event.type);
      console.log(this);
    },
    ['once']
  );

  const onFormSubmit: EventHandler<Event> = withModifiers(
    (event) => {
      console.log(event);
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
