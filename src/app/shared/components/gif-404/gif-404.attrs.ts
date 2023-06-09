import type { HTMLAttributes } from 'vue';
import type { CSSClassAttribute } from '@/app/shared/types/component/attrs';
import type { ExtractedKeys, FilterNotStartingWith } from '@/app/shared/types';

export type Gif404Attrs = Pick<
  HTMLAttributes,
  FilterNotStartingWith<keyof HTMLAttributes, 'v-' | 'class'>
> &
  CSSClassAttribute;
