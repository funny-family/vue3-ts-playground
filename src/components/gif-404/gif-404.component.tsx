// https://github.com/vuejs/jsx-next/issues/51
// css modules https://www.jianshu.com/p/be1778a76763
// Template direct field access https://github.com/vuejs/vue-next/issues/1227
// https://juejin.cn/post/6885953990345883661
import { defineComponent, withScopeId, h } from 'vue';

// import { useScopeId } from "../../utils/hooks/use-scoped-id.hook";

import { emits } from "./gif-404.emits";
import { props } from "./gif-404.props";
import { setup } from "./gif-404.setup";
import styles from './styles/gif-404.module.scss'
// import { useWithScopedId } from '@/utils/hooks/use-with-scoped-id.hook';
// import { generateGuid } from '@/utils/guid';

export const Gif404 = defineComponent({
  inheritAttrs: false,
  get name(): string {
    return Object.keys({ Gif404 })[0];
  }, // return "Gif404"
  // name: "Gif404",
  emits,
  props,
  setup,
  render() {
    return (
      <>
        <div class={styles.gif404} {...this.$attrs}>
          {/* <div {...this.$attrs}> */}
          <h3 class="test">{this.$props.title}</h3>
          <button onClick={() => (this.isImageVisible = !this.isImageVisible)}>hide</button>
          <img
            v-show={this.isImageVisible}
            src="https://media2.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif?cid=ecf05e47ykoc6u9yi9oq4anlpsvkclqq6neg65x9qzy5ms4h&rid=giphy.gif&ct=g"
            alt="Page not found gif."
          />
        </div>
      </>
    );
  }
  // render() {
  //   return h('div', null, '111111');
  // }
});

// eslint-disable-next-line
console.log('Gif404 name:', Gif404.name);
