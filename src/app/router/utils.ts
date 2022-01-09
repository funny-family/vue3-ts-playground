import type { RouteRecordNormalized } from 'vue-router';
import type { Names } from './routes/names';
import { router } from './index';

type FunctionArgument = {
  availableName?: Names;
  name?: string;
};

// export const getRouteRecordByName = ({ availableName, name }: FunctionArgument): RouteRecord => {};

export const getNormalizedRouteRecordByName = ({
  availableName,
  name
}: FunctionArgument): RouteRecordNormalized | undefined => {
  const foundRouted = router
    .getRoutes()
    .find((route) => route.name === availableName || name);

  return foundRouted;
};

// export const resolveGuards =
//   <N>((guard) =>)
//   // (...guards: ((guard: N) => void)[]) =>
//   (...guards: any) =>
//     guards.reduce((acc: any) => acc(guard));

export const resolveGuards =
  (...guardArguments: unknown[]) =>
  (...guardFunctions: any[]) =>
    guardFunctions.forEach((guardFunction) => guardFunction(...guardArguments));

/*
  router.beforeEach((to, from, next) => {
    //
  });

  ...

  router.beforeEach(resolveGuards(
    beforeEachGuard1,
    beforeEachGuard2,
    beforeEachGuard3
    // ...
  ))
 */
