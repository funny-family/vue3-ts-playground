import { setBlockTracking } from 'vue';
import type { VNode } from 'vue';

/**
 * @see https://vuejs.org/api/built-in-directives.html#v-once
 * @see https://vue-next-template-explorer.netlify.app/#eyJzcmMiOiI8ZGl2IHYtb25jZT50ZXh0PC9kaXY+Iiwic3NyIjpmYWxzZSwib3B0aW9ucyI6eyJob2lzdFN0YXRpYyI6dHJ1ZX19
 *
 * @description
 * Render the element and component once only, and skip future updates. Same as "v-once" directive in SFC.
 *
 * @example
 * ...
 * {withRenderOnce(
 *    () => (
 *      <div>
 *        <div>
 *          counter: <b>{this.counter}</b> is{' '}
 *          {callTernary({
 *            condition: this.counter % 2 === 0,
 *            onTruthy: () => 'even number!',
 *            onFalsy: () => 'odd number!'
 *          })}
 *        </div>
 *        <button type="button" onClick={() => this.counter++}>
 *          counter + 1
 *        </button>
 *      </div>
 *    ),
 *    cache,
 *    3
 *  )}
 * ...
 *
 * // same as
 * {cache[3] ||
 *   (setBlockTracking(-1),
 *   (cache[3] = (
 *     <div>
 *        <div>
 *          counter: <b>{this.counter}</b> is{' '}
 *          {callTernary({
 *            condition: this.counter % 2 === 0,
 *            onTruthy: () => 'even number!',
 *            onFalsy: () => 'odd number!'
 *          })}
 *        </div>
 *        <button type="button" onClick={() => this.counter++}>
 *          counter + 1
 *        </button>
 *      </div>
 *   )),
 *   setBlockTracking(1),
 *   cache[3])}
 */
export const withRenderOnce = (
  render: () => VNode<any, any>,
  cache: any[],
  index: number
) => {
  if (cache[index] != null) return cache[index];

  const ret = render();

  return (
    setBlockTracking(-1),
    (cache[index] = ret),
    setBlockTracking(1),
    cache[index]
  );
};
