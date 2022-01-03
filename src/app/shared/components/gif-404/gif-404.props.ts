import type { ExtractPropTypes } from '@vue/runtime-core';
import type { HTMLAttributes } from 'vue';
import type { RecordPropsDefinition } from '../../types';

export interface Gif404PropFields {
  title: string;
  icon: string;
}

// export const props: ComponentObjectPropsOptions<Gif404PropFields> = {
export const props: RecordPropsDefinition<Gif404PropFields> = {
  icon: {
    default: '11111111',
    required: false,
    type: String
  },

  title: {
    default: '',
    required: true,
    type: String
  }
};

export type Gif404Props = ExtractPropTypes<typeof props> & ThisType<void>;

// How to use element ref in custom components, especially in tsx?
// https://github.com/vuejs/jsx-next/issues/292

export type Gif404Attrs = HTMLAttributes;
