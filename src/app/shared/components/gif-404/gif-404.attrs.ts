import type { HTMLAttributes } from 'vue';
import type { CSSClassAttribute } from '@/app/shared/types/component/attrs';
import type { ExtractedKeys } from '@/app/shared/types';

export type Gif404Attrs = Omit<
  HTMLAttributes,
  ExtractedKeys<CSSClassAttribute>
> &
  CSSClassAttribute;
