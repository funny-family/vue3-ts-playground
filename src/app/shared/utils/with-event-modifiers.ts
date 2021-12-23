/* eslint-disable */
import { Events, HTMLAttributes, withModifiers } from 'vue';
import type { ArrayElement } from '../types';
import { enumify } from './enumify';

/**
 * @description
 * Capitalize first letter in a string.
 *
 * @example
 * const string = 'hello';
 * const capitalizedString = capitalizeFirstLetter(string);
 * console.log(capitalizedString); // 'Hello'
 */
const capitalizeFirstLetter = (string: string): string =>
  string.charAt(0).toUpperCase() + string.slice(1);

// type EventHandlers<E> = {
//   [K in keyof E]?: E[K] extends Function ? E[K] : (payload: E[K]) => void
// }

// type O = {
//   [eventFunction: string]: (event: Event) => void;
// };

// const o: O = {
//   onCLick: (e) => {}
// }

type EventModifierList = [
  'stop',
  'prevent',
  'capture',
  'self',
  'once',
  'passive'
];

type EventModifiers = ArrayElement<EventModifierList>;

/**
 * @see https://v3.vuejs.org/guide/events.html#event-modifiers
 */
const eventModifierList: EventModifierList = [
  'stop',
  'prevent',
  'capture',
  'self',
  'once',
  'passive'
];

const eventModifiers = enumify(eventModifierList);

// type TransformableModifiers = Extract<
//   EventModifiers,
//   'capture' | 'once' | 'passive'
// >[];
// type NonTransformableModifiers = Extract<
//   EventModifiers,
//   'stop' | 'prevent' | 'self'
// >[];

// https://vue-next-template-explorer.netlify.app/#%7B%22src%22%3A%22%3Cdiv%20class%3D%5C%22counter%5C%22%3E%5Cn%20%20%3Cspan%3E%7B%7B%20count%20%7D%7D%3C%2Fspan%3E%5Cn%20%20%3Cbutton%20%40click.stop%3D%5C%22%5C%22%3Estop%3C%2Fbutton%3E%5Cn%20%20%3Cbutton%20%40click.prevent%3D%5C%22%5C%22%3Eprevent%3C%2Fbutton%3E%5Cn%20%20%3Cbutton%20%40click.capture%3D%5C%22%5C%22%3Ecapture%3C%2Fbutton%3E%5Cn%20%20%3Cbutton%20%40click.self%3D%5C%22%5C%22%3Eself%3C%2Fbutton%3E%5Cn%20%20%3Cbutton%20%40click.once%3D%5C%22%5C%22%3Eonce%3C%2Fbutton%3E%5Cn%20%20%3Cbutton%20%40click.passive%3D%5C%22%5C%22%3Epassive%3C%2Fbutton%3E%5Cn%3C%2Fdiv%3E%5Cn%22%2C%22options%22%3A%7B%22mode%22%3A%22module%22%2C%22filename%22%3A%22Foo.vue%22%2C%22prefixIdentifiers%22%3Afalse%2C%22hoistStatic%22%3Afalse%2C%22cacheHandlers%22%3Afalse%2C%22scopeId%22%3Anull%2C%22inline%22%3Afalse%2C%22ssrCssVars%22%3A%22%7B%20color%20%7D%22%2C%22compatConfig%22%3A%7B%22MODE%22%3A3%7D%2C%22whitespace%22%3A%22condense%22%2C%22bindingMetadata%22%3A%7B%22TestComponent%22%3A%22setup-const%22%2C%22setupRef%22%3A%22setup-ref%22%2C%22setupConst%22%3A%22setup-const%22%2C%22setupLet%22%3A%22setup-let%22%2C%22setupMaybeRef%22%3A%22setup-maybe-ref%22%2C%22setupProp%22%3A%22props%22%2C%22vMySetupDir%22%3A%22setup-const%22%7D%7D%7D
// https://vue-next-jsx-explorer.netlify.app/#const%20App%20%3D%20()%20%3D%3E%20%3Cdiv%3E%0A%3Cbutton%20onClickOnce%3D%7B()%20%3D%3E%20alert(1)%7D%3E1%3C%2Fbutton%3E%0A%0A%3Cbr%20%2F%3E%0A%0A%3Cbutton%20%7B...%7B%20'onClickOnce'%3A%20()%20%3D%3E%20alert(2)%20%7D%7D%3E2%3C%2Fbutton%3E%0A%3C%2Fdiv%3E

export const withEventModifiers = (
  objectWithEvent: any,
  modifiers: string[]
) => {
  const transformableModifiers: string[] = [
    'capture',
    'once',
    'passive'
  ]; // capture | once | passive

  const nonTransformableModifiers: string[] = [
    'stop',
    'prevent',
    'self'
  ]; // stop | prevent | self

  const transformableModifierList: string[] = []; // capture | once | passive
  const nonTransformableModifierList: string[] = []; // stop | prevent | self

  const eventKey = Object.keys(objectWithEvent)[0];
  const eventValue = Object.values(objectWithEvent)[0] as Function;

  modifiers.forEach((modifier) => {
    if (transformableModifiers.includes(modifier)) {
      transformableModifierList.push(modifier);
    } else {
      nonTransformableModifierList.push(modifier);
    }
  });

  console.group('withEventModifiers');
  console.log('eventKey:', eventKey);
  console.log('eventValue:', eventValue);

  console.log('transformableModifierList:', transformableModifierList);
  console.log('nonTransformableModifierList:', nonTransformableModifierList);
  console.log(
    'ml:',
    transformableModifierList.map(capitalizeFirstLetter).join('')
  );

  console.log(
    'key:',
    `${eventKey}${transformableModifierList
      .map(capitalizeFirstLetter)
      .join('')}`
  );
  console.log(
    'value:',
    nonTransformableModifierList.length === 0
      ? eventValue
      : withModifiers(eventValue, [...nonTransformableModifierList])
  );

  console.groupEnd();

  const r = {
    [`${eventKey}${transformableModifierList
      .map(capitalizeFirstLetter)
      .join('')}`]:
      nonTransformableModifierList.length === 0
        ? eventValue
        : withModifiers(eventValue, [...nonTransformableModifierList])
  };

  console.log(34343434, r);
  console.log(7878787, JSON.stringify(r, null, 2));

  return r;
};
