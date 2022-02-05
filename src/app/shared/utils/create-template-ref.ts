/**
 * @description
 * Allow to create "ref" for template.
 *
 * @example
 * import { createTemplateRef } from './app/shared/utils/create-template-ref';
 * import { nameOf } from './app/shared/utils/name-of';
 *
 * ...
 * <input
 *   type="text"
 *   autocomplete="true"
 *   ref={createTemplateRef(nameOf(() => this.inputRef))}
 * />
 * ...
 */
export const createTemplateRef = (ref: string): string =>
  ref.replace(/((.*)(\.))(?:)/, '');
