import type { VNode } from 'vue';

/**
 * @see https://v3.vuejs.org/api/directives.html#v-show
 */
export type VShow = {
  'v-show'?: boolean;
};

/**
 * @see https://v3.vuejs.org/api/directives.html#v-slot
 */
export type VSlot = {
  'v-slot'?: any;
};

/**
 * @see https://v3.vuejs.org/api/directives.html#v-memo
 */
export type VMemo = {
  'v-memo'?: [...values: any];
};

/**
 * @see https://v3.vuejs.org/api/directives.html#v-html
 */
export type VHtml = {
  'v-html'?: VNode;
};

/**
 * @see https://v3.vuejs.org/api/directives.html#v-text
 */
export type VText = {
  'v-text'?: string;
};

/**
 * @see https://v3.vuejs.org/api/directives.html#v-pre
 */
export type VPre = {
  'v-pre'?: boolean;
};

/**
 * @see https://v3.vuejs.org/api/directives.html#v-cloak
 */
export type VCloak = {
  'v-cloak'?: any;
};

/**
 * @see https://v3.vuejs.org/api/directives.html#v-once
 */
export type VOnce = {
  'v-once'?: boolean;
};

export type Directives = VShow | VSlot | VMemo | VHtml | VText | VPre | VCloak | VOnce;
