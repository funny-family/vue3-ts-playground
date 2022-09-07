import { isArrayEmpty } from './is-array-empty';
import { callTernary } from './call-ternary';
import { capitalize, Events } from 'vue';
import { withModifiers, withKeys } from 'vue';
import type { RequireOnlyOne } from '@/app/shared/types';

type EventObject = {
  [key in keyof Events]: ((event: Events[key]) => void) | undefined;
};

const eventModifier = {
  stop: 'stop',
  prevent: 'prevent',
  self: 'self'

  // ctrl : 'ctrl',
  // shift : 'shift',
  // alt : 'alt',
  // meta : 'meta',

  // left : 'left',
  // middle : 'middle',
  // right : 'right',

  // exact : 'exact'
} as const;

const transformativeEventModifier = {
  capture: 'capture',
  once: 'once',
  passive: 'passive'
} as const;

const isModifierTransformEvent = (modifier: string): boolean =>
  (
    [
      transformativeEventModifier.capture,
      transformativeEventModifier.once,
      transformativeEventModifier.passive
    ] as string[]
  ).includes(modifier);

const keyAlias = {
  enter: 'enter',
  tab: 'tab',
  delete: 'delete', // (captures both "Delete" and "Backspace" keys)
  esc: 'esc',
  space: 'space',
  up: 'up',
  down: 'down',
  left: 'left',
  right: 'right'
} as const;

const systemModifier = {
  ctrl: 'ctrl',
  alt: 'alt',
  shift: 'shift',
  meta: 'meta',

  exact: 'exact'
} as const;

const mouseButtonModifier = {
  left: 'left',
  right: 'right',
  middle: 'middle'
} as const;

const nonTransformativeEventModifier = {
  ...eventModifier,
  ...systemModifier,
  ...mouseButtonModifier,
  ...keyAlias
};

const eventModifiers = Object.values({
  ...eventModifier,
  ...systemModifier,
  ...mouseButtonModifier
});

const keyModifiers = Object.values({ ...keyAlias });

export const withEventModifiers = (
  eventObject: RequireOnlyOne<EventObject>,
  modifiers: string[]
) => {
  const transformativeModifiersList: string[] = [];
  const eventModifierList: string[] = [];
  const keyModifierList: string[] = [];

  for (let i = 0; i < modifiers.length; i++) {
    const modifier = modifiers[i];

    const isCurrentModifierTransformEvent = isModifierTransformEvent(modifier);
    const isEventModifier = eventModifiers.includes(
      modifier as typeof eventModifiers[number]
    );

    if (isCurrentModifierTransformEvent) {
      transformativeModifiersList.push(modifier);
    } else if (isEventModifier) {
      eventModifierList.push(modifier);
    } else {
      keyModifierList.push(modifier);
    }
  }

  const inputEventName = Object.keys(eventObject)[0];
  const inputEventFunction = Object.values(eventObject)[0] as Function;

  const isTransformativeModifierListEmpty = isArrayEmpty(
    transformativeModifiersList
  );
  const tm1 = isTransformativeModifierListEmpty
    ? ''
    : transformativeModifiersList.map(capitalize).join('');
  const outputEventName = `${inputEventName}${tm1}`;

  // eslint-disable-next-line
  let outputEventFunction = () => {};
  // // eslint-disable-next-line
  // let eventWithModifiers = () => {};
  // // eslint-disable-next-line
  // let eventWithKeys = () => {};


  const outputEventObject = {
    [outputEventName]: outputEventFunction
  };

  console.group('"withEventModifiers"');
  console.log('eventObject:', eventObject);
  console.log('modifiers:', modifiers);
  console.log('transformativeModifiersList:', transformativeModifiersList);
  console.log('eventModifierList:', eventModifierList);
  console.log('keyModifierList:', keyModifierList);
  console.log('outputEventName:', outputEventName);

  // console.log('eventWithModifiers:', eventWithModifiers);
  // console.log('eventWithKeys:', eventWithKeys);
  console.groupEnd();

  return eventObject;
};
