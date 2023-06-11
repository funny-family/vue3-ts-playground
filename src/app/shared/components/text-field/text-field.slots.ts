import type { Slot, Slots, VNode, VNodeTypes } from 'vue';
import type {
  CustomSlot,
  DefaultSlot
} from '@/app/shared/types/component/slots';
// import type { JSXElement } from '@/app/shared/types';

export namespace TextFieldSlots {
  export interface Schema<ReturnSlotType> {
    label?: CustomSlot<never, ReturnSlotType>;
    // text: CustomSlot<never, ReturnSlotType>;
  }

  export type VNodes = Readonly<Schema<[]>>;
  // export type VNodes = Readonly<{ [m: string]: any }>;

  export type JSXElement = Readonly<
    Schema<VNodeTypes | number | null | undefined>
  >;
}
