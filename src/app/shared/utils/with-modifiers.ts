import { generateGuid } from '@/app/shared/utils/guid';
import type { Events } from 'vue';
import type {
  AnyFunction,
  EventHandler,
  NonEmptyArrayOf,
  RequireOnlyOne,
  UnionOfProperties
} from '@/app/shared/types';
import { withModifiers as _withModifiers, getCurrentInstance } from 'vue';
import { createHash } from 'crypto';
import { capitalize } from '@/app/shared/utils/capitalize';
import { Modifier } from '@/app/shared/utils/modifiers';
import { isArrayEmpty } from '@/app/shared/utils/is-array-empty';
import { callTernary } from '@/app/shared/utils/call-ternary';

// https://vue-next-template-explorer.netlify.app/#eyJzcmMiOiI8aW5wdXQgQGtleXVwLmFsdC5lbnRlci5leGFjdD1cImNsZWFyXCIgLz4iLCJzc3IiOmZhbHNlLCJvcHRpb25zIjp7ImhvaXN0U3RhdGljIjp0cnVlfX0
// https://stackoverflow.com/questions/2648293/how-to-get-the-function-name-from-within-that-function

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
// export const withModifiers = function <E extends Event>(
export const withModifiers = function <E extends Event>(
  fn: EventHandler<E>,
  modifiers: string[]
): EventHandler<E> {
  // =================================================================
  // ): [EventHandler<E>, string[]] => {
  const functionWithModifiers = _withModifiers(fn as any, modifiers);

  Object.defineProperty(fn, 'name', { writable: true });
  Object.defineProperty(functionWithModifiers, 'name', { writable: true });
  console.log((Math.random() + 1).toString(36).substring(7), Date.now());
  const i = (Math.random() + 1).toString(36).substring(7);
  functionWithModifiers.__proto__.displayName = i;

  const f = new Proxy(functionWithModifiers, {
    get(target, property, receiver) {
      // console.log('"f" proxyyyyyy! ', { target, property, receiver });

      // if (property === 'arguments') {
      if (property === 'modifiers') {
        return modifiers;
      }
    }
  });

  // return [functionWithModifiers, modifiers];
  return f;
  // return functionWithModifiers;
};

// export const withEventAttributeNameModify = function (
//   eventObject: RequireOnlyOne<EventObject>
// ) {
export function withEventAttributeNameModify(
  eventObject: RequireOnlyOne<EventObject>
) {
  // console.log(111, eventObject);

  const eventName = Object.keys(eventObject)[0];
  const eventFunction = Object.values(eventObject)[0];

  // // @ts-ignore
  // console.log(234243, eventName, eventObject[eventName]);

  // // @ts-ignore
  // console.log('withEventAttributeNameModify "this"', this.modifiers);

  // // @ts-ignore
  // const eventFunction = eventObject[eventName] as Function;

  // // @ts-ignore
  // this.id = generateGuid();
  const currentInstanceOfComponent = getCurrentInstance();
  const accessCache = (currentInstanceOfComponent as any).accessCache as Record<
    string,
    number
  >;

  console.group(2);
  // @ts-ignore
  console.log('withEventAttributeNameModify "this"', this);
  console.log('currentInstanceOfComponent:', currentInstanceOfComponent);
  console.log('accessCache:', accessCache);
  console.log(`eventFunction "${eventName}":`, { eventFunction });
  // console.log('eventFunction "modifiers":', eventFunction.modifiers);
  console.log('eventFunction "displayName":', eventFunction.displayName);
  console.log('eventFunction.__proto__":', { ...eventFunction.__proto__ });
  console.groupEnd();

  return eventObject;
}
