import type { ComponentPublicInstance, ObjectEmitsOptions, Slots } from 'vue';
import type { Data } from '@/app/shared/types';
import { EmitFunction } from './emits';

export type PublicInstanceOfComponent = ComponentPublicInstance;

// $: ComponentInternalInstance;
//     $data: D;
//     $props: MakeDefaultsOptional extends true ? Partial<Defaults> & Omit<P & PublicProps, keyof Defaults> : P & PublicProps;
//     $attrs: Data;
//     $refs: Data;
//     $slots: Slots;
//     $root: ComponentPublicInstance | null;
//     $parent: ComponentPublicInstance | null;
//     $emit: EmitFn<E>;
//     $el: any;
//     $options: Options & MergedComponentOptionsOverride;
//     $forceUpdate: () => void;
//     $nextTick: typeof nextTick;

/**
 * $props: MakeDefaultsOptional extends true ? Partial<Defaults> & Omit<P & PublicProps, keyof Defaults> : P & PublicProps;
 */
export type PropsOfComponentPublicInstance<T = Data> = {
  $props: T;
};

/**
 * $attrs: Data;
 */
export type AttrsOfComponentPublicInstance<T = Data> = {
  $attrs: T;
};

/**
 * $slots: Slots;
 */
export type SlotsOfComponentPublicInstance<T = Slots> = {
  $slots: T;
};

/**
 * $emit: EmitFn<E>;
 */
export type EmitOfComponentPublicInstance<
  T = EmitFunction<ObjectEmitsOptions>
> = {
  $emit: T;
};

/**
 * $el: any;
 */
export type ELOfComponentPublicInstance<T = HTMLElement> = {
  $el: T;
};
