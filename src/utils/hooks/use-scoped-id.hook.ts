/* eslint-disable @typescript-eslint/ban-types, no-cond-assign, @typescript-eslint/ban-ts-comment */
import { withScopeId, getCurrentInstance } from 'vue';

/**
 * @see https://zhuanlan.zhihu.com/p/267343741
 */
export function useScopeId(): <T extends Function>(fn: T) => T | null {
  const instance = getCurrentInstance();
  if (!instance) {
    console.warn(`useScopeId is called without current active component instance.`);

    // @ts-ignore
    return null;
  }

  // let scopeId: string;
  const scopeId = instance?.uid.toString();
  // if ((scopeId = (instance.type as any).__scopeId)) {
  if (scopeId) {
    const withId = withScopeId(scopeId);

    // @ts-ignore
    return withId;
  }

  // @ts-ignore
  return null;
}
