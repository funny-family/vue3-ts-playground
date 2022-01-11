/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineComponent, getCurrentInstance, withScopeId } from 'vue';

// import { setup } from './header.setup';
// import { props } from './header.props';

import jss from 'jss';
/**
 * @see https://github.com/BestVue3/vue-jss
 * @see https://python.iitter.com/other/264524.html
 */
const s = jss
  .createStyleSheet({
    app: {
      backgroundColor: 'green',
      color: 'yellow'
    }
  })
  .attach();
console.log(1123213, s.classes.app);

export const Header = defineComponent({
  name: 'Header',
  props: {
    title: {
      default: 'this is main heading!',
      required: true,
      type: String
    }
  },
  setup() {
    const instance = getCurrentInstance();
    // @ts-ignore
    const scopeId = instance?.type.__scopeId;
    const withId = withScopeId(scopeId);

    // console.log('scopeId:', scopeId);
    // console.log('withId:', withId);
  },
  render() {
    return (
      <header style={{ height: '60px', backgroundColor: 'red' }}>
        <div class={s.classes.app}>adadad34</div>
        {this.$props.title}
      </header>
    );
  }
});

// https://github.com/wonderful-panda/vue-tsx-support#migration-from-v2
