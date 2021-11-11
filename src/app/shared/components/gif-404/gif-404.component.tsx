// https://github.com/vuejs/jsx-next/issues/51
// css modules https://www.jianshu.com/p/be1778a76763
// Template direct field access https://github.com/vuejs/vue-next/issues/1227
// https://juejin.cn/post/6885953990345883661
// import { useScopeId } from "../../utils/hooks/use-scoped-id.hook";
import { defineComponent } from 'vue';
import { emits } from './gif-404.emits';
import { props } from './gif-404.props';
import { setup } from './gif-404.setup';
import { styles } from './styles/gif-404.styles';
import { classNames } from '@/app/shared/lib/npm/class-names';
import { nameOf } from '../../utils/name-of';

// import './styles/gif-404.styles.scss';
// import { useWithScopedId } from '@/utils/hooks/use-with-scoped-id.hook';
// import { generateGuid } from '@/utils/guid';

export const Gif404 = defineComponent({
  inheritAttrs: false,
  get name(): string {
    return Object.keys({ Gif404 })[0];
  }, // return "Gif404"
  // name: "Gif404",
  // name: nameOf(() => Gif404), // -> function{\nreturnGif404;\n}
  emits,
  props,
  setup,
  render() {
    return (
      <>
        <div class={styles.gif404}>
          {/* <div class="gif404"> */}
          <h3 class={classNames(styles.gif404__text, styles.hidden)}>{this.$props.title}</h3>
          {/* <h3 class="gif404-text">{this.$props.title}</h3> */}
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
console.log('Gif404:', Gif404);
console.log('name of "Gif404":', nameOf(() => Gif404));
