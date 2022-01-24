---
to: <%= absPath %>/<%= componentNameInCableCase %>.render.tsx
---
import type { <%= componentNameInCamelCase %>Bindings } from './<%= componentNameInCableCase %>.setup';
import { styles } from './styles/<%= componentNameInCableCase %>.styles';

export const render = function (this: <%= componentNameInCamelCase %>Bindings) {
  return <div><%= componentNameInCamelCase %> component.</div>
};
