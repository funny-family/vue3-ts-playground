import type {
  HTMLAttributes,
  AreaHTMLAttributes,
  IntrinsicElementAttributes,
  Events
} from 'vue';
import { isOn } from '@vue/shared';
import type {
  FilterStartsWith,
  FilterNotStartingWith,
  NonEmptyArrayOf
} from '@/app/shared/types/';
import type {
  OnlyHTMLAttributes,
  OnlyHTMLAriaAttributes
} from '@/app/shared/types/component/attrs';
import { attributeKey, htmlAttributes } from '@/app/shared/utils/attrs';

type D = Pick<
  AreaHTMLAttributes,
  FilterNotStartingWith<
    keyof AreaHTMLAttributes,
    keyof OnlyHTMLAttributes | 'aria-' | 'data-' | 'on' | 'v-'
  >
>;

type EventHandlers<E> = {
  [K in keyof E]?: E[K] extends Function ? E[K] : (payload: E[K]) => void;
};

// type FilteredEventAttributes<T extends HTMLAttributes> = Pick<
//   T,
//   FilterStartsWith<keyof T, 'on'>
// >;

// type FilteredAriaAttributes<T extends HTMLAttributes> = Pick<
//   T,
//   FilterStartsWith<keyof T, 'aria-'>
// >;

type FilteredDataAttributes<T extends HTMLAttributes> = Pick<
  T,
  FilterStartsWith<keyof T, 'data-'>
>;

type FilteredElAttributes<T extends HTMLAttributes> = Pick<
  T,
  FilterNotStartingWith<
    keyof T,
    keyof OnlyHTMLAttributes | 'aria-' | 'data-' | 'on' | 'v-'
  >
>;

/**
 * @description
 * Check if attribute is "html".
 *
 * @example
 * const isHtmlAttr = isHtmlAttribute('innerHTML');
 * console.log(isHtmlAttr); // true
 */
const isHtmlAttribute = (value: string) =>
  htmlAttributes.includes(value as any);

/**
 * @description
 * Check if attribute is "aria".
 *
 * @example
 * const isAriaAttr = isAriaAttribute('aria-hidden');
 * console.log(isAriaAttr); // true
 */
const isAriaAttribute = (value: string) => /^(aria-)[a-z]+/.test(value);

/**
 * @description
 * Check if attribute is "data".
 *
 * @example
 * const isDataAttr = isDataAttribute('data-something');
 * console.log(isDataAttr); // true
 */
const isDataAttribute = (value: string) => /^(data-)[a-z]+/.test(value);

type HTMLClipboardEvent = Pick<Events, 'onCopy' | 'onCut' | 'onPaste'>;
/**
 * @description
 * Check if attribute is "clipboard" event.
 *
 * @example
 * const isAttrClipboardEvent = isClipboardEvent('onCut');
 * console.log(isAttrClipboardEvent); // true
 */
const isClipboardEvent = (value: string) =>
  (['onCopy', 'onCut', 'onPaste'] as Array<keyof HTMLClipboardEvent>).includes(
    value as any
  );

type HTMLCompositionEvent = Pick<
  Events,
  'onCompositionend' | 'onCompositionstart' | 'onCompositionupdate'
>;
/**
 * @description
 * Check if attribute is "composition" event.
 *
 * @example
 * const isAttrCompositionEvent = isClipboardEvent('onCompositionupdate');
 * console.log(isAttrCompositionEvent); // true
 */
const isCompositionEvent = (value: string) =>
  (
    ['onCompositionend', 'onCompositionstart', 'onCompositionupdate'] as Array<
      keyof HTMLCompositionEvent
    >
  ).includes(value as any);

type HTMLDragDropEvent = Pick<
  Events,
  | 'onDrag'
  | 'onDragend'
  | 'onDragenter'
  | 'onDragexit'
  | 'onDragleave'
  | 'onDragover'
  | 'onDragstart'
  | 'onDrop'
>;
/**
 * @description
 * Check if attribute is "drag drop" event.
 *
 * @example
 * const isAttrDragDropEvent = isDragDropEvent('onDragstart');
 * console.log(isAttrDragDropEvent); // true
 */
