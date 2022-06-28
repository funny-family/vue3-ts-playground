import './app.styles.scss';
import type { AppBindings } from './app.setup';
import type { RenderFunction } from '@/app/shared/types/component/render';
import { Router } from './components/router/router.component';
// import { styles } from './app.styles.scss';
// import '../assets/styles/transitions/fade-in-down.transition.scss';

export const render: RenderFunction<AppBindings> = function () {
  const { isOriginal } = this;

  // if (sessionStorage.getItem('tab-id') !== null) {
  //   return <div>adad</div>;
  // }

  if (isOriginal === false) {
    return (
      <div>
        <div>Cannot open multiple instances</div> {/* @ts-ignore */}
        <button
          type="button"
          onClick={() => {
            window.top.close();
          }}
        >
          close
        </button>
      </div>
    );
  }

  return <Router />;
};
