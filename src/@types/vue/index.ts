import type { VShow, VModel } from '@/app/shared/types/directives';

export * from '../../../node_modules/vue/dist/vue';

export { Transition } from './transition';
export { Suspense } from './suspense';

declare module 'vue' {
  export interface HTMLAttributes extends VShow.Directive {}

  export interface InputHTMLAttributes extends VModel.Directive {}
  export interface TextareaHTMLAttributes extends VModel.Directive {}
  export interface SelectHTMLAttributes extends VModel.Directive {}
}
