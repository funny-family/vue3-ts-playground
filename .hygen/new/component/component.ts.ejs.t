---
to: <%= absPath %>/<%= componentNameInCableCase %>.component.ts
---
import { defineComponent } from 'vue';
import { setup, <%= componentNameInCamelCase %>Bindings } from './<%= componentNameInCableCase %>.setup';
import { props, <%= componentNameInCamelCase %>Props, <%= componentNameInCamelCase %>Attrs } from './<%= componentNameInCableCase %>.props';
import { emits, <%= componentNameInCamelCase %>Emits } from './<%= componentNameInCableCase %>.emits';
import { render } from './<%= componentNameInCableCase %>.render';
import type {
  CSSClassAttribute,
  HTMLAttributesWithoutCSSClass
} from '@/app/shared/types';
import { nameOf } from '../../utils/name-of';

export const <%= componentNameInCamelCase %> = defineComponent<
  <%= componentNameInCamelCase %>Props &
    HTMLAttributesWithoutCSSClass<<%= componentNameInCamelCase %>Attrs> &
    <%= componentNameInCamelCase %>Emits.AsProps &
    CSSClassAttribute &
  <%= componentNameInCamelCase %>Bindings
>({});

// @ts-ignore
<%= componentNameInCamelCase %>.name = nameOf(() => <%= componentNameInCamelCase %>);
<%= componentNameInCamelCase %>.inheritAttrs = false;
<%= componentNameInCamelCase %>.setup = setup;
<%= componentNameInCamelCase %>.props = props;
<%= componentNameInCamelCase %>.emits = emits;
<%= componentNameInCamelCase %>.render = render;
