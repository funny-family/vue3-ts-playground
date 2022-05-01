import type { ObjectDirective } from 'vue';

export const vFontSizeDirective: ObjectDirective<HTMLElement, any> = {
  beforeMount(el, binding) {
    let size = 16;

    if (binding.modifiers.small) {
      size = 12;
    } else if (binding.modifiers.big) {
      size = 24;
    }

    el.style.fontSize = `${size}px`;
  },

  updated(el, binding) {
    el.style.fontSize = `${binding.value}px`;
  }
};
