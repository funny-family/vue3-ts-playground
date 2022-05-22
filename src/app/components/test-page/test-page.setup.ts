import type {
  ContextOfSetupFunction,
  PropsOfSetupFunction,
  BindingsOfSetupFunction,
  UnwrappedBindingsOfSetupFunction
} from '@/app/shared/types/component/setup';

type Props = PropsOfSetupFunction;
type Context = ContextOfSetupFunction;

export const setup = (props: Props, context: Context) => {
  const bindings = { props, context };
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
