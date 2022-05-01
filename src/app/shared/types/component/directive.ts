import type {
  ComponentPublicInstance,
  Directive,
  ObjectDirective,
  VNode
} from 'vue';

/**
 * M = Modifiers
 */
export type DirectiveModifier<M extends string> = Partial<Record<M, true>>;

// /**
//  * @see https://github.com/vuejs/core/blob/main/packages/runtime-core/src/directives.ts
//  *
//  * D = Directive, V = Value, A = Arguments, M = Modifiers
//  */
// export type ArgumentsOfDirective<
//   D = Directive,
//   V = any,
//   A = string,
//   M = DirectiveModifier
// > = Array<[D] | [D, V] | [D, V, A] | [D, V, A, M]>;

/**
 * D = Directive, V = Value, A = Argument, M = Modifiers
 */
export type DirectiveArgument<
  D = Directive,
  V = any,
  A = string,
  M = DirectiveModifier<any>
> = [D] | [D, V] | [D, V, A] | [D, V, A, M];

/*
  V = value/oldValue, A = arg, M = modifiers, D = any
*/
export interface _DirectiveBinding<
  V = any,
  A = string,
  M = DirectiveModifier<string>,
  D = any
> {
  instance: ComponentPublicInstance | null;
  value: V;
  oldValue: V | null;
  arg?: A;
  modifiers: M;
  dir: ObjectDirective<D, V>;
}

export type _DirectiveHook<T = any, Prev = VNode<any, T> | null, V = any> = (
  el: T,
  binding: _DirectiveBinding<V>,
  vnode: VNode<any, T>,
  prevVNode: Prev
) => void;

export interface DirectiveName {
  readonly name: string;
}

export type DirectiveConstructFunction<T = ObjectDirective<any, any>> = {
  construct: () => T;
};
