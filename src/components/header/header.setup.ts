import { EmitsOptions, SetupContext } from "vue";
import type { HeaderProps } from "./header.props";

export const setup = (
  props: Readonly<HeaderProps>,
  ctx: SetupContext<EmitsOptions>
) => {
  return {
    one: 1
  };
};
