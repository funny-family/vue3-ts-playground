import type { TestPageUnwrappedBindings } from './test-page.setup';
import type { RenderFunction } from '@/app/shared/types/component/render';
import { withDirectives } from '@/app/shared/utils/with-directives';
import { vFontDirective } from './test-page.directives';

export const render: RenderFunction<TestPageUnwrappedBindings> = function () {
  const { props, context } = this;

  return (
    <div>
      <section>
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
            })
          ]
        )}
      </section>

      <hr />
    </div>
  );
};
