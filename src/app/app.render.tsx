import { Transition, resolveDynamicComponent, Suspense } from 'vue';
import { RouterView } from 'vue-router';
import type { AppBindings } from './app.setup';
import { callTernary } from '@/app/shared/utils/call-ternary';
import type { RenderFunction } from '@/app/shared/types/component/render';
// import { styles } from './app.styles.scss';
import './app.styles.scss';
// import '../assets/styles/transitions/fade-in-down.transition.scss';
import t from '../assets/styles/transitions/fade-in-down.transition.scss';

export const render: RenderFunction<AppBindings> = function () {
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

                return (
                  <Suspense
                    v-slots={{
                      default: () =>
                        callTernary({
                          condition: typeof DynamicComponent === 'symbol',
                          // if we keep "resolveDynamicComponent(Component)" as it is we will get "Symbol()" at first and then the page component
                          onTruthy: () => '',
                          onFalsy: () => DynamicComponent
                        }),
                      fallback: () => (
                        <div
                          style={{
                            width: '100vw',
                            height: '100vh',
                            backgroundColor: 'black'
                          }}
                        >
                          <h1
                            style={{
                              color: 'red'
                            }}
                          >
                            Loading...
                          </h1>
                        </div>
                      )
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
