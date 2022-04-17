import type { Events } from 'vue';
import type { NonEmptyArrayOf, UnionOfProperties } from '@/app/shared/types';
import { withModifiers as _withModifiers } from 'vue';
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

/**
 * @see https://v3.vuejs.org/guide/migration/keycode-modifiers.html#keycode-modifiers
 * @see https://vuejs.org/api/render-function.html#withmodifiers
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
  modifiers: NonEmptyArrayOf<EventModifier>
): EventObjetWithModifiers => {
  const isModifierTransformable = (modifier: string): boolean =>
    (
      [
        Modifier.Event.Capture,
        Modifier.Event.Once,
        Modifier.Event.Passive
      ] as string[]
    ).includes(modifier);

  let transformableModifiers: string[] = [];
  let nonTransformableModifiers: string[] = [];

  if (modifiers.length > 1) {
    for (let i = 0; i < modifiers.length; i++) {
      const modifier = modifiers[i];
      const isCurrentModifierTransformable = isModifierTransformable(modifier);

      if (isCurrentModifierTransformable === true) {
        transformableModifiers.push(modifier);
      }

      nonTransformableModifiers.push(modifier);
    }
  } else {
    const firstModifierInList = modifiers[0];
    const isFirstModifierTransformable = isModifierTransformable(firstModifierInList);

    if (isFirstModifierTransformable === true) {
      transformableModifiers.push(firstModifierInList);
    }
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
    onFalsy: () => _withModifiers(inputEventFunction, nonTransformableModifiers)
  });

  const eventObjetWithModifiers: EventObjetWithModifiers = {
    [outputEventName]: outputEventFunction
  };

  return eventObjetWithModifiers;
};
