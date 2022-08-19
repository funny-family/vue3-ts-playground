import type { ComponentOptions } from 'vue';
import { getCurrentInstance } from 'vue';
import { isArrayIncludesEmptyElement } from '@/app/shared/utils/is-array-includes-empty-element';

export const renderCacheEmptinessCheck: ComponentOptions = {
  mounted() {
    const currentInstance = getCurrentInstance();
    const renderCache = (currentInstance as any).renderCache as any[];

    if (isArrayIncludesEmptyElement(renderCache)) {
      console.error('Render cache cannot have empty slots!');
      throw { 'Error at component:': currentInstance };
    }
  }
};
