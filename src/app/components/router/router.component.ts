import { defineComponent } from 'vue';
import { render } from './router.render';
import { nameOf } from '@/app/shared/utils/name-of';

export const Router = defineComponent({});

// @ts-expect-error
Router.name = nameOf(() => Router);
Router.render = render;
