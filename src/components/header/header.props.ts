import type { ExtractPropTypes, ComponentObjectPropsOptions } from "@vue/runtime-core";
import { PropType } from "vue";

export interface HeaderPropFields {
  title: string;
}

export const props: ComponentObjectPropsOptions<HeaderPropFields> = {
  title: {
    default: "this is main heading!",
    required: true,
    type: String as PropType<string>,
  },
};

export type HeaderProps = ExtractPropTypes<typeof props & ThisType<void>>;
