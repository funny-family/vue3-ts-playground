import { generateGuid } from '@/app/shared/utils/guid';
import type { Events } from 'vue';
import type {
  AnyFunction,
  EventHandler,
  NonEmptyArrayOf,
  RequireOnlyOne,
  UnionOfProperties
} from '@/app/shared/types';
import { withModifiers as _withModifiers } from 'vue';
import { createHash } from 'crypto';
import { capitalize } from '@/app/shared/utils/capitalize';
import { Modifier } from '@/app/shared/utils/modifiers';
import { isArrayEmpty } from '@/app/shared/utils/is-array-empty';
import { callTernary } from '@/app/shared/utils/call-ternary';

type EventObject = {
  [key in keyof Events]: ((event: Events[key]) => void) | undefined;
};

type EventObjetWithModifiers = {
  [eventName: string]: Function;
};

type EventModifier = `${Modifier.Event}`;

const isModifierTransformable = (modifier: string): boolean =>
  (
    [
      Modifier.Event.Capture,
      Modifier.Event.Once,
      Modifier.Event.Passive
    ] as string[]
  ).includes(modifier);

/**
 * @see https://v3.vuejs.org/guide/migration/keycode-modifiers.html#keycode-modifiers
 * @see https://vuejs.org/api/render-function.html#withmodifiers
 *
 * @description
 * For adding built-in v-on modifiers to an event handler function.
 *
 * @example
 * <button
 *   class="btn"
 *   type="button"
 *   {...withModifiers(
 *     {
 *       onClick: () => {
 *         alert('Yeah, you clicked me! But no more!');
 *       }
 *     },
 *     ['once']
 *   )}
 * >
 *   You can click me only once!
 * </button>
 */
export const withModifiers1 = (
  eventObject: UnionOfProperties<EventObject>,
  modifiers: NonEmptyArrayOf<EventModifier>
  // modifiers: IsArrayUnique<EventModifier[]>
): EventObjetWithModifiers => {
  const transformableModifiers: string[] = [];
  const nonTransformableModifiers: string[] = [];

  for (let i = 0; i < modifiers.length; i++) {
    const modifier = modifiers[i];
    const isCurrentModifierTransformable = isModifierTransformable(modifier);

    if (isCurrentModifierTransformable === true) {
      transformableModifiers.push(modifier);
    }

    nonTransformableModifiers.push(modifier);
  }

  const inputEventName = Object.keys(eventObject)[0];
  const inputEventFunction = Object.values(eventObject)[0] as Function;

  const isTransformableModifierListEmpty = isArrayEmpty(transformableModifiers);
  const transformableModifiersAsString = callTernary({
    condition: isTransformableModifierListEmpty,
    onTruthy: () => '',
    onFalsy: () => transformableModifiers.map(capitalize).join('')
  });
  const outputEventName = `${inputEventName}${transformableModifiersAsString}`;
  const isNonTransformableModifierListEmpty = isArrayEmpty(
    nonTransformableModifiers
  );
  const outputEventFunction = callTernary({
    condition: isNonTransformableModifierListEmpty,
    onTruthy: () => inputEventFunction,
    onFalsy: () =>
      _withModifiers(inputEventFunction as any, nonTransformableModifiers)
  });

  const eventObjetWithModifiers: EventObjetWithModifiers = {
    [outputEventName]: outputEventFunction
  };

  return eventObjetWithModifiers;
};

// const n = '___Get___Id';

// (function () {
//   // @ts-ignore
//   if (typeof Object.prototype[n] === 'undefined') {
//     let id = 0;

//     // @ts-ignore
//     Object.prototype[n] = function () {
//       if (typeof (this as any)[n] === 'undefined') {
//         (this as any)[n] = ++id;
//       }

//       return (this as any)[n];
//     };
//   }
// })();

// =================================================================

// (function () {
//   let id_counter = 1;

//   Object.defineProperty(Object.prototype, '___Get___Id', {
//     writable: true
//   });

//   Object.defineProperty(Object.prototype, '___Get___Id', {
//     get() {
//       if (this.___Get___Id == undefined) this.___Get___Id = id_counter++;

//       return this.___Get___Id;
//     }
//   });
// })();

// =================================================================

// const createKey = (fn: Function) => `${fn.toString()}:${typeof fn}`;

// const generateKey = (...args: any[]) => {
//   const key = args.map(createKey).join('|');

