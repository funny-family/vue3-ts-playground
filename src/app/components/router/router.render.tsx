import { Transition, resolveDynamicComponent, Suspense } from 'vue';
import { RouterView } from 'vue-router';
import type { RenderFunction } from '@/app/shared/types/component/render';
import { callTernary } from '@/app/shared/utils/call-ternary';
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
                console.log('Component:', Component);
                console.log('route:', route);

                const DynamicComponent = resolveDynamicComponent(Component);
                const isDynamicComponentASymbolType =
                  typeof DynamicComponent === 'symbol';

                return (
                  <Suspense
                    v-slots={{
                      default: () => {
                        return callTernary({
                          condition: isDynamicComponentASymbolType,
                          // if we keep "resolveDynamicComponent(Component)" as it is we will get "Symbol()" at first and then the page component
                          onTruthy: () => '',
                          onFalsy: () => DynamicComponent
                        });
                      }
                    }}
                  />
                );
              }
            }}
          />
        )
      }}
    />
  );
};
