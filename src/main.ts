import { createApp } from 'vue';
import App from './app/App.vue';
import { router } from './app/router';
import { store } from './app/store';
import { hideConsoleLogs } from './app/shared/utils/hide-console-logs';
import type { EnvironmentVariable } from '@/app/types';
import { extractFromEnv } from './app/shared/utils/extract-from-env';

const app = createApp(App);

const environmentVariable = extractFromEnv(process.env.NODE_ENV) as EnvironmentVariable;
if (environmentVariable === 'production') {
  hideConsoleLogs();
}

if (environmentVariable === 'development') {
  app.config.performance = true;
}

app.use(store);
app.use(router);
app.mount('#app');
