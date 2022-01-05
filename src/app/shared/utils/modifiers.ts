import { Events, withModifiers } from 'vue';
import type { KeyToKeyMapping, UnionOfProperties } from '@/app/shared/types';
import { capitalize } from '@/app/shared/utils/capitalize';

export namespace Event {
  export type Modifier =
    | 'stop'
    | 'prevent'
    | 'capture'
    | 'self'
    | 'once'
    | 'passive';

  export const modifier: KeyToKeyMapping<Modifier> = {
    stop: 'stop',
    prevent: 'prevent',
    capture: 'capture',
    self: 'self',
    once: 'once',
    passive: 'passive'
  };
}

export namespace Key {
  export type Modifier = 'enter' | 'esc'; // etc

  export const modifier: KeyToKeyMapping<Modifier> = {
    enter: 'enter',
    esc: 'esc'
  };
}

type EventObject = {
  [key in keyof Events]: ((event: Events[key]) => void) | undefined;
};

type EventObjetWithModifiers = {
  [eventName: string]: Function;
};

/**
 * @see
 * https://v3.vuejs.org/guide/migration/keycode-modifiers.html#keycode-modifiers
 *
 * @description
 * Adds modifier to event function.
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
  modifiers: Event.Modifier[]
): EventObjetWithModifiers => {
  const isModifierTransformable = (modifier: Event.Modifier): boolean =>
    (
      [
        Event.modifier.capture,
        Event.modifier.once,
        Event.modifier.passive
      ] as Event.Modifier[]
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
    .map(capitalize)
    .join('')}`;
  const outputEventFunction = isArrayEmpty(nonTransformableModifiers)
    ? inputEventFunction
    : withModifiers(inputEventFunction, [...nonTransformableModifiers]);

  const eventObjetWithModifiers: EventObjetWithModifiers = {
    [outputEventName]: outputEventFunction
  };

  return eventObjetWithModifiers;
};
