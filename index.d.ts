declare module 'types-echo' {

  /**
   * @description: 一个可能为null或undefined的类型
   * @template T - 泛型
   * @example -----------------------------
   * const a: Maybe<string> = null;
   * const b: Maybe<string> = undefined;
   * const c: Maybe<string> = '123';
   */
  export type Maybe<T> = T | null | undefined;

  /**
   * @description: 去除类型中的null和undefined
   * @template T - 泛型
   * @example -----------------------------
   * type a = NonNullable<string | null | undefined>; // type a = string;
   */
  export type NonNullable<T> = T extends null | undefined ? never : T;

  /**
   * @description: 一个可以为null的类型
   * @template T - 泛型
   * @example -----------------------------
   * const a: Nullable<string> = null;
   * const b: Nullable<string> = '123';
   */
  export type Nullable<T> = T | null;

  /**
   * @description: 一个可以为undefined的类型
   * @template T - 泛型
   * @example -----------------------------
   * const a: Undefinedable<string> = undefined;
   * const b: Undefinedable<string> = '123';
   */
  export type Undefinedable<T> = T | undefined;

  /**
   * @description: 一个可以为null或undefined的类型
   * @template T - 泛型
   * @example -----------------------------
   * const a: NullableOrUndefined<string> = null;
   * const b: NullableOrUndefined<string> = undefined;
   * const c: NullableOrUndefined<string> = '123';
   */
  export type NullableOrUndefined<T> = T | null | undefined;

  /**
   * @description: 一个可以为void的类型
   * @template T - 泛型
   * @example -----------------------------
   * const a: Voidable<string> = void 0;
   * const b: Voidable<string> = '123';
   */
  export type Voidable<T> = T | void;

  /**
   * @description 表示只读记录类型。
   * @template K - 记录的键的类型。
   * @template T - 记录的值的类型。
   * @example -----------------------------
   * type a = ReadonlyRecord<'name' | 'age', string>;
   * const b: a = { name: '123', age: '123' };
   */
  export type ReadonlyRecord<K extends keyof any, T> = {
      readonly [P in K]: T;
  };

  /**
   * @description 通过将其值替换为新值来修改给定类型中的字段。
   * @template T - 要修改的对象的类型。
   * @template K - 要修改的字段的键。
   * @template V - 要为字段设置的新值的类型。
   * @example -----------------------------
   * type a = { name: string, age: number };
   * const b: ModifyField<a, 'name', number> = { name: 123, age: 123 };
   */
  export type ModifyField<T, K extends keyof T, V> = Omit<T, K> & Record<K, V>;

  /**
   * @description 一个通用函数类型。
   * @template T - 参数类型。
   * @template R - 返回类型。
   * @example -----------------------------
   * const fn: Fn<number, string> = (num: number) => num.toString();
   */
  export type Fn<T = any, R = any> = (...arg: T[]) => R;

  /**
   * @description 一个返回void的函数类型。
   * @template T - 参数类型。
   * @example -----------------------------
   * const fn: VoidFn<number> = (num: number) => { console.log(num); };
   */
  export type VoidFn<T = any> = Fn<T, void>;

  /**
   * @description 一个返回Promise的函数类型。
   * @template T - 参数类型。
   * @template R - Promise的返回类型。
   * @example -----------------------------
   * const fn: PromiseFn<number, string> = async (num: number) => num.toString();
   */
  export type PromiseFn<T = any, R = any> = (...arg: T[]) => Promise<R>;

  /**
   * @description 一个可以为Promise的类型。
   * @template T - 类型。
   * @example -----------------------------
   * const a: MaybePromise<string> = '123';
   * const b: MaybePromise<string> = Promise.resolve('123');
   */
  export type MaybePromise<T> = T | Promise<T>;

  /**
   * @description 一个返回MaybePromise的函数类型。
   * @template T - 参数类型。
   * @template R - MaybePromise的返回类型。
   * @example -----------------------------
   * const fn: MaybePromiseFn<number, string> = (num: number) => num.toString();
   * const fnAsync: MaybePromiseFn<number, string> = async (num: number) => num.toString();
   */
  export type MaybePromiseFn<T = any, R = any> = (...arg: T[]) => MaybePromise<R>;

  /**
   * @description 将类型的所有属性设置为可选。
   * @template T - 类型。
   * @example -----------------------------
   * type a = { name: string, age: number };
   * const b: DeepPartial<a> = { name: '123' };
   */
  export type DeepPartial<T> = {
      [P in keyof T]?: DeepPartial<T[P]>;
  };

  /**
   * @description 将类型的所有属性设置为只读。
   * @template T - 类型。
   * @example -----------------------------
   * type a = { name: string, age: number };
   * const b: DeepReadonly<a> = { name: '123', age: 123 };
   */
  export type DeepReadonly<T> = {
      readonly [P in keyof T]: DeepReadonly<T[P]>;
  };

  /**
   * @description 将类型的所有属性设置为必填。
   * @template T - 类型。
   * @example -----------------------------
   * type a = { name?: string, age?: number };
   * const b: DeepRequired<a> = { name: '123', age: 123 };
   */
  export type DeepRequired<T> = {
      [P in keyof T]-?: DeepRequired<T[P]>;
  };

  /**
   * @description 将类型的所有属性设置为可变。
   * @template T - 类型。
   * @example -----------------------------
   * type a = { readonly name: string, readonly age: number };
   * const b: DeepMutable<a> = { name: '123', age: 123 };
   */
  export type DeepMutable<T> = {
      -readonly [P in keyof T]: DeepMutable<T[P]>;
  };

  /**
   * @description 将类型的所有属性设置为可写。
   * @template T - 类型。
   * @example -----------------------------
   * type a = { readonly name: string, readonly age: number };
   * const b: DeepWritable<a> = { name: '123', age: 123 };
   */
  export type DeepWritable<T> = {
      -readonly [P in keyof T]: DeepWritable<T[P]>;
  };

  /**
   * @description 将类型的所有属性设置为非null。
   * @template T - 类型。
   * @example -----------------------------
   * type a = { name: string | null, age: number | null };
   * const b: DeepNonNullable<a> = { name: '123', age: 123 };
   */
  export type DeepNonNullable<T> = {
      [P in keyof T]-?: DeepNonNullable<T[P]>;
  };

  /**
   * @description 将类型的所有属性设置为可以为null。
   * @template T - 类型。
   * @example -----------------------------
   * type a = { name: string, age: number };
   * const b: DeepNullable<a> = { name: null, age: null };
   */
  export type DeepNullable<T> = {
      [P in keyof T]: DeepNullable<T[P]> | null;
  };

  /**
   * @description 将类型的所有属性设置为可以为undefined。
   * @template T - 类型。
   * @example -----------------------------
   * type a = { name: string, age: number };
   * const b: DeepMaybe<a> = { name: undefined, age: undefined };
   */
  export type DeepMaybe<T> = {
      [P in keyof T]: DeepMaybe<T[P]> | undefined;
  };

  /**
   * @description 将类型的所有属性设置为可以为void。
   * @template T - 类型。
   * @example -----------------------------
   * type a = { name: string, age: number };
   * const b: DeepVoidable<a> = { name: void 0, age: void 0 };
   */
  export type DeepVoidable<T> = {
      [P in keyof T]: DeepVoidable<T[P]> | void;
  };

  /**
   * @description 范围内的数字类型。
   * @template From - 起始数字。
   * @template To - 结束数字。
   * @example -----------------------------
   * type a = NumbersRange<1, 5>; // 1 | 2 | 3 | 4
   */
  export type NumbersRange<From extends number, To extends number> = Exclude<_NumbersFrom0ToN<To>, _NumbersFrom0ToN<From>>;

  type _NumbersFrom0ToNRec<
    Nr extends number,
    Counter extends unknown[],
    Accumulator extends number
  > = Counter['length'] extends Nr
    ? Accumulator
    : _NumbersFrom0ToNRec<
        Nr,
        [unknown, ...Counter],
        Accumulator | Counter['length']
      >;

  type _NumbersFrom0ToN<From extends number> = From extends From
    ? number extends From
      ? number
      : From extends 0
      ? never
      : _NumbersFrom0ToNRec<From, [], 0>
    : never;



  /**
   * @description 将类型的所有属性设置为不可为空。
   * @template T - 类型。
   * @example -----------------------------
   * type a = { name: string | null | undefined, age: number | null | undefined };
   * const b: DeepNonNullableOrUndefined<a> = { name: '123', age: 123 };
   */
  export type DeepNonNullableOrUndefined<T> = {
      [P in keyof T]-?: DeepNonNullableOrUndefined<NonNullable<T[P]>>;
  };

  /**
   * @description 将联合类型转换为交叉类型。
   * @template U - 联合类型。
   * @example -----------------------------
   * type a = { name: string } | { age: number };
   * type b = UnionToIntersection<a>; // { name: string } & { age: number }
   */
  export type UnionToIntersection<U> =
    (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

  /**
   * @description 获取类型的所有键，并将其组合成联合类型。
   * @template T - 类型。
   * @example -----------------------------
   * type a = { name: string, age: number };
   * type b = KeysUnion<a>; // "name" | "age"
   */
  export type KeysUnion<T> = keyof T;

  /**
   * @description 根据条件选择类型中的一些属性。
   * @template T - 类型。
   * @template Condition - 条件类型。
   * @example -----------------------------
   * type a = { name: string, age: number, isAdmin: boolean };
   * type b = ConditionalPick<a, boolean>; // { isAdmin: boolean }
   */
  export type ConditionalPick<T, Condition> = {
      [K in keyof T as T[K] extends Condition ? K : never]: T[K]
  };

  /**
   * @description 将联合类型转换为数组类型。
   * @template U - 联合类型。
   * @example -----------------------------
   * type a = 'a' | 'b' | 'c';
   * type b = UnionToArray<a>; // ['a', 'b', 'c']
   */
  export type UnionToArray<U> =
    U extends any ? (u: U) => void : never extends (u: infer I) => void ? I[] : never;

  /**
   * @description 将类型的所有属性设置为选填且可空。
   * @template T - 类型。
   * @example -----------------------------
   * type a = { name: string, age: number };
   * const b: DeepOptionalNullable<a> = { name: null };
   */
  export type DeepOptionalNullable<T> = {
      [P in keyof T]?: DeepOptionalNullable<T[P]> | null;
  };

  /**
   * @description 排除联合类型中的某些类型。
   * @template U - 联合类型。
   * @template Excluded - 要排除的类型。
   * @example -----------------------------
   * type a = 'a' | 'b' | 'c';
   * type b = ExcludeFromUnion<a, 'a' | 'b'>; // 'c'
   */
  export type ExcludeFromUnion<U, Excluded> = U extends Excluded ? never : U;

  /**
   * @description 从元组中获取第一个元素的类型。
   * @template T - 元组类型。
   * @example -----------------------------
   * type a = [string, number, boolean];
   * type b = FirstElement<a>; // string
   */
  export type FirstElement<T extends any[]> = T extends [infer F, ...any[]] ? F : never;

  /**
   * @description 从元组中获取最后一个元素的类型。
   * @template T - 元组类型。
   * @example -----------------------------
   * type a = [string, number, boolean];
   * type b = LastElement<a>; // boolean
   */
  export type LastElement<T extends any[]> = T extends [...any[], infer L] ? L : never;

  /**
   * @description 将类型中的所有函数属性提取出来。
   * @template T - 类型。
   * @example -----------------------------
   * type a = { name: string, age: number, greet: () => void };
   * type b = FunctionProperties<a>; // { greet: () => void }
   */
  export type FunctionProperties<T> = {
      [K in keyof T as T[K] extends Function ? K : never]: T[K]
  };

  /**
   * @description 获取对象类型的所有值组成的联合类型。
   * @template T - 类型。
   * @example -----------------------------
   * type a = { name: string, age: number };
   * type b = ValueOf<a>; // string | number
   */
  export type ValueOf<T> = T[keyof T];

  /**
   * @description 将类型的所有属性设置为必填且不可为空。
   * @template T - 类型。
   * @example -----------------------------
   * type a = { name?: string | null, age?: number | null };
   * const b: DeepRequiredNonNullable<a> = { name: '123', age: 123 };
   */
  export type DeepRequiredNonNullable<T> = {
      [P in keyof T]-?: DeepRequiredNonNullable<NonNullable<T[P]>>;
  };

  /**
 * @description 将元组转换为联合类型。
 * @template T - 元组类型。
 * @example -----------------------------
 * type a = [string, number, boolean];
 * type b = TupleToUnion<a>; // string | number | boolean
 */
  export type TupleToUnion<T extends any[]> = T[number];

  /**
   * @description 获取类型的所有可选属性的键组成的联合类型。
   * @template T - 类型。
   * @example -----------------------------
   * type a = { name?: string, age: number };
   * type b = OptionalKeys<a>; // "name"
   */
  export type OptionalKeys<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? K : never
  }[keyof T];

  /**
   * @description 获取类型的所有必选属性的键组成的联合类型。
   * @template T - 类型。
   * @example -----------------------------
   * type a = { name: string, age?: number };
   * type b = RequiredKeys<a>; // "name"
   */
  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? never : K
  }[keyof T];

  /**
   * @description 从对象类型中提取所有非函数属性。
   * @template T - 类型。
   * @example -----------------------------
   * type a = { name: string, age: number, greet: () => void };
   * type b = NonFunctionProperties<a>; // { name: string, age: number }
   */
  export type NonFunctionProperties<T> = {
    [K in keyof T as T[K] extends Function ? never : K]: T[K]
  };

  /**
   * @description 从对象类型中提取所有可选属性。
   * @template T - 类型。
   * @example -----------------------------
   * type a = { name?: string, age: number };
   * type b = OptionalProperties<a>; // { name?: string }
   */
  export type OptionalProperties<T> = Pick<T, OptionalKeys<T>>;

  /**
   * @description 从对象类型中提取所有必选属性。
   * @template T - 类型。
   * @example -----------------------------
   * type a = { name: string, age?: number };
   * type b = RequiredProperties<a>; // { name: string }
   */
  export type RequiredProperties<T> = Pick<T, RequiredKeys<T>>;

  /**
   * @description 深度合并两个类型。
   * @template T - 第一个类型。
   * @template U - 第二个类型。
   * @example -----------------------------
   * type a = { name: string, details: { age: number } };
   * type b = { details: { gender: string } };
   * type c = DeepMerge<a, b>; // { name: string, details: { age: number, gender: string } }
   */
  export type DeepMerge<T, U> = {
    [K in keyof T | keyof U]: K extends keyof U
      ? U[K]
      : K extends keyof T
      ? T[K] extends object
        ? U[K] extends object
          ? DeepMerge<T[K], U[K]>
          : T[K]
        : T[K]
      : never;
  };

  /**
   * @description 将联合类型转换为交叉类型。
   * @template T - 联合类型。
   * @example -----------------------------
   * type a = { name: string } | { age: number };
   * type b = UnionToIntersection<a>; // { name: string } & { age: number }
   */
  export type UnionToIntersection<U> =
    (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

  /**
   * @description 将类型的键和值交换。
   * @template T - 类型。
   * @example -----------------------------
   * type a = { name: 'Alice', age: '25' };
   * type b = Invert<a>; // { Alice: 'name', 25: 'age' }
   */
  export type Invert<T> = {
    [K in keyof T as `${T[K]}`]: K
  };

  /**
   * @description 将所有属性设为可选，并在联合类型中添加未定义。
   * @template T - 类型。
   * @example -----------------------------
   * type a = { name: string, age: number };
   * const b: PartialWithUndefined<a> = { name: undefined };
   */
  export type PartialWithUndefined<T> = {
    [P in keyof T]?: T[P] | undefined;
  };

  /**
   * @description 将对象类型的所有值映射到新类型。
   * @template T - 原始类型。
   * @template U - 映射的目标类型。
   * @example -----------------------------
   * type a = { name: string, age: number };
   * type b = MapValues<a, boolean>; // { name: boolean, age: boolean }
   */
  export type MapValues<T, U> = {
    [K in keyof T]: U;
  };

  /**
   * @description 将对象类型的所有键映射到新类型。
   * @template T - 原始类型。
   * @template U - 映射的目标类型。
   * @example -----------------------------
   * type a = { name: string, age: number };
   * type b = MapKeys<a, 'info'>; // { info: string, info: number }
   */
  export type MapKeys<T, U extends keyof any> = {
    [K in keyof T as U]: T[K];
  };

  /**
   * @description 将联合类型中的每个类型转换为包含该类型的对象。
   * @template U - 联合类型。
   * @example -----------------------------
   * type a = 'name' | 'age';
   * type b = UnionToObject<a>; // { name: 'name' } | { age: 'age' }
   */
  export type UnionToObject<U> = U extends any ? { [K in U]: K } : never;
}


