import type { HTMLAttributes } from 'vue';
import type { CSSClassAttribute } from '@/app/shared/types/component/attrs';
import type { FilterNotStartingWith } from '@/app/shared/types';

export type TextFieldAttrs = Pick<
  HTMLAttributes,
  FilterNotStartingWith<
    keyof HTMLAttributes,
    | 'v-'
    | 'class'
    /* ----------------- omitted attrs ----------------- */
    | 'contenteditable'
    /* ----------------- omitted attrs ----------------- */
  >
> &
  CSSClassAttribute;
