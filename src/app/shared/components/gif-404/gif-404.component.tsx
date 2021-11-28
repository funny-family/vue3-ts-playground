// https://github.com/vuejs/jsx-next/issues/51
// css modules https://www.jianshu.com/p/be1778a76763
// Template direct field access https://github.com/vuejs/vue-next/issues/1227
// https://juejin.cn/post/6885953990345883661
import { defineComponent } from 'vue';
import { emits } from './gif-404.emits';
import { props, Gif404Props, Gif404Attrs } from './gif-404.props';
import { setup, Gif404RawBindings } from './gif-404.setup';
import { styles } from './styles/gif-404.styles';
import { classNames } from '@/app/shared/lib/npm/class-names';
import { RouterLink } from 'vue-router';

export const Gif404 = defineComponent<Gif404Props & Gif404Attrs, Gif404RawBindings>({
  get name(): string {
    return Object.keys({ Gif404 })[0]; // return "Gif404"
  },
  render() {
    return (
      <>
        <div {...this.context.attrs} class={styles.gif404}>
          <label>
            <b>{this.c}</b>
          </label>
          <a href="#">
            <img src={require('../../../../assets/images/pngs/logo.png')} alt="Vue.js." />
          </a>
          <RouterLink to="/">adadad</RouterLink>
          <h3 class={classNames(styles.gif404__text, styles.hidden)}>{this.props.title}</h3>
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
});

Gif404.inheritAttrs = false;
Gif404.props = props;
Gif404.setup = setup;
Gif404.emits = emits;
