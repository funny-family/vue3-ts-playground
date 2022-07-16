import type { Events } from 'vue';
import type {
  AnyFunction,
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

// const functionModifierMap = new Map<string, string[]>();

Object.defineProperty(Object.prototype, '___Get___Id', {
  value() {
    console.log('ok');
  },
  enumerable: false
});

// let mods: any[] = [];

export const withModifiers = <T extends AnyFunction>(
  fn: T,
  modifiers: string[]
): T => {
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

  const functionWithModifiers = _withModifiers(fn, modifiers);
  const functionWithModifiersAsString = functionWithModifiers.toString();
  // mods = modifiers;

  // // @ts-ignore
  // const functionId = functionWithModifiers[n]();

  console.group(1);
  console.log({ functionWithModifiers });
  // // @ts-ignore
  // console.log('functionId:', functionId);
  // console.log('functionWithModifiersAsString:', functionWithModifiersAsString);

  console.groupEnd();

  // Object.defineProperty(functionWithModifiers, 'modifiers', {
  //   value: modifiers
  // });

  // const getModifiers = () => modifiers;

  // Object.defineProperty(functionWithModifiers, 'getModifiers', {
  //   get: getModifiers
  // });

  return functionWithModifiers;
};

export const withEventAttributeNameModify = (
  eventObject: RequireOnlyOne<EventObject>
) => {
  const eventName = Object.keys(eventObject)[0];
  const eventFunction = Object.values(eventObject)[0] as Function;

  const eventFunctionAsString = eventFunction.toString();
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

  const proxyFn = new Proxy(eventFunction, {
    apply(target, thisArg, argArray) {
      console.log(123212131, target, thisArg, argArray);
    }
  });

  console.group(2);
  console.log('eventFunctionAsString:', eventFunctionAsString);
  console.log({ eventFunction });
  // console.log('mods:', mods);
  // // @ts-ignore
  // console.log('functionId:', functionId);
  console.log('proxyFn:', proxyFn);

  console.groupEnd();

  // mods = [];

  return eventObject;
};
