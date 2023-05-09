/* eslint-disable prefer-rest-params */
// https://www.fatalerrors.org/a/embrace-the-jsx-syntax-of-vue-3-series.html
// https://programming.vip/docs/vue-3-props-emit-slot-render-jsx-and-createelement.html

import './not-found.scss';
import {
  defineComponent,
  onMounted,
  ref,
  h,
  withScopeId,
  KeepAlive,
  setBlockTracking,
  withMemo,
  withDirectives as _withDirectives,
  resolveDirective,
  isVNode,
  openBlock
} from 'vue';
import styles from './not-found.styles.scss';
import { RouterLink } from 'vue-router';
import { Header } from '../../shared/components/header/header.component';
import { Gif404 } from '../../shared/components/gif-404/gif-404.component';
import { TextField } from '@/app/shared/components/text-field/text-field.component';
import type { TextFieldRef } from '@/app/shared/components/text-field/text-field.ref';
import { Modifier } from '@/app/shared/utils/modifiers';
// import { withModifiers } from '@/app/shared/utils/with-modifiers';
import { nameOf } from '@/app/shared/utils/name-of';
import { callTernary } from '@/app/shared/utils/call-ternary';
import { generateGuid } from '@/app/shared/utils/guid';
import { Govno } from '@/app/shared/components/gif-404';
import emojiBlinkLeftIcon from './images/emoji-blink-left.icon.svg';
import EmojiBlinkLeftIcon from './images/emoji-blink-left.icon.svg?inline';
import { vFocusDirective } from '@/app/shared/directives/v-focus.directive';
import { vFontDirective } from '@/app/shared/directives/v-font.directive';
import { useForwardRef } from '@/app/shared/composables/use-forward-ref.composable';
import { withDirectives } from '@/app/shared/utils/with-directives';
import { withRenderOnce } from '@/app/shared/utils/with-render-once';

/**
 * Writing Vue.js Render Functions in JSX
 * https://alligator.io/vuejs/jsx-render-functions/
 */

