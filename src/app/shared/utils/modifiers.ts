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

export type KeyModifier = 'enter' | 'esc'; // etc

export const keyModifier: Keys<KeyModifier> = {
  enter: 'enter',
  esc: 'esc'
};

// https://v3.vuejs.org/guide/forms.html#number

type EventObject = {
  [key in keyof Events]:
    | ((event: Events[key]) => void)
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
 *   class="btn"
 *   type="button"
 *   {...withEventModifiers(
 *     {
 *       onClick: () => {
 *         alert('Yeah, you clicked me! Only once, no more!');
 *       }
 *     },
 *     ['once']
 *   )}
 * >
 *   You can click me only once!
 * </button>
 */
export const withEventModifiers = (
  eventObject: UnionOfProperties<EventObject>,
  modifiers: EventModifier[]
): EventObjetWithModifiers => {
  const isModifierTransformable = (modifier: EventModifier): boolean =>
    (
      [
        eventModifier.capture,
        eventModifier.once,
        eventModifier.passive
      ] as EventModifier[]
    ).includes(modifier);

  const isArrayEmpty = <T>(array: T[]): boolean => array.length === 0;

  const transformableModifiers = modifiers.filter((modifier) =>
    isModifierTransformable(modifier)
  );
  const nonTransformableModifiers = modifiers.filter(
    (modifier) => !isModifierTransformable(modifier)
  );

  const inputEventName = Object.keys(eventObject)[0];
  const inputEventFunction = Object.values(eventObject)[0] as Function;

  const outputEventName = `${inputEventName}${transformableModifiers
    .map(capitalizeFirstLetter)
    .join('')}`;
  const outputEventFunction = isArrayEmpty(nonTransformableModifiers)
    ? inputEventFunction
    : withModifiers(inputEventFunction, [...nonTransformableModifiers]);

  const eventObjetWithModifiers = {
    [outputEventName]: outputEventFunction
  };

  return eventObjetWithModifiers;
};
