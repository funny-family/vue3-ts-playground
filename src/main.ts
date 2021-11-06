import { createApp } from 'vue';
import App from '@/App.vue';
import { router } from './router';
import { store } from './store';
import { hideConsoleLogs } from './utils/hide-console-logs';
import type { EnvironmentVariable } from '@/types';
import { extractFromEnv } from './utils/extract-from-env';

const environmentVariable = extractFromEnv(process.env.NODE_ENV) as EnvironmentVariable;
if (environmentVariable === 'production') {
  hideConsoleLogs();
}

const app = createApp(App);

app.use(store);
app.use(router);
app.mount('#app');
