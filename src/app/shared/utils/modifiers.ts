import { Events, withModifiers } from 'vue';
import type { Keys, UnionOfProperties } from '@/app/shared/types';
import { capitalizeFirstLetter } from '@/app/shared/utils/capitalize-first-letter';

export type EventModifier =
  | 'stop'
  | 'prevent'
  | 'capture'
  | 'self'
  | 'once'
  | 'passive';

export const eventModifier: Keys<EventModifier> = {
  stop: 'stop',
  prevent: 'prevent',
  capture: 'capture',
  self: 'self',
  once: 'once',
  passive: 'passive'
};

type EventsObject = {
  [key in keyof Events]:
    | ((event: Events[key]) => void)
    | (() => void)
    | undefined;
};

type EventObjetWithModifiers = {
  [eventName: string]: Function;
};

/**
 * @see
 * https://v3.vuejs.org/guide/migration/keycode-modifiers.html#keycode-modifiers
 *
 * @description
 * Addes modifier to event function.
 *
 * @example
 * <button
 *  class="btn"
 *  type="button"
 *  {...withEventModifiers(
 *    {
 *      onClick: () => {
 *        alert('Yeah, you clicked me! Only once, no more!');
 *      }
 *    },
 *    ['once']
 *  )}
 * >
 *  You can click me only once!
 * </button>
 */
export const withEventModifiers = (
  eventObject: UnionOfProperties<EventsObject>,
  modifiers: string[]
): EventObjetWithModifiers => {
  const isModifierTransformable = (modifier: string): boolean =>
    ['capture', 'once', 'passive'].includes(modifier);

  const isArrayEmpty = <T>(array: T[]): boolean => array.length === 0;

  const transformableModifiers = modifiers.filter((modifier) =>
    isModifierTransformable(modifier)
  );
  const nonTransformableModifiers = modifiers.filter(
    (modifier) => !isModifierTransformable(modifier)
  );

  const inputEventName = Object.keys(eventObject)[0];
  const inputEventFuction = Object.values(eventObject)[0] as Function;

  const outputEventName = `${inputEventName}${transformableModifiers
    .map(capitalizeFirstLetter)
    .join('')}`;
  const outputEventFuction = isArrayEmpty(nonTransformableModifiers)
    ? inputEventFuction
    : withModifiers(inputEventFuction, [...nonTransformableModifiers]);

  const eventObjetWithModifiers = {
    [outputEventName]: outputEventFuction
  };

  return eventObjetWithModifiers;
};
