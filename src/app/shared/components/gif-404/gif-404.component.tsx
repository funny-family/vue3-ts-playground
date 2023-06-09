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
import type { Gif404Attrs } from './gif-404.attrs';
import type { RequireOnlyOne } from '@/app/shared/types';
import { RenderFunction } from '../../types/component/render';
import type { Gif404Slots } from './gif-404.slots';

type Props = Gif404Props &
  Gif404Attrs &
  VSlots.Directive<Gif404Slots.JSXElement>;
type RawBindings = Gif404Bindings;

const render: RenderFunction<Gif404Bindings> = function (
  ctx,
  cache,
  $props,
  $setup,
  $data,
  $options
) {
  return (
    <>
      <div
        {...ctx.context.attrs}
        class={styles.gif404}
        onClick={() => console.log('on click!')}
      >
        <label>
          <b>{ctx.c}</b>
        </label>
        <a href="#">
          <img src={require('@/app/images/pngs/logo.png')} alt="Vue.js." />
        </a>
        <RouterLink to="/">adadad</RouterLink>
        <h3 class={normalizeClass([styles.gif404__text, styles.hidden])}>
          <b>{ctx.props.text}</b>
        </h3>
        <button onClick={() => (ctx.isImageVisible = !ctx.isImageVisible)}>
          hide
        </button>
        <img
          v-show={ctx.isImageVisible}
          src="https://media2.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif?cid=ecf05e47ykoc6u9yi9oq4anlpsvkclqq6neg65x9qzy5ms4h&rid=giphy.gif&ct=g"
          alt="Page not found gif."
        />

        <hr />

        <div style={{ color: 'black', border: '2px solid pink' }}>
          {ctx.context.slots.default != null && (
            <div title="content inside 'default' slot!">
              {ctx.context.slots.default()}
            </div>
          )}

          {ctx.context.slots.footer != null && (
            <div title="content inside 'footer' slot!">
              {ctx.context.slots.footer('this is string arg')}
            </div>
          )}

          {ctx.context.slots.header != null && (
            <div title="content inside 'header' slot!">
              {ctx.context.slots.header({
                headerTitle: 'headerTitle',
                someShittyText: 'someShittyText'
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export const Gif404 = defineComponent<Props, RawBindings>({});

Gif404.inheritAttrs = false;
Gif404.props = props;
Gif404.setup = setup;
Gif404.render = render;
