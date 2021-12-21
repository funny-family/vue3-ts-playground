/* eslint-disable */
import { Events, HTMLAttributes , withModifiers } from 'vue';
import type { ArrayElement } from '../types';
import { enumify } from './enumify';

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
  'passive',
];

const eventModifiers = enumify(eventModifierList);

export const withEventModifiers = (objectWithEventFunction: Events, modifiers: string[]): any => {
  /**
   * eventFunction = { onClick: (event: Event): void => {} }
   */
  // const htmlAttributeKeys = Object.keys(htmlAttributes);
};

