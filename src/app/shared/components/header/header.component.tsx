/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineComponent, getCurrentInstance, withScopeId } from 'vue';

// import { setup } from './header.setup';
// import { props } from './header.props';

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

    console.log('scopeId:', scopeId);
    console.log('withId:', withId);
  },
  render() {
    return <header style={{ height: '60px', backgroundColor: 'red' }}>{this.$props.title}</header>;
  }
});

// https://github.com/wonderful-panda/vue-tsx-support#migration-from-v2
