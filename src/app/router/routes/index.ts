/* eslint-disable no-useless-escape, */
import type { RouteRecordRaw } from 'vue-router';
import { normalize as normalizePath } from 'path';

// =================================================================

type RouteFilePath = {
  filePath: string;
};

type RouteRecordRawWithFilePath = RouteRecordRaw & RouteFilePath;

type WebpackRequireContext = ReturnType<typeof require.context>;

interface RouteTreeInterface {
  create: RouteRecordRaw[];
  readonly context: WebpackRequireContext;
  readonly childFolderName: string;
}

type RouteTreeConstructor = Pick<
  RouteTreeInterface,
  'context' | 'childFolderName'
>;

export class RouteTree1 implements RouteTreeInterface {
  public readonly requireRoutes: RouteTreeInterface['context'];
  public readonly childFolderName: RouteTreeInterface['childFolderName'];

  private routeRecordsWithFilePath: RouteRecordRawWithFilePath[] = [];

  public constructor({ context, childFolderName }: RouteTreeConstructor) {
    this.requireRoutes = context;
    this.childFolderName = childFolderName;

    this.collectAllRoutes();
  }

  // @ts-expect-error
  public create(): RouteTreeInterface['create'] {
    return [];
  }

  private getPathDepth(filePath: string): number {
    return filePath.split('/').length - 1;
  }

  private collectAllRoutes() {
    const listOfPathsToRouteFiles = this.requireRoutes.keys();
    const lengthOfListOfPathsToRouteFiles = listOfPathsToRouteFiles.length;
    // const arr: number[] = [0, 0, 0];
    // const minFileDepth = arr[0];
    // const averageFileDepth = arr[1];
    // const maxFileDepth = arr[2];

    const a = [];

    for (let i = 0; i < lengthOfListOfPathsToRouteFiles; i++) {
      const pathToRouteFile = listOfPathsToRouteFiles[i];
      const normalizedPathToRouteFile = normalizePath(pathToRouteFile);
      const routeRecordRaw: RouteRecordRaw =
        this.requireRoutes(pathToRouteFile).default;

      const routeRecordWithFilePath: RouteRecordRawWithFilePath = {
        ...routeRecordRaw,
        filePath: normalizedPathToRouteFile
      };

      a.push(this.getPathDepth(normalizedPathToRouteFile));
      //
      this.routeRecordsWithFilePath[i] = routeRecordWithFilePath;
    }

    // console.log(a.sort((a, b) => a - b));

    // console.log('pathListToRouteFiles:', pathListToRouteFiles);
    // console.log('routeRecordsWithFilePath:', this.routeRecordsWithFilePath);
    // console.log(
    //   'routeRecordsWithFilePath:',
    //   this.routeRecordsWithFilePath.map(({ filePath }) => filePath)
    // );
  }

  private method2() {
    //
  }
}

const routeTree1 = new RouteTree1({
  context: require.context(
    '.',
    true,
    /(\b[a-z]+(-[a-z]+)*)(\.)(route)(\.)(js|ts)/
  ),
  childFolderName: 'children'
});

// console.log('routeTree1:', routeTree1);

/**
 * "Recursive Map function"
 * @see https://stackoverflow.com/questions/54245284/recursive-map-function
 */
// ==================================================================================================

// https://stackoverflow.com/questions/38075646/exclude-files-from-require-context-of-webpack/38076105
// https://github.com/vuejs-templates/webpack/issues/681
// https://stackoverflow.com/questions/30196888/how-to-restrict-webpack-require-context-neatly

// ==================================================================================================

type RoutesRecord = Record<string, RouteRecordRaw>;
type RouteMap = [string, RouteRecordRaw];

class RouteTree {
  private routesRecord: RoutesRecord = {};
  private readonly childRoutesFolderName = 'children';

  constructor() {
    this.generateRoutesRecord();
  }

  private generateRoutesRecord() {
    const requireRoutes = require.context(
      '.',
      true,
      /(\b[a-z]+(-[a-z]+)*)(\.)(route)(\.)(js|ts)/
    );
    const routesRecord = {} as RoutesRecord;

    requireRoutes.keys().forEach((pathToRouteFile) => {
      const foundRouteValue: RouteRecordRaw =
        requireRoutes(pathToRouteFile).default;
      const normalizedPathToRouteFile = normalizePath(pathToRouteFile);

      routesRecord[normalizedPathToRouteFile] = foundRouteValue;
    });

    this.routesRecord = routesRecord;

    return this.routesRecord;
  }

  private createRoutesMap(routesRecord: RoutesRecord): RouteMap[] {
    const routesMapSortedByLengthOfFilePath = Object.entries(routesRecord).sort(
      (a, b) => a[0].split('/').length - b[0].split('/').length
    );

    const isChildRoute = (pathToRouteFile: string) =>
      pathToRouteFile.includes(this.childRoutesFolderName);

    const routesMapOfRootRoutes = routesMapSortedByLengthOfFilePath.filter(
      (route) => !isChildRoute(route[0])
    );
    const routesMapOfChildRoutes = routesMapSortedByLengthOfFilePath.filter(
      (route) => isChildRoute(route[0])
    );
    const sortedRoutesMapOfChildRoutes = routesMapOfChildRoutes.sort((a, b) =>
      a[0] < b[0] ? -1 : 1
    );
    const sortedRoutesMap = [
      ...sortedRoutesMapOfChildRoutes,
      ...routesMapOfRootRoutes
    ];

    return sortedRoutesMap;
  }

  private createRoutesMapWithChildren(routes: RouteMap[]): RouteMap[] {
    const routesMap: RouteMap[] = [];
    routes.forEach((route) => {
      routesMap.push(route);
    });

    routesMap.forEach((routeMap, index, currentArray) => {
      const pathToRouteFile = routeMap[0];

      if (pathToRouteFile.includes(this.childRoutesFolderName) === true) {
        const parentFolderName =
          pathToRouteFile.split('/')[
            pathToRouteFile.split('/').lastIndexOf(this.childRoutesFolderName) -
              1
          ];
        const regExpOfParentFileName = new RegExp(
          `(${parentFolderName})\/(${parentFolderName})(\.)(route)(\.)(js|ts)`
        );

        const parentRouteMap =
          currentArray[
            currentArray.findIndex((route) => {
              const pathToRouteFile = route[0];
              const parentRouteObject =
                regExpOfParentFileName.test(pathToRouteFile);

              return parentRouteObject;
            })
          ];
        const parentRoute = parentRouteMap[1];

        if (parentRoute.children === undefined) {
          parentRoute.children = [];
        }

        const currentRoute = routeMap[1];
        parentRoute.children.push(currentRoute);
      }
    });

    return routesMap;
  }

  private getRootRoutesInRoutesMap(routes: RouteMap[]): RouteMap[] {
    return routes.filter(
      (route) => !route[0].includes(this.childRoutesFolderName)
    );
  }

  private getRouteRecordList(routesMap: RouteMap[]): RouteRecordRaw[] {
    return routesMap.map((route) => route[1]);
  }

  create() {
    const routesMap = this.createRoutesMap(this.routesRecord);
    const routesMapWithChildren = this.createRoutesMapWithChildren(routesMap);
    const rootRoutesOfRoutesMap = this.getRootRoutesInRoutesMap(
      routesMapWithChildren
    );
    const routeTree = this.getRouteRecordList(rootRoutesOfRoutesMap);

    return routeTree;
  }
}

const routeTree = new RouteTree();
export const routes = routeTree.create();
