import type { EmitsOptions } from 'vue';

// export type ObjectEmitsOptions = Record<string, ((...args: any[]) => any) | null>;
// export type EmitsOptions = ObjectEmitsOptions | string[];

export const emits: (EmitsOptions & ThisType<void>) | undefined = {
  onProvideComponent() {
    //
  }
};

export type Gif404Emits = typeof emits;

// https://v3.vuejs.org/guide/migration/emits-option.html
