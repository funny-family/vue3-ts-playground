import type { EmitsOptions } from 'vue';

// export type ObjectEmitsOptions = Record<string, ((...args: any[]) => any) | null>;
// export type EmitsOptions = ObjectEmitsOptions | string[];

export const emits: (EmitsOptions & ThisType<void>) | undefined = ['input'];

export type TextFieldEmits = typeof emits;
