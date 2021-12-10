/* eslint-disable @typescript-eslint/ban-ts-comment */
// https://www.fatalerrors.org/a/embrace-the-jsx-syntax-of-vue-3-series.html
// https://programming.vip/docs/vue-3-props-emit-slot-render-jsx-and-createelement.html

import { defineComponent, ref, withScopeId } from 'vue';
import { RouterLink } from 'vue-router';
import { Header } from '../../shared/components/header/header.component';
import { Gif404 } from '../../shared/components/gif-404/gif-404.component';
import { Govno } from '../../shared/components/gif-404';
import { generateGuid } from '@/app/shared/utils/guid';
import { classNames } from '@/app/shared/lib/npm/class-names';

// -> name: Header/Menu/Button (Button component) // Bad!

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
    const title = 'Not found page!';
    const isGif404Visible = ref(true);

    const isRed = true;

    console.log('isGif404Visible:', isGif404Visible.value);
    console.log('isRed:', isRed);
    const val = ref('');

    const componentId = generateGuid();
    const withId = withScopeId(componentId);

    return withId(() => (
      <div class="gif404">
        <RouterLink to="/">
          <h2>to home!</h2>
        </RouterLink>

        <Header title="t45672" />

        <h1 class={classNames(isRed && 'is-red')}>{title}</h1>
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
          onClick={() => (isGif404Visible.value = !isGif404Visible.value)}
        >
          show/hide
        </button>
      </div>
    ));
  }

  // setup() {
  //   const title = "Not found page!";
  //   const isGif404Visible = ref(true);
  //   // console.log("Gif404:", Gif404.template);

  //   return {
  //     title,
  //     isGif404Visible
  //   };

  // },
  // render() {
  //   return (
  //     <div>
  //       <Header />

  //       <h1>{this.title}</h1>
  //       <br />
  //       <div v-if={this.isGif404Visible}>
  //         <Gif404 aria-label="this is giiifff!" />
  //       </div>
  //       <button type="button" onClick={() => this.isGif404Visible = !this.isGif404Visible}>
  //         show/hide
  //       </button>
  //     </div>
  //   )
  // }
});

export default NotFound;
