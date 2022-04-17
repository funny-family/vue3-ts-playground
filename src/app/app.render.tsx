import './app.styles.scss';
import type { AppBindings } from './app.setup';
import type { RenderFunction } from '@/app/shared/types/component/render';
import { Router } from './components/router/router.component';
// import { styles } from './app.styles.scss';
// import '../assets/styles/transitions/fade-in-down.transition.scss';

export const render: RenderFunction<AppBindings> = function () {
  return <Router />;
};
