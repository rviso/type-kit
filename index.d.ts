declare module 'types-echo' {

  export type Maybe<T> = T | null | undefined;

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
   * 表示只读记录类型。
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
   * 通过将其值替换为新值来修改给定类型中的字段。
   * @template T - 要修改的对象的类型。
   * @template K - 要修改的字段的键。
   * @template V - 要为字段设置的新值的类型。
   * @example -----------------------------
   * type a = { name: string, age: number };
   * const b: ModifyField<a, 'name', number> = { name: 123, age: 123 };
   */
  export type ModifyField<T, K extends keyof T, V> = Omit<T, K> & Record<K, V>;

  export type Fn<T = any, R = any> = (...arg: T[]) => R;

  export type VoidFn<T = any> = Fn<T, void>;

  export type PromiseFn<T = any, R = any> = (...arg: T[]) => Promise<R>;

  export type MaybePromise<T> = T | Promise<T>;

  export type MaybePromiseFn<T = any, R = any> = (...arg: T[]) => MaybePromise<R>;

  export type DeepPartial<T> = {
      [P in keyof T]?: DeepPartial<T[P]>;
  };

  export type DeepReadonly<T> = {
      readonly [P in keyof T]: DeepReadonly<T[P]>;
  };

  export type DeepRequired<T> = {
      [P in keyof T]-?: DeepRequired<T[P]>;
  };

  export type DeepMutable<T> = {
      -readonly [P in keyof T]: DeepMutable<T[P]>;
  };

  export type DeepWritable<T> = {
      -readonly [P in keyof T]: DeepWritable<T[P]>;
  };

  export type DeepNonNullable<T> = {
      [P in keyof T]-?: DeepNonNullable<T[P]>;
  };

  export type DeepNullable<T> = {
      [P in keyof T]: DeepNullable<T[P]> | null;
  };

  export type DeepMaybe<T> = {
      [P in keyof T]: DeepMaybe<T[P]> | undefined;
  };

  export type DeepVoidable<T> = {
      [P in keyof T]: DeepVoidable<T[P]> | void;
  };


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
    >


  type _NumbersFrom0ToN<From extends number> = From extends From
  ? number extends From
    ? number
    : From extends 0
    ? never
    : _NumbersFrom0ToNRec<From, [], 0>
  : never


  export type NumbersRange<From extends number, To extends number> = Exclude<_NumbersFrom0ToN<To>, _NumbersFrom0ToN<From>>;

}
