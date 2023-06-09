import type { VNode, VNodeTypes, Slots } from 'vue';
import type {
  CustomSlot,
  DefaultSlot
} from '@/app/shared/types/component/slots';

export namespace Gif404Slots {
  export interface Schema<ReturnSlotType>
    extends Partial<DefaultSlot<never, ReturnSlotType>> {
    // export interface Schema<ReturnSlotType> extends DefaultSlot<ReturnSlotType> {

    // default: (() => ReturnSlotType) | undefined;
    // header: ((headerTitle: string, someShittyText: string) => T) | undefined;
    header: CustomSlot<
      { headerTitle: string; someShittyText: string },
      ReturnSlotType
    >;
    footer: CustomSlot<string, ReturnSlotType>;
  }

  // export type VNodeList = Readonly<Schema<VNode[]>>;
  export type VNodes = Readonly<Schema<VNode[]>>;

  export type JSXElement = Readonly<
    Schema<VNodeTypes | number | null | undefined>
  >;
}
