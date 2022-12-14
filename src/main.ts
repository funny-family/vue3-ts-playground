import { createApp } from 'vue';
import { App } from './app/app.component';
import { router } from './app/router';
import { store } from './app/store';
import type { EnvironmentVariable } from '@/app/shared/types';
import { extractFromEnv } from './app/shared/utils/extract-from-env';
import { proxifyConsoleWarn } from './app/shared/utils/proxify-console-warn';
import { renderCacheEmptinessCheck } from './app/shared/mixins/render-cache-emptiness-check.mixin';

// import '@/app/shared/utils/custom-directive';
// import '@/app/shared/directives/v-focus.directive';

const app = createApp(App);

const environmentVariable = extractFromEnv(process.env.NODE_ENV);

const s = process.env.NODE_ENV as EnvironmentVariable | undefined;
const ev = extractFromEnv(s);

if (process.env.NODE_ENV === 'development') {
  app.config.performance = true;

  app.mixin(renderCacheEmptinessCheck);

  // proxifyConsoleWarn();
}

app.use(store);
app.use(router);
app.mount('#app');

// http://www.hygen.io/docs/faq
// The simple, fast, and scalable code generator that lives in your project.
// https://ardexpert.ru/article/7142
