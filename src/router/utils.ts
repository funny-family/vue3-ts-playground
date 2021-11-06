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
  const foundRouted = router.getRoutes().find((route) => route.name === availableName || name);

  return foundRouted;
};
