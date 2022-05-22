import type { Directive } from 'vue';
import { vFontDirective } from '@/app/shared/directives/v-font.directive';

export const directives: Record<string, Directive> = {
  ...vFontDirective.register()
};

export { vFontDirective };
