// https://github.com/vuejs/jsx-next/issues/51
// css modules https://www.jianshu.com/p/be1778a76763
// Template direct field access https://github.com/vuejs/vue-next/issues/1227
// https://juejin.cn/post/6885953990345883661
import { defineComponent, normalizeClass } from 'vue';
import { props, Gif404Props } from './gif-404.props';
import { setup, Gif404Bindings } from './gif-404.setup';
import { styles } from './styles/gif-404.styles';
import { RouterLink } from 'vue-router';
import type { VSlots } from '@/app/shared/types/directives';
import type { Gif404Slots } from './gif-404.slots';
import type { Gif404Attrs } from './gif-404.attrs';

export const Gif404 = defineComponent<
  Gif404Props & Gif404Attrs & VSlots.Directive<Gif404Slots.JSXElement>,
  Gif404Bindings
>({
  get name(): string {
    return Object.keys({ Gif404 })[0];
  },
  render() {
    return (
      <>
        <div
          {...this.context.attrs}
          class={styles.gif404}
          onClick={() => console.log('on click!')}
        >
          <label>
            <b>{this.c}</b>
          </label>
          <a href="#">
            <img src={require('@/app/images/pngs/logo.png')} alt="Vue.js." />
          </a>
          <RouterLink to="/">adadad</RouterLink>
          <h3 class={normalizeClass([styles.gif404__text, styles.hidden])}>
            <b>{this.props.text}</b>
          </h3>
          <button onClick={() => (this.isImageVisible = !this.isImageVisible)}>
            hide
          </button>
          <img
            v-show={this.isImageVisible}
            src="https://media2.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif?cid=ecf05e47ykoc6u9yi9oq4anlpsvkclqq6neg65x9qzy5ms4h&rid=giphy.gif&ct=g"
            alt="Page not found gif."
          />

          <hr />

          <div style={{ color: 'black', border: '2px solid pink' }}>
            {this.context.slots.default != null && (
              <div title="content inside default slot!">
                {this.context.slots.default()}
              </div>
            )}

            {this.context.slots.footer != null && (
              <div title="content inside default slot!">
                {this.context.slots.footer({ t1: 't1', t2: 't2' })}
              </div>
            )}

            {this.context.slots.header != null && (
              <div title="content inside header slot!">
                {this.context.slots.header({
                  headerTitle: 'headerTitle',
                  someShittyText: 'someShittyText'
                })}
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
});

Gif404.inheritAttrs = false;
Gif404.props = props;
Gif404.setup = setup;
