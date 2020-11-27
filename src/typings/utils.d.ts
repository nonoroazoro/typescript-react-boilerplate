/**
 * Marks all properties to their `names` or `never` in `T`,
 * depends on whether they are assignable to `Type`.
 *
 * Use TypedProperties<T, Type, `true`> to reverse the result (exclude the `Type`).
 */
type TypedProperties<T, Type, Reversed = false> = {
    [Key in keyof T]-?: Exclude<T[Key], undefined> extends Type
    ? (Reversed extends false ? Key : never)
    : (Reversed extends false ? never : Key)
};

/**
 * From `T`, extracts property names those types are assignable to `Type`.
 */
type PropertyNames<T, Type> = TypedProperties<T, Type>[keyof T];

/**
 * From `T`, extracts property names those types are `not` assignable to `Type`.
 */
type ExcludePropertyNames<T, Type> = TypedProperties<T, Type, true>[keyof T];

/**
 * From `T`, extracts a set of properties those types are assignable to `Type`.
 */
type Properties<T, Type> = Pick<T, PropertyNames<T, Type>>;

/**
 * From `T`, extracts a set of properties those types are `not` assignable to `Type`.
 */
type ExcludeProperties<T, Type> = Pick<T, ExcludePropertyNames<T, Type>>;

/**
 * Converts enum type into union type (TypeScript 4.1+).
 */
type EnumToUnion<E> = `${E}`;

/**
 * Converts union type into intersection type.
 */
type UnionToIntersection<U> = (U extends any ? (arg: U) => void : never) extends ((arg: infer I) => void) ? I : never;
