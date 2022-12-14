// import './t';
import { withDirectives, withModifiers, HTMLAttributes } from 'vue';
import type { TestPageUnwrappedBindings } from './test-page.setup';
import type { RenderFunction } from '@/app/shared/types/component/render';
import { vFontDirective } from './test-page.directives';
import { withHandlerCache } from '@/app/shared/utils/with-handler-cache';
// import { withEventAttributeNameModify } from '@/app/shared/utils/with-modifiers';
import { withEventModifiers } from '@/app/shared/utils/with-event-modifiers';

export const render: RenderFunction<TestPageUnwrappedBindings> = function (
  ctx,
  cache
) {
  const { props, context, onButtonClick, onFormSubmit } = this;
  // // console.log('"onButtonClick" function as sting:', onButtonClick.toString());
  // console.log('"onButtonClick":', { onButtonClick });
  // console.log('"onButtonClick" toString:', onButtonClick.toString());
  // // @ts-ignore
  // // console.log('"onButtonClick" propto:', Object.getPrototypeOf(onButtonClick)());

  // eslint-disable-next-line
  // console.log('arguments of "test-page" component render:', arguments);

  return (
    <div>
      <section
      // v-click-outside={() => {
      //   //
      // }}
      >
        {withDirectives(<h1>test page</h1>, [
          vFontDirective.use({
            value: 40,
            modifiers: {
              italic: true
            }
          })
        ])}

        {withDirectives(
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, dicta.
          </p>,
          [
            vFontDirective.use({
              value: 20
            }),
            vFontDirective.use({
              modifiers: {
                oblique: true
              }
            })
          ]
        )}
      </section>

      <hr />

      <section>
        {/* @ts-ignore */}
        {/* <button type="button" onClickOnce={onButtonClick}> */}
        <button
          type="button"
          // // work!
          // onClick={cache[0] || (cache[0] = (e: any) => onButtonClick(e))}

          // // work!
          // onClick={
          //   cache[0] ||
          //   // @ts-ignore
          //   (cache[0] = ($event, ...args) => onButtonClick($event, ...args))
          // }

          // work!
          onClick={withHandlerCache(onButtonClick, cache, 0)}

          // onClick={onButtonClick}
        >
          click me!
        </button>
      </section>

      <hr />

      {/* <form onSubmit={onFormSubmit}> */}
      {/* <form {...withModifiers({

      })}> */}
      {/* <form {...withEventAttributeNameModify({ onSubmit: onFormSubmit })}> */}
      <form
        {...withEventModifiers({ onSubmit: onFormSubmit }, [
          'once',
          'prevent',
          '.'
        ])}
      >
        <input type="text" placeholder="Type here!" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