const isDragDropEvent = (value: string) =>
  (
    [
      'onDrag',
      'onDragend',
      'onDragenter',
      'onDragexit',
      'onDragleave',
      'onDragover',
      'onDragstart',
      'onDrop'
    ] as Array<keyof HTMLDragDropEvent>
  ).includes(value as any);

type HTMLFocusEvent = Pick<
  Events,
  'onFocus' | 'onFocusin' | 'onFocusout' | 'onBlur'
>;
/**
 * @description
 * Check if attribute is "focus" event.
 *
 * @example
 * const isAttrFocusEvent = isFocusEvent('onFocus');
 * console.log(isAttrDragDropEvent); // true
 */
const isFocusEvent = (value: string) =>
  (
    ['onFocus', 'onFocusin', 'onFocusout', 'onBlur'] as Array<
      keyof HTMLFocusEvent
    >
  ).includes(value as any);

type HTMLFormEvent = Pick<
  Events,
  | 'onChange'
  | 'onBeforeinput'
  | 'onInput'
  | 'onReset'
  | 'onSubmit'
  | 'onInvalid'
>;
/**
 * @description
 * Check if attribute is "form" event.
 *
 * @example
 * const isAttrFormEvent = isFormEvent('onChange');
 * console.log(isAttrFormEvent); // true
 */
const isFormEvent = (value: string) =>
  (
    [
      'onChange',
      'onBeforeinput',
      'onInput',
      'onReset',
      'onSubmit',
      'onInvalid'
    ] as Array<keyof HTMLFormEvent>
  ).includes(value as any);

type HTMLKeyboardEvent = Pick<Events, 'onKeydown' | 'onKeypress' | 'onKeyup'>;
/**
 * @description
 * Check if attribute is "keyboard" event.
 *
 * @example
 * const isAttrKeyboardEvent = isKeyboardEvent('onKeypress');
 * console.log(isAttrKeyboardEvent); // true
 */
const isKeyboardEvent = (value: string) =>
  (
    ['onKeydown', 'onKeypress', 'onKeyup'] as Array<keyof HTMLKeyboardEvent>
  ).includes(value as any);

type HTMLImageEvent = Pick<Events, 'onLoad' | 'onError'>;
/**
 * @description
 * Check if attribute is "image" event.
 *
 * @example
 * const isAttrImageEvent = isImageEvent('onLoad');
 * console.log(isAttrImageEvent); // true
 */
const isImageEvent = (value: string) =>
  (['onLoad', 'onError'] as Array<keyof HTMLImageEvent>).includes(value as any);

type HTMLMouseEvent = Pick<
  Events,
  | 'onAuxclick'
  | 'onClick'
  | 'onContextmenu'
  | 'onDblclick'
  | 'onMousedown'
  | 'onMouseenter'
  | 'onMouseleave'
  | 'onMousemove'
  | 'onMouseout'
  | 'onMouseover'
  | 'onMouseup'
>;
/**
 * @description
 * Check if attribute is "mouse" event.
 *
 * @example
 * const isAttrMouseEvent = isMouseEvent('onClick');
 * console.log(isAttrMouseEvent); // true
 */
const isMouseEvent = (value: string) =>
  (
    [
      'onAuxclick',
      'onClick',
      'onContextmenu',
      'onDblclick',
      'onMousedown',
      'onMouseenter',
      'onMouseleave',
      'onMousemove',
      'onMouseout',
      'onMouseover',
      'onMouseup'
    ] as Array<keyof HTMLMouseEvent>
  ).includes(value as any);

type HTMLMediaEvent = Pick<
  Events,
  | 'onAbort'
  | 'onCanplay'
  | 'onCanplaythrough'
  | 'onDurationchange'
  | 'onEmptied'
  | 'onEncrypted'
  | 'onEnded'
  | 'onLoadeddata'
  | 'onLoadedmetadata'
  | 'onLoadstart'
  | 'onPause'
  | 'onPlay'
  | 'onPlaying'
  | 'onProgress'
  | 'onRatechange'
  | 'onSeeked'
  | 'onSeeking'
  | 'onStalled'
  | 'onSuspend'
  | 'onTimeupdate'
  | 'onVolumechange'
  | 'onWaiting'
