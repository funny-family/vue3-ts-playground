import type { ObjectDirective } from 'vue';
import { createDirective } from '../utils/create-directive';

// normal, italic, oblique

export const vFontDirective = createDirective('font', {
  beforeMount(el: HTMLElement, binding) {
    if (binding.modifiers['normal'] === true) {
      el.style.fontStyle = 'normal';
    } else if (binding.modifiers['italic'] === true) {
      el.style.fontStyle = 'italic';
    } else if (binding.modifiers['oblique'] === true) {
      el.style.fontStyle = 'oblique';
    }

    el.style.fontSize = `${binding.value}px`;
  },

  updated(el, binding) {
    el.style.fontSize = `${binding.value}px`;
  }
});
