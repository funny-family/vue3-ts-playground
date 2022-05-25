import { vFontDirective } from '@/app/shared/directives/v-font.directive';
import { Directive } from 'vue';

export const directives: Record<string, Directive> = {
  ...vFontDirective.register()
};

export { vFontDirective };
