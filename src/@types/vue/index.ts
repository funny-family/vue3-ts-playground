import type { VShow, VModel } from '@/app/shared/types/directives';
import type {
  DatasetComponentRootElId,
  DatasetComponentForwardElId
} from '@/app/shared/utils/forward-el';

export * from '../../../node_modules/vue/dist/vue';

export { Transition } from './transition';
export { Suspense } from './suspense';

declare module 'vue' {
  export interface HTMLAttributes
    extends VShow.Directive,
      DatasetComponentRootElId,
      DatasetComponentForwardElId {}

  export interface InputHTMLAttributes extends VModel.Directive {}
  export interface TextareaHTMLAttributes extends VModel.Directive {}
  export interface SelectHTMLAttributes extends VModel.Directive {}
}
