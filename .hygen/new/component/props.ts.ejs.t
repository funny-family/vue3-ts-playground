---
to: <%= absPath %>/<%= componentNameInCableCase %>.props.ts
---
import type { ExtractPropTypes } from '@vue/runtime-core';
import type { HTMLAttributes } from 'vue';
import type { RecordPropsDefinition } from '@/app/shared/types';

export interface <%= componentNameInCamelCase %>PropFields {}

export const props: RecordPropsDefinition<<%= componentNameInCamelCase %>PropFields> = {};

export type <%= componentNameInCamelCase %>Props = ExtractPropTypes<typeof props> & ThisType<void>;

export type <%= componentNameInCamelCase %>Attrs = HTMLAttributes;
