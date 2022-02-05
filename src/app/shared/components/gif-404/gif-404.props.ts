import type {
  ExtractTypeFromProps,
  PropOption
} from '@/app/shared/types/component/props';

interface Gif404PropSchema {
  icon: PropOption<string, false, ''>;
  text: PropOption<string, true, ''>;
}

export const props: Gif404PropSchema = {
  icon: {
    default: () => '11111111',
    required: false,
    type: String
  },

  text: {
    default: '',
    required: true,
    type: String
  }
};

export type Gif404Props = ExtractTypeFromProps<Gif404PropSchema>;
// https://github.com/vuejs/jsx-next/issues/292
