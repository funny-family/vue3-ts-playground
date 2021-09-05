/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { RouteRecordRaw } from "vue-router";

const fromCabeToCamelCase = (str: string | undefined | null): string| null => {
  if (str === undefined || str === null) return null;

  const arr = str.split('-');
  const capital = arr.map((item, index) => (
    index
      ? `${item.charAt(0).toUpperCase()}${item.slice(1).toLowerCase()}`
        : item.toLowerCase())
  );
  const capitalString = capital.join('');

  return capitalString;
};

// eslint-disable-next-line
const pathRegExp = /^(.+)\/([^\/]+)$/;
// eslint-disable-next-line
const routeFileRegExp = /(\b[a-z]+(-[a-z]+)*)(\.)(route)(\.)(js|ts)/;
const requireRoutes = require.context(".", true, /(\b[a-z]+(-[a-z]+)*)(\.)(route)(\.)(js|ts)/);

const foundRoutes: Record<string, RouteRecordRaw> = {};
export const route: Record<string, RouteRecordRaw> = {};

const separator = '/';

requireRoutes.keys().forEach((pathToRouteFile) => {
  const routeName = fromCabeToCamelCase(pathToRouteFile.match(routeFileRegExp)![1]) || '';
  const foundRouteKey = pathToRouteFile
    .match(pathRegExp)![1]
    .replace(/^(.\/)|(\/)/, '')
    .split(separator)
    .map((character) => {
      if (character !== separator) return fromCabeToCamelCase(character);
    })
    .join(separator);
  const foundRouteValue: RouteRecordRaw = requireRoutes(pathToRouteFile).default;

  foundRoutes[foundRouteKey] = foundRouteValue;
  foundRoutes[foundRouteKey].name = routeName;

  route[routeName] = foundRouteValue;
  route[routeName].name = routeName;
  route[routeName].children = [];
});

const r = () => foundRoutes;

type R = ReturnType<typeof r>;

export const routes = {};

console.log('foundRoutes:', foundRoutes);
