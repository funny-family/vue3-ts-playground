import { createDirective } from '../utils/create-directive';

type VFontDirectiveModifier = 'normal' | 'italic' | 'oblique';

export const vFontDirective = createDirective<
  HTMLElement,
  number,
  void,
  VFontDirectiveModifier
>('font', {
  beforeMount(el, binding) {
    if (binding.modifiers.normal === true) {
      el.style.fontStyle = 'normal';
    } else if (binding.modifiers.italic === true) {
      el.style.fontStyle = 'italic';
    } else if (binding.modifiers.oblique === true) {
      el.style.fontStyle = 'oblique';
    }

    el.style.fontSize = `${binding.value}px`;
  },

  updated(el, binding) {
    el.style.fontSize = `${binding.value}px`;
  }
});
