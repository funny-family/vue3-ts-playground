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
export const withModifiers = (
  eventObject: UnionOfProperties<EventObject>,
  modifiers: NonEmptyArrayOf<EventModifier>
  // modifiers: IsArrayUnique<EventModifier[]>
): EventObjetWithModifiers => {
  const isModifierTransformable = (modifier: string): boolean =>
    (
      [
        Modifier.Event.Capture,
        Modifier.Event.Once,
        Modifier.Event.Passive
      ] as string[]
    ).includes(modifier);

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
