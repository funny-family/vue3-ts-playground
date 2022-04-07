import { defineComponent } from 'vue';
import { setup } from './app.setup';
import { render } from './app.render';
import { nameOf } from './shared/utils/name-of';

export const App = defineComponent({});

// @ts-expect-error
App.name = nameOf(() => App);
App.inheritAttrs = false;
App.setup = setup;
App.render = render;
