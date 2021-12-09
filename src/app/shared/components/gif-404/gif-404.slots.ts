import type { VNode } from 'vue';
import type { CustomSlot, DefaultSlot } from '@/app/shared/types';

export namespace Gif404Slots {
  export interface Schema<ReturnSlotType>
    extends Partial<DefaultSlot<ReturnSlotType>> {
    // export interface Schema<ReturnSlotType> extends DefaultSlot<ReturnSlotType> {

    // default: (() => ReturnSlotType) | undefined;
    // header: ((headerTitle: string, someShittyText: string) => T) | undefined;
    header: CustomSlot<
      { headerTitle: string; someShittyText: string },
      ReturnSlotType
    >;
    footer: CustomSlot<{ t1: string; t2: string }, ReturnSlotType>;
  }

  export type VNodeList = Readonly<Schema<VNode[]>>;

  export type JSXElement = Readonly<Schema<JSX.Element>>;
}
