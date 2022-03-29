import type { VNodeTypes } from 'vue';
import { setBlockTracking } from 'vue';
import { indexesOf } from '@/app/shared/utils/indexes-of';

type Node = VNodeTypes | JSX.Element;

interface ArgumentsOfRenderOnceFunction {
  renderFunctionArguments: IArguments;
  cacheSlot: number;
  node: Node;
}

// const cacheSlots: number[] = [];

/**
 * @see https://vuejs.org/api/built-in-directives.html#v-once
 *
 * @description
 * Render the element and component once only, and skip future updates. (function version of "v-once" directive for JSX)
 *
 * @example
 * ...
 * render() {
 *   return (
 *     ...
 *       <div>
 *         {renderOnce({
 *           renderFunctionArguments: arguments,
 *           node: <h1>I'll be render only once!</h1>
 *         })}
 *       </div>
 *     ...
 *   );
 * }
 * ...
 */
export const renderOnce = ({
  renderFunctionArguments,
  cacheSlot,
  node
}: ArgumentsOfRenderOnceFunction): Node => {
  // cacheSlots.push(cacheSlot);
  const cache = renderFunctionArguments[1];

  const cachedNode =
    cache[cacheSlot] ||
    (setBlockTracking(-1),
    (cache[cacheSlot] = node),
    setBlockTracking(1),
    cache[cacheSlot]);

  return cachedNode;
};