//   return createHash('sha256').update(key).digest('hex');
// };

const argKey = (x: any) => x.toString() + ':' + typeof x;

const generateKey = (...args: any) => {
  const key = args.map(argKey).join('|');

  return createHash('sha256').update(key).digest('hex');
};

// const functionModifierMap = new Map<string, string[]>();

// export const withModifiers = <T extends Event | Function>(
//   fn: T extends Event ? EventHandler<T> : T,
//   modifiers: string[]
// ): T extends Event ? EventHandler<T> : T => {
// =================================================================
export const withModifiers = function <E extends Event>(
  fn: EventHandler<E>,
  modifiers: string[]
): EventHandler<E> {
  // =================================================================
  // ): [EventHandler<E>, string[]] => {

  // console.group();
  // console.log('"withModifiers" args:', {
  //   fn,
  //   fnAsString: fn.toString(),
  //   // @ts-ignore
  //   __vue_event_modifiers: withModifiers.__proto__.__vue_event_modifiers
  // });
  // console.groupEnd();

  // const key = generateKey(fn);
  // const value = modifiers;
  // functionModifierMap.set(key, value);

  // const f = <F extends Function>(fn: F) => {
  //   Object.defineProperty(fn, 'name', { value: 'fh4756gau' });

  //   return fn;
  // };

  const functionWithModifiers = _withModifiers(fn as any, modifiers);

  // functionWithModifiers.toString = function () {
  //   console.log(11, this);

  //   return this();
  // };

  const key = generateKey(fn as any, modifiers);
  console.log('key:', key);

  Object.defineProperty(fn, 'name', { writable: true });
  Object.defineProperty(functionWithModifiers, 'name', { writable: true });
  console.log((Math.random() + 1).toString(36).substring(7), Date.now());

  // // @ts-ignore
  // functionWithModifiers.name = 'jfui4h5874';
  // // @ts-ignore
  // fn.name = 'jfui4h5874';
  // // @ts-ignore
  // functionWithModifiers.displayName = 'jfui4h5874';
  if (functionWithModifiers.__proto__.displayName == null) {
    functionWithModifiers.__proto__.displayName = generateGuid();
  }
  // functionWithModifiers.__proto__.name = 'jfui4h5874';
  // console.log(777, functionWithModifiers.__proto__.name);

  // // @ts-ignore
  // this.modifiers = modifiers;

  // // @ts-ignore
  // console.log('withModifiers "this"', this);

  // console.group(1);
  // console.log({ functionWithModifiers });
  // // // @ts-ignore
  // // console.log('functionId:', functionId);
  // // console.log('functionWithModifiersAsString:', functionWithModifiersAsString);
  // console.groupEnd();

  // return [functionWithModifiers, modifiers];
  return functionWithModifiers;
};

// export const withEventAttributeNameModify = function (
//   eventObject: RequireOnlyOne<EventObject>
// ) {
export function withEventAttributeNameModify(
  eventObject: RequireOnlyOne<EventObject>
) {
  console.log(111, eventObject);

  const eventName = Object.keys(eventObject)[0];
  const eventFunction = Object.values(eventObject)[0];

  // @ts-ignore
  console.log(234243, eventName, eventObject[eventName]);

  // // @ts-ignore
  // console.log('withEventAttributeNameModify "this"', this.modifiers);

  // // @ts-ignore
  // const eventFunction = eventObject[eventName] as Function;

  // console.group();
  // console.log('"withEventAttributeNameModify":', {
  //   eventObject,
  //   eventName,
  //   eventFunction,
  //   eventFunctionAsString: eventFunction.toString(),
  //   // @ts-ignore
  //   __vue_event_modifiers: eventFunction.__proto__.__vue_event_modifiers
  // });
  // console.groupEnd();

  // console.log(
  //   'functionModifierMap:',
  //   functionModifierMap,
  //   generateKey(eventFunction)
  // );

  // // @ts-ignore
  // const functionId = functionWithModifiers[n]();

  console.group(2);
  console.log('eventName:', eventName);
  console.log('eventFunction:', eventFunction);
  console.log('eventFunction "displayName":', eventFunction.displayName);
  console.log({ eventFunction });
  // console.log('mods:', mods);
  // // @ts-ignore
  // console.log('functionId:', functionId);
  console.groupEnd();

  return eventObject;
}
