import { Transition } from 'vue';
import { RouterView } from 'vue-router';
import type { RenderFunction } from '@/app/shared/types/component/render';
import t from '../../styles/transitions/fade-in-down.transition.scss';

export const render: RenderFunction<{}> = function () {
  return (
    <RouterView
      v-slots={{
        default: ({ Component, route }) => (
          <Transition
            name={t.fadeInDown}
            // {...{
            //   enterToClass: t.fadeInDownEnterTo
            // }}
            enterToClass={t.fadeInDownEnterTo}
            enterFromClass={t.fadeInDownEnterFrom}
            leaveToClass={t.fadeInDownLeaveTo}
            // "out-in" mode (error) if you use it with "Suspense" component"out-in" mode will work as usual :)
            mode="out-in"
            v-slots={{
              default: () => {
                // console.log('Component:', Component);
                // console.log('route:', route);

                return Component;
              }
            }}
          />
        )
      }}
    />
  );
};
