import { ObjectDirective } from 'vue';

type DirectiveName = {
  readonly name?: string;
};

type CustomDirectiveInstance<T = HTMLElement, V = any> = ObjectDirective<T, V>;

export class CustomDirective implements ObjectDirective, DirectiveName {
  name = 'customDirective';

  beforeMount: CustomDirectiveInstance['beforeMount'] = (
    el,
    binding,
    vnode,
    prevVNode
  ) => {
    console.log(this.name);
  };
}
