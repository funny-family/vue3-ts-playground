import type { EmitsOptions } from 'vue';

// export type ObjectEmitsOptions = Record<string, ((...args: any[]) => any) | null>;
// export type EmitsOptions = ObjectEmitsOptions | string[];

export const emits: (EmitsOptions & ThisType<void>) | undefined = ['input'];

// https://stackoverflow.com/questions/65277526/building-a-prefixer-type-using-typescripts-template-literal-type-feature

// https://github.com/vuejs/jsx-next/issues/266

// https://github.com/vuejs/jsx-next/issues/134

// https://github.com/vuejs/jsx-next/issues/236

export type TextFieldEmits = typeof emits;

type Getters<T> = {
  [K in keyof T as `on${Capitalize<string & K>}`]: (event: Event) => void
};

const el = ['input', 'click', 'change'] as const;

const elObj = {
  input: 'input',
  click: 'click',
  change: 'change'
}


interface Person {
  name: string;
  age: number;
  location: string;
}

type LazyPerson = Getters<Person>;

type E = Getters<typeof elObj>
