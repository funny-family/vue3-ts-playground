// export const useSetup = (useSetupCallback: any) => {
//   return
// };

import { SetupContext } from "vue";

export const useSetup = <Props>(
  props: Readonly<Props>,
  ctx: SetupContext
): any | Readonly<Props> | SetupContext | void => {
  //
  return {};
};
