import type { Events } from 'vue';
import { withModifiers, withKeys, capitalize } from 'vue';
import { makeMap } from '@vue/shared';
import type {
  OmitByType,
  RequireOnlyOne,
  StartsWith
} from '@/app/shared/types';

const isEventOptionModifier = makeMap('passive,once,capture');
const isNonKeyModifier = makeMap(
  // event propagation management
  'stop,prevent,self,' +
    // system modifiers + exact
    'ctrl,shift,alt,meta,exact,' +
    // mouse
    'middle'
);
// left & right could be mouse or key modifiers based on event type
const maybeKeyModifier = makeMap('left,right');
const isKeyboardEvent = makeMap('onkeyup,onkeydown,onkeypress', true);

export const resolveEventModifiers = ({
  eventName,
  eventModifiers
}: {
  eventName: string;
  eventModifiers: string[];
}) => {
  const keyModifiers: string[] = [];
  const nonKeyModifiers: string[] = [];
  const eventOptionModifiers: string[] = [];

  for (let i = 0; i < eventModifiers.length; i++) {
    const eventModifier = eventModifiers[i];

    if (isEventOptionModifier(eventModifier)) {
      // eventOptionModifiers: modifiers for addEventListener() options,
      // e.g. .passive & .capture
      eventOptionModifiers.push(eventModifier);
    } else {
      // runtimeModifiers: modifiers that needs runtime guards
      if (maybeKeyModifier(eventModifier)) {
        if (isKeyboardEvent(eventName)) {
          keyModifiers.push(eventModifier);
        } else {
          nonKeyModifiers.push(eventModifier);
        }
      } else {
        if (isNonKeyModifier(eventModifier)) {
          nonKeyModifiers.push(eventModifier);
        } else {
          keyModifiers.push(eventModifier);
        }
      }
    }
  }

  return {
    keyModifiers,
    nonKeyModifiers,
    eventOptionModifiers
  };
};

type EventsToObject<E = Events> = {
  [key in keyof E]?: (event: E[key]) => void;
};

type FilterKeysThatStartsWithOn<T> = {
  [P in keyof T]: StartsWith<P, 'on'> extends true ? T[P] : never;
};

type OnlyEvents<E> = OmitByType<FilterKeysThatStartsWithOn<E>, never>;

type EventObjects<E = Events> = EventsToObject<OnlyEvents<E>>;

type EventObject<E = Events> = RequireOnlyOne<EventObjects<E>>;

const e: EventObject<Events> = {
  onAbort: (event) => {
    //
  }
  // onAnimationend: (event) => {
  //   //
  // }
};

const modifierGuardsRecord = {
  stop: 'stop',
  prevent: 'prevent',
  self: 'self',
  ctrl: 'ctrl',
  shift: 'shift',
  alt: 'alt',
  meta: 'meta',
  left: 'left',
  middle: 'middle',
  right: 'right',
  exact: 'exact'
} as const;

export const withEventModifiers = <Props = Events>(
  // eventObject: EventObject<Props>,
  eventObject: EventObjects<Props>,
  modifiers: string[]
) => {
  const eventName = Object.keys(eventObject)[0] as string;
  const eventFunction = Object.values(eventObject)[0] as Function;

  const { eventOptionModifiers, keyModifiers, nonKeyModifiers } =
    resolveEventModifiers({
      eventName,
      eventModifiers: modifiers
    });

  let outputEventName = eventName;
  let outputEventFunction = eventFunction;

  // normalize click.right and click.middle since they don't actually fire
  if (nonKeyModifiers.includes(modifierGuardsRecord.right)) {
    outputEventName = 'onContextmenu';
  }

  if (nonKeyModifiers.includes(modifierGuardsRecord.middle)) {
    outputEventName = 'onMouseup';
  }

  if (nonKeyModifiers.length > 0) {
    outputEventFunction = withModifiers(
      outputEventFunction as any,
      nonKeyModifiers
    );
  }

  if (
    keyModifiers.length > 0 &&
    // if event name is dynamic, always wrap with keys guard
    isKeyboardEvent(eventName)
  ) {
    outputEventFunction = withKeys(outputEventFunction, keyModifiers);
  }

  if (eventOptionModifiers.length > 0) {
    const modifierPostfix = eventOptionModifiers.map(capitalize).join('');
    outputEventName = `${outputEventName}${modifierPostfix}`;
  }

  const outputEventObject = {
    [outputEventName]: outputEventFunction
  };

  return outputEventObject;
};

withEventModifiers(
  {
    onAbort: (event) => {
      //
    }
    // onAnimationend: (event) => {
    //   //
    // }
  },
  []
);
