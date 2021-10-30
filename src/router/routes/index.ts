/* eslint-disable no-useless-escape, @typescript-eslint/ban-ts-comment */
import type { RouteRecord, RouteRecordRaw } from 'vue-router';
import { names, Names } from './names';
import { path } from '@/lib/node/path';

/**
 * "Recursive Map function"
 * @see https://stackoverflow.com/questions/54245284/recursive-map-function
 */
// ==================================================================================================

// https://stackoverflow.com/questions/38075646/exclude-files-from-require-context-of-webpack/38076105
// https://github.com/vuejs-templates/webpack/issues/681
// https://stackoverflow.com/questions/30196888/how-to-restrict-webpack-require-context-neatly

// ==================================================================================================

class RouteTree {
  // @ts-ignore
  private routesMap: Record<string, RouteRecordRaw>;

  constructor() {
    this.generateRoutesMap();
  }

  private generateRoutesMap() {
    const requireRoutes = require.context('.', true, /(\b[a-z]+(-[a-z]+)*)(\.)(route)(\.)(js|ts)/);
    const routesMap = {} as Record<string, RouteRecordRaw>;

    requireRoutes.keys().forEach((pathToRouteFile) => {
      const foundRouteValue: RouteRecordRaw = requireRoutes(pathToRouteFile).default;
      // const foundRouteKey = foundRouteValue.name! as Names;
      const normalizedPathToRouteFile = path.normalize(pathToRouteFile);

      routesMap[normalizedPathToRouteFile] = foundRouteValue;
    });

    this.routesMap = routesMap;

    return this.routesMap;
  }

  private getSortedRoutesByLengthOfPath(): [string, RouteRecordRaw][] {
    const routesMapSortedByLengthOfFilePath = Object.entries(this.routesMap).sort(
      (a, b) => a[0].split('/').length - b[0].split('/').length
    );
    const isRouteAChild = (pathToRouteFile: string) => pathToRouteFile.includes('children');
    const routesMapOfRootRoutes = routesMapSortedByLengthOfFilePath.filter(
      (route) => !isRouteAChild(route[0])
    );
    const routesMapOfChildRoutes = routesMapSortedByLengthOfFilePath.filter((route) =>
      isRouteAChild(route[0])
    );
    const sortedRoutesMapOfChildRoutes = routesMapOfChildRoutes.sort((a, b) =>
      a[0] < b[0] ? -1 : 1
    );
    const sortedRoutesMap = [...sortedRoutesMapOfChildRoutes, ...routesMapOfRootRoutes];

    return sortedRoutesMap;
  }

  private createRoutesMapWithChildren(
    routes: [string, RouteRecordRaw][]
  ): [string, RouteRecordRaw][] {
    const routesMap: [string, RouteRecordRaw][] = [];
    routes.forEach((route) => {
      routesMap.push(route);
    });

    routesMap.forEach((route, index, currentArray) => {
      const parentFolderName = route[0].split('/')[route[0].split('/').lastIndexOf('children') - 1];
      const regExpOfParentFileName = new RegExp(
        `(${parentFolderName})\/([a-z]+(-[a-z]+)*)(\.)(route)(\.)(js|ts)`
      );

      if (route[0].includes('children') === true) {
        const parentRoute =
          currentArray[currentArray.findIndex((route) => regExpOfParentFileName.test(route[0]))];

        if (parentRoute[1].children === undefined) {
          parentRoute[1].children = [];
        }

        parentRoute[1].children.push(route[1]);
      }
    });

    return routesMap;
  }

  private getRootRoutesOfRoutesMap(routes: [string, RouteRecordRaw][]): [string, RouteRecordRaw][] {
    return routes.filter((route) => !route[0].includes('children'));
  }

  private getRouteRecordList(routesMap: [string, RouteRecordRaw][]): RouteRecordRaw[] {
    return routesMap.map((route) => route[1]);
  }

  getRoutes() {
    const sortedRoutesByLengthOfPath = this.getSortedRoutesByLengthOfPath();
    const routesMapWithChildren = this.createRoutesMapWithChildren(sortedRoutesByLengthOfPath);
    const rootRoutesOfRoutesMap = this.getRootRoutesOfRoutesMap(routesMapWithChildren);
    const routeRecordList = this.getRouteRecordList(rootRoutesOfRoutesMap);

    return routeRecordList;
  }
}

const routeTree = new RouteTree();
export const routes = routeTree.getRoutes();
// console.log(12313, routeTree.getRoutes());
