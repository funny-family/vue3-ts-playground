type ObjectWithId<T extends object> = T & { id: number };

/**
 * @description
 * Creates new array with "id" key for each object.
 *
 * @example
 * const users = createArrayOfObjectsWithIds([
 *   { name: 'Bob', age: 8 },
 *   { name: 'Sofia', age: 65 },
 *   { name: 'Mark', age: 34 }
 * ]);
 *
 * console.log(users); // [{ id: 1, name: 'Bob', age: 8 }, { id: 2, name: 'Sofia', age: 65 }, { id: 3, name: 'Mark', age: 34 }]
 */
export const createArrayOfObjectsWithIds = <T extends object>(
  array: T[]
): ObjectWithId<T>[] =>
  array.map((value, index) => ({ ...value, id: index + 1 }));
