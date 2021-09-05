import type { EmitsOptions } from "vue";

export const emits: (EmitsOptions & ThisType<void>) | undefined = {};

export type Gif404Emits = typeof emits;
