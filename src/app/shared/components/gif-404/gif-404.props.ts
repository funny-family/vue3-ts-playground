import type { ExtractPropTypes, ComponentObjectPropsOptions } from '@vue/runtime-core';
import type { HTMLAttributes } from 'vue';
import type { RecordPropsDefinition } from '../../types';

export interface Gif404PropFields {
  title: string;
  icon: string;
}

// export const props: ComponentObjectPropsOptions<Gif404PropFields> = {
export const props: RecordPropsDefinition<Gif404PropFields> = {
  icon: {
    default: '1',
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

export type Gif404Attrs = HTMLAttributes;
