// ============= Test Cases =============
import type { Equal, Expect } from "../test-utils";

interface Model {
  name: string;
  count: number;
  isReadonly: boolean;
  isEnable: boolean;
}

type cases = [
  Expect<Equal<OmitByType<Model, boolean>, { name: string; count: number }>>,
  Expect<
    Equal<
      OmitByType<Model, string>,
      { count: number; isReadonly: boolean; isEnable: boolean }
    >
  >,
  Expect<
    Equal<
      OmitByType<Model, number>,
      { name: string; isReadonly: boolean; isEnable: boolean }
    >
  >
];

// ============= Your Code Here =============
type OmitByType<T, U> = {
  [K in keyof T as T[K] extends U ? never : K]: T[K];
};