>;
/**
 * @description
 * Check if attribute is "media" event.
 *
 * @example
 * const isAttrMediaEvent = isMediaEvent('onPlay');
 * console.log(isAttrMediaEvent); // true
 */
const isMediaEvent = (value: string) =>
  (
    [
      'onAbort',
      'onCanplay',
      'onCanplaythrough',
      'onDurationchange',
      'onEmptied',
      'onEncrypted',
      'onEnded',
      'onLoadeddata',
      'onLoadedmetadata',
      'onLoadstart',
      'onPause',
      'onPlay',
      'onPlaying',
      'onProgress',
      'onRatechange',
      'onSeeked',
      'onSeeking',
      'onStalled',
      'onSuspend',
      'onTimeupdate',
      'onVolumechange',
      'onWaiting'
    ] as Array<keyof HTMLMediaEvent>
  ).includes(value as any);

type HTMLSelectionEvent = Pick<Events, 'onSelect'>;
/**
 * @description
 * Check if attribute is "selection" event.
 *
 * @example
 * const isAttrSelectionEvent = isSelectionEvent('onSelect');
 * console.log(isAttrSelectionEvent); // true
 */
const isSelectionEvent = (value: string) =>
  (['onSelect'] as Array<keyof HTMLSelectionEvent>).includes(value as any);

type HTMLUIEvent = Pick<Events, 'onScroll'>;
/**
 * @description
 * Check if attribute is "UI" event.
 *
 * @example
 * const isAttrUIEvent = isUIEvent('onScroll');
 * console.log(isAttrUIEvent); // true
 */
const isUIEvent = (value: string) =>
  (['onScroll'] as Array<keyof HTMLUIEvent>).includes(value as any);

type HTMLTouchEvent = Pick<
  Events,
  'onTouchcancel' | 'onTouchend' | 'onTouchmove' | 'onTouchstart'
>;
/**
 * @description
 * Check if attribute is "touch" event.
 *
 * @example
 * const isAttrTouchEvent = isTouchEvent('onTouchend');
 * console.log(isAttrTouchEvent); // true
 */
const isTouchEvent = (value: string) =>
  (
    ['onTouchcancel', 'onTouchend', 'onTouchmove', 'onTouchstart'] as Array<
      keyof HTMLTouchEvent
    >
  ).includes(value as any);

type HTMLPointerEvent = Pick<
  Events,
  | 'onPointerdown'
  | 'onPointermove'
  | 'onPointerup'
  | 'onPointercancel'
  | 'onPointerenter'
  | 'onPointerleave'
  | 'onPointerover'
  | 'onPointerout'
>;
/**
 * @description
 * Check if attribute is "pointer" event.
 *
 * @example
 * const isAttrPointerEvent = isPointerEvent('onPointerdown');
 * console.log(isAttrPointerEvent); // true
 */
const isPointerEvent = (value: string) =>
  (
    [
      'onPointerdown',
      'onPointermove',
      'onPointerup',
      'onPointercancel',
      'onPointerenter',
      'onPointerleave',
      'onPointerover',
      'onPointerout'
    ] as Array<keyof HTMLPointerEvent>
  ).includes(value as any);

type HTMLWheelEvent = Pick<Events, 'onWheel'>;
/**
 * @description
 * Check if attribute is "wheel" event.
 *
 * @example
 * const isAttrWheelEvent = isWheelEvent('onWheel');
 * console.log(isAttrWheelEvent); // true
 */
const isWheelEvent = (value: string) =>
  (['onWheel'] as Array<keyof HTMLWheelEvent>).includes(value as any);

type HTMLAnimationEvent = Pick<
  Events,
  'onAnimationstart' | 'onAnimationend' | 'onAnimationiteration'
>;
/**
 * @description
 * Check if attribute is "animation" event.
 *
 * @example
 * const isAttrAnimationEvent = isAnimationEvent('onAnimationiteration');
 * console.log(isAttrAnimationEvent); // true
 */
