import type { Events } from 'vue';
import type { UnionOfProperties } from '@/app/shared/types';
import { withModifiers as _withModifiers } from 'vue';
import { capitalize } from '@/app/shared/utils/capitalize';
import { Modifier } from '@/app/shared/utils/modifiers';
import { isArrayEmpty } from '@/app/shared/utils/is-array-empty';
import { callTernary } from '@/app/shared/utils/call-ternary';

type OnlyOneKey<K extends string, V = any> = {
  [P in K]: Record<P, V> & Partial<Record<Exclude<K, P>, never>> extends infer O
    ? { [Q in keyof O]: O[Q] }
    : never;
}[K];

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
 *   {...withModifiers(
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
export const withModifiers = (
  eventObject: UnionOfProperties<EventObject>,
  modifiers: string[]
): EventObjetWithModifiers => {
  const isModifierTransformable = (modifier: string): boolean =>
    (
      [
        Modifier.Event.Capture,
        Modifier.Event.Once,
        Modifier.Event.Passive
      ] as string[]
    ).includes(modifier);

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
  const isNonTransformableModifierListEmpty = isArrayEmpty(
    nonTransformableModifiers
  );
  const outputEventFunction = callTernary({
    condition: isNonTransformableModifierListEmpty,
    onTruthy: () => inputEventFunction,
    onFalsy: () =>
      _withModifiers(inputEventFunction, [...nonTransformableModifiers])
  });

  const eventObjetWithModifiers: EventObjetWithModifiers = {
    [outputEventName]: outputEventFunction
  };

  return eventObjetWithModifiers;
};
