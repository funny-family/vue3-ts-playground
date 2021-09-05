/* eslint-disable @typescript-eslint/no-namespace */

// GOOD!
// import { Gif404 } from "./gif-404.component";

// export const Govno = {
//   Gif404
// };

// ==================================================================

// GOOD!
import { Gif404 as Gif404_ } from "./gif-404.component";

export namespace Govno {
  export const Gif404 = Gif404_;
}
