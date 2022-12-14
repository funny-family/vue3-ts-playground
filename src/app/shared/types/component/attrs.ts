import type { HTMLAttributes } from 'vue';
import type { OptionalPropertyOf } from '@/app/shared/types';
import type { VModel } from '@/app/shared/types/directives';

export type CSSClassAttribute = { class?: string };

type DataAttributeKey = `data-${string}`;

export type DataAttribute = {
  // @ts-ignore
  [key: DataAttributeKey]: any;
};