const isAnimationEvent = (value: string) =>
  (
    ['onAnimationstart', 'onAnimationend', 'onAnimationiteration'] as Array<
      keyof HTMLAnimationEvent
    >
  ).includes(value as any);

type HTMLTransitionEvent = Pick<
  Events,
  'onTransitionend' | 'onTransitionstart'
>;
/**
 * @description
 * Check if attribute is "transition event".
 *
 * @example
 * const isAttrTransitionEvent = isTransitionEvent('onTransitionend');
 * console.log(isAttrTransitionEvent); // true
 */
const isTransitionEvent = (value: string) =>
  (
    ['onTransitionend', 'onTransitionstart'] as Array<keyof HTMLTransitionEvent>
  ).includes(value as any);

/**
 * @description
 * This is description of "useGroupedAttrs" function
 *
 * @example
 * console.log('This is example of "useGroupedAttrs" function');
 */
export const useGroupedAttrs = <
  Tag extends keyof IntrinsicElementAttributes,
  // Attrs extends IntrinsicElementAttributes[Tag]
  // IgnoreList extends Array<keyof IntrinsicElementAttributes[Tag]>
  // IgnoreList extends string[]
  IL extends string
>({
  tag,
  attrs,
  ignoreList
}: {
  tag: Tag;
  attrs: IntrinsicElementAttributes[Tag];
  // ignoreList?: NonEmptyArrayOf<keyof IntrinsicElementAttributes[Tag]>;
  // ignoreList?: Array<
  //   keyof Pick<
  //     IntrinsicElementAttributes[Tag],
  //     FilterNotStartingWith<keyof IntrinsicElementAttributes[Tag], 'v-'>
  //   >
  // >;
  ignoreList?:
    | Array<
        keyof Pick<
          IntrinsicElementAttributes[Tag],
          FilterNotStartingWith<keyof IntrinsicElementAttributes[Tag], 'v-'>
        >
      >
    | string[];
  // ignoreList?: IL[];
}) => {
  type IgnoreList_ = NonNullable<typeof ignoreList>;
  type KeysOfIgnoreList = keyof IgnoreList_;

  const groupedAttrs = {
    html: {} as Omit<OnlyHTMLAttributes, KeysOfIgnoreList>,
    // aria: {} as Omit<
    //   FilteredAriaAttributes<typeof attrs>,
    //   keyof typeof ignoreList
    // >,
    aria: {} as Omit<OnlyHTMLAriaAttributes, KeysOfIgnoreList>,
    data: {} as Omit<FilteredDataAttributes<typeof attrs>, KeysOfIgnoreList>,
    el: {} as Omit<FilteredElAttributes<typeof attrs>, KeysOfIgnoreList>,
    other: {} as Omit<Record<string, any>, KeysOfIgnoreList>,
    clipboardEvent: {} as Omit<
      EventHandlers<HTMLClipboardEvent>,
      KeysOfIgnoreList
    >,
    compositionEvent: {} as Omit<
      EventHandlers<HTMLCompositionEvent>,
      KeysOfIgnoreList
    >,
    dragDropEvent: {} as Omit<
      EventHandlers<HTMLDragDropEvent>,
      KeysOfIgnoreList
    >,
    focusEvent: {} as Omit<EventHandlers<HTMLFocusEvent>, KeysOfIgnoreList>,
    formEvent: {} as Omit<EventHandlers<HTMLFormEvent>, KeysOfIgnoreList>,
    imageEvent: {} as Omit<EventHandlers<HTMLImageEvent>, KeysOfIgnoreList>,
    keyboardEvent: {} as Omit<
      EventHandlers<HTMLKeyboardEvent>,
      KeysOfIgnoreList
    >,
    mouseEvent: {} as Omit<EventHandlers<HTMLMouseEvent>, KeysOfIgnoreList>,
    mediaEvent: {} as Omit<EventHandlers<HTMLMediaEvent>, KeysOfIgnoreList>,
    selectionEvent: {} as Omit<
      EventHandlers<HTMLSelectionEvent>,
      KeysOfIgnoreList
    >,
    UIEvent: {} as Omit<EventHandlers<HTMLUIEvent>, KeysOfIgnoreList>,
    touchEvent: {} as Omit<EventHandlers<HTMLTouchEvent>, KeysOfIgnoreList>,
    pointerEvent: {} as Omit<EventHandlers<HTMLPointerEvent>, KeysOfIgnoreList>,
    wheelEvent: {} as Omit<EventHandlers<HTMLWheelEvent>, KeysOfIgnoreList>,
    animationEvent: {} as Omit<
      EventHandlers<HTMLAnimationEvent>,
      KeysOfIgnoreList
    >,
    transitionEvent: {} as Omit<
      EventHandlers<HTMLTransitionEvent>,
      KeysOfIgnoreList
    >
  };

  if (Object.keys(attrs).length <= 0) {
    return groupedAttrs;
  }

  for (const key in attrs) {
    if (ignoreList != null && ignoreList.includes(key as any)) {
      continue;
    }

    if (isAriaAttribute(key)) {
      (groupedAttrs.aria as any)[key] = attrs[key];
    }
    //
    else if (isDataAttribute(key)) {
      (groupedAttrs.data as any)[key] = attrs[key];
    }
    //
    else if (isHtmlAttribute(key)) {
      (groupedAttrs.html as any)[key] = attrs[key];
    }
    //
    else if (isOn(key)) {
      if (isClipboardEvent(key)) {
        (groupedAttrs.clipboardEvent as any)[key] = attrs[key];
      }
      //
      else if (isCompositionEvent(key)) {
        (groupedAttrs.compositionEvent as any)[key] = attrs[key];
      }
      //
      else if (isDragDropEvent(key)) {
        (groupedAttrs.dragDropEvent as any)[key] = attrs[key];
      }
      //
      else if (isFocusEvent(key)) {
        (groupedAttrs.focusEvent as any)[key] = attrs[key];
      }
      //
      else if (isFormEvent(key)) {
        (groupedAttrs.formEvent as any)[key] = attrs[key];
      }
      //
      else if (isImageEvent(key)) {
        (groupedAttrs.imageEvent as any)[key] = attrs[key];
      }
      //
      else if (isKeyboardEvent(key)) {
        (groupedAttrs.keyboardEvent as any)[key] = attrs[key];
      }
      //
      else if (isMouseEvent(key)) {
        (groupedAttrs.mouseEvent as any)[key] = attrs[key];
      }
      //
      else if (isMediaEvent(key)) {
        (groupedAttrs.mediaEvent as any)[key] = attrs[key];
      }
      //
      else if (isSelectionEvent(key)) {
        (groupedAttrs.mediaEvent as any)[key] = attrs[key];
      }
      //
      else if (isUIEvent(key)) {
        (groupedAttrs.UIEvent as any)[key] = attrs[key];
      }
      //
      else if (isTouchEvent(key)) {
        (groupedAttrs.touchEvent as any)[key] = attrs[key];
      }
      //
      else if (isPointerEvent(key)) {
        (groupedAttrs.pointerEvent as any)[key] = attrs[key];
      }
      //
      else if (isWheelEvent(key)) {
        (groupedAttrs.wheelEvent as any)[key] = attrs[key];
      }
      //
      else if (isAnimationEvent(key)) {
        (groupedAttrs.animationEvent as any)[key] = attrs[key];
      }
      //
      else if (isTransitionEvent(key)) {
        (groupedAttrs.transitionEvent as any)[key] = attrs[key];
      }
    }
    //
    else if (tag in attributeKey && (attributeKey as any)[tag].includes(key)) {
      (groupedAttrs.el as any)[key] = attrs[key];
    }
    //
    else {
      (groupedAttrs.other as any)[key] = attrs[key];
    }
  }

  return groupedAttrs;
};

const atr = {} as AreaHTMLAttributes;

// type B = FilteredElAttributes<AreaHTMLAttributes>;

const groupedAttrs = useGroupedAttrs({
  tag: 'audio',
  attrs: atr,
  ignoreList: ['muted', 'innerHTML', 'ddd']
  // ignoreList: []
});

groupedAttrs.el.muted;
groupedAttrs.html.innerHTML;
groupedAttrs.other;
