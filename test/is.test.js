import { isEmpty, isEuDateTime, isDeepEqual, isObject } from "../index";

test("isEmpty", () => {
  expect(isEmpty(null)).toBe(true);
  expect(isEmpty("")).toBe(true);
  expect(isEmpty(undefined)).toBe(true);
  expect(isEmpty([])).toBe(true);
  expect(isEmpty([null, ""])).toBe(true);
  expect(isEmpty({})).toBe(true);
  expect(isEmpty({ k1: null, k2: "" })).toBe(true);
  expect(isEmpty(0)).toBe(false);
  expect(isEmpty("undefined")).toBe(false);
  expect(isEmpty(["val"])).toBe(false);
  expect(isEmpty({ k1: "val1" })).toBe(false);
});

test("isEuDateTime", () => {
  expect(isEuDateTime("14.01.2023 00:00:01")).toBe(true);
  expect(isEuDateTime("14.01.2023 00:00:61")).toBe(false);
  expect(isEuDateTime("14.01.2023 00:61:01")).toBe(false);
  expect(isEuDateTime("14.01.2023 61:00:01")).toBe(false);
  expect(isEuDateTime("14.01.2023")).toBe(false);
  expect(isEuDateTime("14.01.23 00:00:01")).toBe(false);
  expect(isEuDateTime("32.12.2023 00:00:01")).toBe(false);
});

test("isDeepEqual", () => {
  const o1 = {
    a: {
      b: {
        c: "c",
      },
    },
  };
  const o2 = {
    a: {
      b: {
        c: "c",
      },
    },
  };
  const o3 = {
    a: {
      b: {
        c: "a",
      },
    },
  };
  expect(isDeepEqual(o1, o2)).toBe(true);
  expect(isDeepEqual(o1, o3)).toBe(false);
});

test("isObject", () => {
  expect(isObject({})).toBe(true);
  expect(isObject({ a: "a" })).toBe(true);
  expect(isObject(Object.create({ a: "a" }))).toBe(true);
  expect(isObject([])).toBe(false);
  expect(isObject("string")).toBe(false);
  expect(isObject(null)).toBe(false);
  expect(isObject(1)).toBe(false);
  expect(isObject(true)).toBe(false);
});
