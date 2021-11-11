/* eslint-disable @typescript-eslint/ban-types, @typescript-eslint/ban-ts-comment */
import type {
  ExtractPropTypes,
  ComponentPropsOptions,
  ComponentObjectPropsOptions,
  Prop
} from '@vue/runtime-core';
import type { HTMLAttributes } from 'vue';
import type { RecordPropsDefinition } from '@/app/types';

export interface Gif404PropFields {
  title: string;
  icon: string;
}

export const props: RecordPropsDefinition<Gif404PropFields> = {
  icon: {
    default: '',
    required: false,
    type: String
  },

  title: {
    default: '',
    required: true,
    type: String
  }
};

export type Gif404Props = Readonly<
  ExtractPropTypes<typeof props> & ThisType<void> & HTMLAttributes
>;
// export type Gif404Props = Readonly<ExtractPropTypes<typeof props>> & ThisType<void>;
