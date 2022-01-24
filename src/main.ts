import './jss.config';
import { createApp } from 'vue';
import App from './app/App.vue';
import { router } from './app/router';
import { store } from './app/store';
import type { EnvironmentVariable } from '@/app/shared/types';
import { extractFromEnv } from './app/shared/utils/extract-from-env';

const app = createApp(App);

const environmentVariable = extractFromEnv<EnvironmentVariable>(
  process.env.NODE_ENV
);

if (environmentVariable === 'development') {
  app.config.performance = true;
}

app.use(store);
app.use(router);
app.mount('#app');

// http://www.hygen.io/docs/faq
// The simple, fast, and scalable code generator that lives in your project.
// https://ardexpert.ru/article/7142