export const NotFound = defineComponent({
  name: 'NotFound',

  components: {
    // Gif404,
    // Header,
    // TextField
  },

  setup(props, context) {
    const title = 'Not found page!';
    const isGif404Visible = ref(true);

    const isRed = true;

    const componentId = generateGuid();
    const withId = withScopeId(componentId);

    const textFieldValue = ref('');
    const textFieldValueNumber = ref(0);
    const textFieldRef = ref<TextFieldRef>();
    const inputRef = ref();

    // console.log('context:', context);

    const counter = ref(0);

    onMounted(() => {
      console.log('"TextField" ref value:', textFieldRef.value?.deepObj);
      // console.log('input ref value:', inputRef.value);
    });

    const trimModifier = 'trim';

    const s = () => {
      console.log('sssssssssss');
    };

    return {
      isGif404Visible,
      textFieldValue,
      textFieldValueNumber,
      textFieldRef,
      trimModifier,
      inputRef,
      s,
      counter
    };
  },

  // @ts-ignore
  render(ctx, cache, props, setup, data, options) {
    // const {  } = this;
    this;

    const trimModifier = 'trim';
    const directiveFocus = resolveDirective('focus');

    // console.log('"args" of "not-found" component:', arguments);

    return (
      <div>
        {/* <div class="gif404"> */}
        <div>
          <img src={emojiBlinkLeftIcon} alt="EmojiBlinkLeftIcon." />
          <hr />
          <div class={styles.emojiBlinkLeftIconContainer} />
          <hr />
          <EmojiBlinkLeftIcon />
        </div>

        <form
          // {...withModifiers(
          //   {
          //     onSubmit: (e) => {
          //       console.log(e);

          //       this.s();
          //     }
          //   },
          //   [Modifier.Event.Prevent, Modifier.Event.Once]
          // )}
          style={{ border: '2px solid green' }}
        >
          {withDirectives(
            <input
              // @ts-ignore
              // v-focus
              placeholder="some shit info"
              type="text"
            />,
            // [vFocusDirective.use()]
            []
          )}
          <button type="submit">submit from</button>
        </form>

        <div>
          <>
            <fieldset>
              <label>aduadaud</label>
              <div>
                {this.textFieldRef !== undefined && (
                  <pre>
                    {JSON.stringify(this.textFieldRef.deepObj, null, 2)}
                  </pre>
                )}
              </div>

              {/* {withDirectives(
                <input
                  class={1}
                  about="aduadaud"
                  type="text"
                  v-model={[this.textFieldValue, ['trim']]}
                  ref="inputRef"
                />,
                [vFocusDirective.use()]
              )} */}

              {/* <input
                // // @ts-ignore
                // v-focus
                class={1}
                about="aduadaud"
                type="text"
                // // @ts-ignore
                // vModel={[this.textFieldValue, ['trim']]}
                v-model={[this.textFieldValue, ['trim']]}
                ref="inputRef"
              /> */}
            </fieldset>
          </>

          <>
            {/* https://sfc.vuejs.org/#__DEV__eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSdcblxuY29uc3QgbXNnID0gcmVmKCdIZWxsbyBXb3JsZCEnKVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGgxPnt7IG1zZyB9fTwvaDE+XG4gIDxpbnB1dCB2LW1vZGVsPVwibXNnXCI+XG48L3RlbXBsYXRlPiIsImltcG9ydC1tYXAuanNvbiI6IntcbiAgXCJpbXBvcnRzXCI6IHtcbiAgICBcInZ1ZVwiOiBcImh0dHBzOi8vc2ZjLnZ1ZWpzLm9yZy92dWUucnVudGltZS5lc20tYnJvd3Nlci5qc1wiLFxuICAgIFwidnVlL3NlcnZlci1yZW5kZXJlclwiOiBcImh0dHBzOi8vc2ZjLnZ1ZWpzLm9yZy9zZXJ2ZXItcmVuZGVyZXIuZXNtLWJyb3dzZXIuanNcIlxuICB9XG59In0= */}
            {/* https://vue-next-jsx-explorer.netlify.app/#const%20App%20%3D%20()%20%3D%3E%20%3Cdiv%3E%0A%3Cspan%3EHello%20World%3C%2Fspan%3E%0A%3Cdiv%20onClickSelf%3D%7B()%20%3D%3E%20alert(1111)%7D%3E1231231%3C%2Fdiv%3E%0A%3C%2Fdiv%3E */}
            {/* https://vue-next-template-explorer.netlify.app/#%7B%22src%22%3A%22%3Cdiv%20class%3D%5C%22counter%5C%22%3E%5Cn%20%20%3Cspan%3E%7B%7B%20count%20%7D%7D%3C%2Fspan%3E%5Cn%20%20%3Cbutton%20%40click.stop%3D%5C%22increment%5C%22%3E%2B%3C%2Fbutton%3E%5Cn%3C%2Fdiv%3E%5Cn%22%2C%22options%22%3A%7B%22mode%22%3A%22module%22%2C%22filename%22%3A%22Foo.vue%22%2C%22prefixIdentifiers%22%3Afalse%2C%22hoistStatic%22%3Afalse%2C%22cacheHandlers%22%3Afalse%2C%22scopeId%22%3Anull%2C%22inline%22%3Afalse%2C%22ssrCssVars%22%3A%22%7B%20color%20%7D%22%2C%22compatConfig%22%3A%7B%22MODE%22%3A3%7D%2C%22whitespace%22%3A%22condense%22%2C%22bindingMetadata%22%3A%7B%22TestComponent%22%3A%22setup-const%22%2C%22setupRef%22%3A%22setup-ref%22%2C%22setupConst%22%3A%22setup-const%22%2C%22setupLet%22%3A%22setup-let%22%2C%22setupMaybeRef%22%3A%22setup-maybe-ref%22%2C%22setupProp%22%3A%22props%22%2C%22vMySetupDir%22%3A%22setup-const%22%7D%7D%7D */}
            {/* https://v3.vuejs.org/guide/events.html#event-modifiers */}
            {/* https://stackoverflow.com/questions/51198226/vue-v-onclick-native-in-jsx */}
            {/* https://github.com/michitaro/vue-menu/issues/20 */}
            {/* https://github.com/vuejs/vue-next/blob/2937530beff5c6bb57286c2556307859e37aa809/packages/compiler-core/src/ast.ts#L426 */}
            {/* https://v3.vuejs.org/api/global-api.html#withdirectives */}

            {withDirectives(
              <TextField
                // @ts-ignore
                contenteditable={true}
                // v-show={true}
                class="TextField"
                style={{ padding: '10px' }}
                aria-hidden={false}
                v-model={[this.textFieldValue, ['trim', 'capitalize']]}
                // ref={(el: any) => {
                //   console.log(1231313132, el);
                // }}
                // ref={this.textFieldFunctionRef as any}
                color="white"
                ref={nameOf(() => this.textFieldRef)}
                data-true={true}
                data-string="''"
                data-number={1}
                onClick={() => {
                  //
                }}
                v-slots={{
                  label: () => 'This is "TextField" label'
                  // text: () => 1
                }}
                label={{
                  'aria-label': 'label',
                  class: 'TextField__Label'
                }}
                input={{
                  'aria-label': 'input',
                  class: 'TextField__Input',
                  onInput: () => {
                    console.log('TextField onInput');
                  }
                }}
              />,
              [vFocusDirective.use()]
              // []
            )}

            {/* <TextField
              class="TextField"
              label="Text Field Label"
              v-model={[this.textFieldValue, ['trim', 'capitalize']]}
              ref={nameOf(() => this.textFieldRef)}
              // ref={this.textFieldFunctionalRef}
            /> */}
          </>
          {/* <div>textFieldRef: {`${this.textFieldRef}`}</div> */}
          <div>nameOf "textFieldValue": {nameOf(() => this.textFieldRef)}</div>
          <div>textFieldValue: {this.textFieldValue}</div>
        </div>

        <hr />

        {/* =================================================================================== */}
        <>
          {/* "KeepAlive" component does not work with "v-slots" directive */}
          <KeepAlive
            v-slots={{
              default: () => (
                <RouterLink to="/">
                  <h2>to home!</h2>
                </RouterLink>
              )
            }}
          />
        </>
        {/* =================================================================================== */}

        <KeepAlive>
          <RouterLink
            to="/"
            v-slots={{
              default: (args) => {
                // console.log('"RouterLink" args:', args);

                return withDirectives(<h2>to home!</h2>, [
                  vFontDirective.use({
                    value: 60,
                    modifiers: {
                      oblique: true
                    }
                  })
                ]);
              }
            }}
          />
        </KeepAlive>

        <br />

        {cache[0] ||
          (setBlockTracking(-1),
          (cache[0] = (
            <div>
              <div>
                counter: <b>{this.counter}</b> is{' '}
                {callTernary({
                  condition: this.counter % 2 === 0,
                  onTruthy: () => 'even number!',
                  onFalsy: () => 'odd number!'
                })}
              </div>
              <button type="button" onClick={() => this.counter++}>
                counter + 1
              </button>
            </div>
          )),
          setBlockTracking(1),
          cache[0])}

        {/* {renderOnce(
          cache,
          0,
          <div>
            <div>
              counter: <b>{this.counter}</b> is{' '}
              {callTernary({
                condition: this.counter % 2 === 0,
                onTruthy: () => 'even number!',
                onFalsy: () => 'odd number!'
              })}
            </div>
            <button type="button" onClick={() => this.counter++}>
              counter + 1
            </button>
          </div>
        )} */}

        <Header title="t45672" />
        {/* https://v3.vuejs.org/api/global-api.html#resolvecomponent */}
        {/* https://v3.vuejs.org/api/built-in-components.html#component */}
        {/* https://github.com/vuejs/babel-plugin-jsx/issues/161 */}

        {/* https://liujiangblog.com/course/Vue3/307 */}
        {h(Header, { title: '000000' })}

        <br />

        <Gif404
          onClick={(e) => {
            console.log(e);
          }}
          style={{ color: 'red', border: '2px solid green' }}
          class="121212112"
          text="This is title!"
          v-slots={{
            default: () => 'hfsjhfskfhs72t3aud',
            header: ({ headerTitle, someShittyText }) => (
              <div>
                <div>
                  title that came from "header" slot: <b>{headerTitle}</b>
                </div>
                <div>
                  Some Shitty Text: <b>{someShittyText}</b>
                </div>
              </div>
            ),
            footer: (t) => [4444, 2, t]
          }}
        />

        <hr />

        {/* ========================================================= */}
        {/* {cache[1] ||
          (setBlockTracking(-1),
          (cache[1] = (
            <Govno.Gif404 text="123131313" class="3434343343" title="11" />
          )),
          setBlockTracking(1),
          cache[1])} */}

        {withRenderOnce(
          () => (
            <Govno.Gif404 text="123131313" class="3434343343" title="11" />
          ),
          cache,
          1
        )}
        {/* ========================================================= */}

        <button
          type="button"
          onClick={() => (this.isGif404Visible = !this.isGif404Visible)}
        >
          show/hide
        </button>

        <hr />

        {withMemo(
          [],
          () => (
            <div>
              <div>
                counter: <b>{this.counter}</b> is{' '}
                {callTernary({
                  condition: this.counter % 2 === 0,
                  onTruthy: () => 'even number!',
                  onFalsy: () => 'odd number!'
                })}
              </div>
              <button type="button" onClick={() => this.counter++}>
                counter + 1
              </button>
            </div>
          ),
          cache,
          2
        )}

        {withRenderOnce(
          () => (
            <div>
              <div>
                counter: <b>{this.counter}</b> is{' '}
                {callTernary({
                  condition: this.counter % 2 === 0,
                  onTruthy: () => 'even number!',
                  onFalsy: () => 'odd number!'
                })}
              </div>
              <button type="button" onClick={() => this.counter++}>
                counter + 1
              </button>
            </div>
          ),
          cache,
          3
        )}
      </div>
    );
  }
});

NotFound.directives = {
  ...vFocusDirective.register(),
  ...vFontDirective.register()
};

export default NotFound;
