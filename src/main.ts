import { createApp } from 'vue';
import { App } from './app/app.component';
import { router } from './app/router';
import { store } from './app/store';
import type { EnvironmentVariable } from '@/app/shared/types';
import { extractFromEnv } from './app/shared/utils/extract-from-env';

// import '@/app/shared/utils/custom-directive';
// import '@/app/shared/directives/v-focus.directive';

const app = createApp(App);

const environmentVariable = extractFromEnv(process.env.NODE_ENV);

const s = process.env.NODE_ENV as EnvironmentVariable | undefined;

const ev = extractFromEnv(s);

if (environmentVariable === 'development') {
  app.config.performance = true;

  // {
  //   const log = console.log.bind(console);
  //   console.log = (...args: any[]) => {
  //     log(...args);
  //   };
  // }

  /**
   * @see https://stackoverflow.com/questions/9216441/intercept-calls-to-console-log-in-chrome
   */
  {
    const warn = console.warn.bind(console);
    console.warn = (...args: any[]) => {
      const consoleArgs = [...args];
      if (
        Array.isArray(consoleArgs) &&
        typeof consoleArgs[0] === 'string' &&
        (consoleArgs[0] as string).startsWith('[Vue warn]')
      ) {
        throw new Error(...args);
      }

      warn(...args);
    };
  }
}

app.use(store);
app.use(router);
app.mount('#app');

// http://www.hygen.io/docs/faq
// The simple, fast, and scalable code generator that lives in your project.
// https://ardexpert.ru/article/7142
