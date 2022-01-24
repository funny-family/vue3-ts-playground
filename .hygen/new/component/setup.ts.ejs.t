---
to: <%= absPath %>/<%= componentNameInCableCase %>.setup.ts
---
import type { EmitsOptions, SetupContext } from 'vue';
import type {
  CSSClassAttribute,
  HTMLAttributesWithoutCSSClass,
  SetupCtx
} from '@/app/shared/types';
import type { <%= componentNameInCamelCase %>Attrs, <%= componentNameInCamelCase %>Props } from './<%= componentNameInCableCase %>.props';
import { <%= componentNameInCamelCase %>Emits, emitName } from './<%= componentNameInCableCase %>.emits';

export const setup = (p: Readonly<{}>, ctx: SetupContext<EmitsOptions>) => {
  const props = p as Readonly<<%= componentNameInCamelCase %>Props>;
  const context = ctx as unknown as SetupCtx<
    <%= componentNameInCamelCase %>Emits.AsFunctionArguments,
    HTMLAttributesWithoutCSSClass<<%= componentNameInCamelCase %>Attrs> & CSSClassAttribute
  >;
  return {
    props,
    context
  };
};

export type <%= componentNameInCamelCase %>Bindings = ReturnType<typeof setup>;
