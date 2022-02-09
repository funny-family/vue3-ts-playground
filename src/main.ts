import { createApp } from 'vue';
import { App } from './app/app.component';
import { router } from './app/router';
import { store } from './app/store';
import type { EnvironmentVariable } from '@/app/shared/types';
import { extractFromEnv } from './app/shared/utils/extract-from-env';

const app = createApp(App);

const environmentVariable = extractFromEnv(
  process.env.NODE_ENV
);

const s = process.env.NODE_ENV as EnvironmentVariable | undefined;

const ev = extractFromEnv(s);

if (environmentVariable === 'development') {
  app.config.performance = true;

  // app.config.errorHandler = (err, instance, info) => {
  //   console.group('app error');
  //   console.log('err:', err);
  //   console.log('instance:', instance);
  //   console.log('info:', info);
  //   console.groupEnd();
  // };

  // app.config.warnHandler = (msg, instance, trace) => {
  //   console.group('%c app warning', 'background-color: #250221; color: #f08784;');
  //   console.error('msg:', msg);
  //   console.log('instance:', instance);
  //   console.log('trace:', trace);
  //   console.groupEnd();
  // };
}

app.use(store);
app.use(router);
app.mount('#app');

// http://www.hygen.io/docs/faq
// The simple, fast, and scalable code generator that lives in your project.
// https://ardexpert.ru/article/7142
