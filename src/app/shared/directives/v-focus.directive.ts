import { createDirective } from '@/app/shared/utils/create-directive';
import { findComponentForwardEl } from '@/app/shared/utils/forward-el';

export const vFocusDirective = createDirective<HTMLElement, undefined>(
  'focus',
  {
    mounted(el, binding) {
      const element = findComponentForwardEl(el) || el;

      element.focus();
    }
  }
);
