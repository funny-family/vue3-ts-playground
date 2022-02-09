import { RouterView } from 'vue-router';
import type { AppBindings } from './app.setup';
// import { styles } from './app.styles.scss';
import './app.styles.scss';

export const render = function (this: AppBindings) {
  const { props, context } = this;

  return <RouterView />;
};
