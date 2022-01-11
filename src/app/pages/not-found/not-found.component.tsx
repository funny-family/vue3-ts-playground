// https://www.fatalerrors.org/a/embrace-the-jsx-syntax-of-vue-3-series.html
// https://programming.vip/docs/vue-3-props-emit-slot-render-jsx-and-createelement.html

import {
  defineComponent,
  ref,
  resolveDirective,
  vModelText,
  withDirectives,
  withScopeId
} from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { Header } from '../../shared/components/header/header.component';
import { Gif404 } from '../../shared/components/gif-404/gif-404.component';
import { Govno } from '../../shared/components/gif-404';
import { generateGuid } from '@/app/shared/utils/guid';
import { TextField } from '@/app/shared/components/text-field/text-field.component';
import type { TextFieldBindings } from '@/app/shared/components/text-field/text-field.setup';
import { Modifier } from '@/app/shared/utils/modifiers';
import { withModifiers } from '@/app/shared/utils/with-modifiers';
import type { VModel } from '@/app/shared/types/directives';

/**
 * Writing Vue.js Render Functions in JSX
 * https://alligator.io/vuejs/jsx-render-functions/
 */

export const NotFound = defineComponent({
  name: 'NotFound',
  components: {
    Gif404,
    Header
  },
  setup() {
    <RouterView  />
    const title = 'Not found page!';
    const isGif404Visible = ref(true);

    const isRed = true;

    console.log('isGif404Visible:', isGif404Visible.value);
    console.log('isRed:', isRed);

    const componentId = generateGuid();
    const withId = withScopeId(componentId);

    const textFieldValue = ref('');
    const textFieldValueNumber = ref(0);
    const textFieldRef = ref();
    console.log('"TextField" ref:', textFieldRef);

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
      s
    };
  },

  render() {
    const trimModifier = 'trim';

    return (
      <div class="gif404">
        <form
          {...withModifiers(
            {
              onSubmit: (e) => {
                console.log(e);

                this.s();
              }
            },
            [Modifier.Event.Prevent, Modifier.Event.Once]
          )}
          style={{ border: '2px solid green' }}
        >
          <input placeholder="some shit info" type="text" />
          <button type="submit">submit from</button>
        </form>

        <div>
          <>
            <fieldset>
              <label>aduadaud</label>
              <input
                about="aduadaud"
                type="text"
                // v-model={[this.textFieldValue, [Modifier.VModel.Base.Trim]]}
                v-model={
                  [this.textFieldValue, ['trim']] as VModel.Directive<string>
                }
              />
            </fieldset>

            {/* <fieldset>
              <label>aduadaud</label>
              {withDirectives(<input about="aduadaud" type="text" />, [
                [
                  vModelText,
                  this.textFieldValue,
                  // 'modelValue',
                  (void 0) as any as string,
                  {
                    trim: true
                  }
                ]
              ])}
            </fieldset> */}
          </>

          <>
            {/* https://vue-next-jsx-explorer.netlify.app/#const%20App%20%3D%20()%20%3D%3E%20%3Cdiv%3E%0A%3Cspan%3EHello%20World%3C%2Fspan%3E%0A%3Cdiv%20onClickSelf%3D%7B()%20%3D%3E%20alert(1111)%7D%3E1231231%3C%2Fdiv%3E%0A%3C%2Fdiv%3E */}
            {/* https://vue-next-template-explorer.netlify.app/#%7B%22src%22%3A%22%3Cdiv%20class%3D%5C%22counter%5C%22%3E%5Cn%20%20%3Cspan%3E%7B%7B%20count%20%7D%7D%3C%2Fspan%3E%5Cn%20%20%3Cbutton%20%40click.stop%3D%5C%22increment%5C%22%3E%2B%3C%2Fbutton%3E%5Cn%3C%2Fdiv%3E%5Cn%22%2C%22options%22%3A%7B%22mode%22%3A%22module%22%2C%22filename%22%3A%22Foo.vue%22%2C%22prefixIdentifiers%22%3Afalse%2C%22hoistStatic%22%3Afalse%2C%22cacheHandlers%22%3Afalse%2C%22scopeId%22%3Anull%2C%22inline%22%3Afalse%2C%22ssrCssVars%22%3A%22%7B%20color%20%7D%22%2C%22compatConfig%22%3A%7B%22MODE%22%3A3%7D%2C%22whitespace%22%3A%22condense%22%2C%22bindingMetadata%22%3A%7B%22TestComponent%22%3A%22setup-const%22%2C%22setupRef%22%3A%22setup-ref%22%2C%22setupConst%22%3A%22setup-const%22%2C%22setupLet%22%3A%22setup-let%22%2C%22setupMaybeRef%22%3A%22setup-maybe-ref%22%2C%22setupProp%22%3A%22props%22%2C%22vMySetupDir%22%3A%22setup-const%22%7D%7D%7D */}
            {/* https://v3.vuejs.org/guide/events.html#event-modifiers */}
            {/* https://stackoverflow.com/questions/51198226/vue-v-onclick-native-in-jsx */}
            {/* https://github.com/michitaro/vue-menu/issues/20 */}
            {/* https://github.com/vuejs/vue-next/blob/2937530beff5c6bb57286c2556307859e37aa809/packages/compiler-core/src/ast.ts#L426 */}
            {/* https://v3.vuejs.org/api/global-api.html#withdirectives */}
            <TextField
              class="TextField"
              label="Text Field Label"
              // v-model={[this.textFieldValue, [Modifier.VModel.Base.Trim]]} // does not work!
              v-model={[this.textFieldValue, ['trim']]}
              // {...{ 'v-model': [this.textFieldValue, ['trim']] }}
              // // @ts-ignore
              // modelModifiers={{ trim: true }}
              ref={this.textFieldRef}
            />
          </>
          <div>textFieldValue: {this.textFieldValue}</div>
        </div>

        <hr />

        <RouterLink to="/">
          <h2>to home!</h2>
        </RouterLink>

        <Header title="t45672" />

        <br />

        <Gif404
          onClick={(e) => {
            console.log(e);
          }}
          style={{ color: 'red', border: '2px solid green' }}
          class="121212112"
          title="This is title!"
          v-slots={{
            default: () => (
              <div>
                <div>default</div>
              </div>
            ),
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
            footer: (t) => <>123131</>
          }}
        />

        <hr />

        <Govno.Gif404 class="3434343343" title="11" />
        {/* </div> */}
        {/* {isGif404Visible.value === true &&
          <Gif404 v-if={() => true} aria-label="this is giiifff!" />
        } */}
        <button
          type="button"
          onClick={() => (this.isGif404Visible = !this.isGif404Visible)}
        >
          show/hide
        </button>
      </div>
    );
  }
});

export default NotFound;
