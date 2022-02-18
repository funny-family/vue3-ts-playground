import { Transition, resolveDynamicComponent } from 'vue';
import { RouterView } from 'vue-router';
import type { AppBindings } from './app.setup';
// import { styles } from './app.styles.scss';
import './app.styles.scss';
// import '../assets/styles/transitions/fade-in-down.transition.scss';
import t from '../assets/styles/transitions/fade-in-down.transition.scss';

export const render = function (this: AppBindings) {
  return (
    <RouterView
      v-slots={{
        default: ({ Component, route }) => (
          <Transition
            name={t.fadeInDown}
            enterToClass={t.fadeInDownEnterTo}
            enterFromClass={t.fadeInDownEnterFrom}
            leaveToClass={t.fadeInDownLeaveTo}
            // "out-in" mode (error)
            // mode="out-in"
            v-slots={{
              default: () => {
                console.log('Component:', Component);
                console.log('route:', route);

                const DynamicComponent = resolveDynamicComponent(Component);
                // if we keep "resolveDynamicComponent(Component)" as it is we will get "Symbol()" at first and then the page component
                return typeof DynamicComponent === 'symbol'
                  ? ''
                  : DynamicComponent;
                // return DynamicComponent;
              }
            }}
          />
        )
      }}
    />
  );
};
