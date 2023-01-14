import {
  arrayMove,
  arrayToObjectByProperty,
  arrayContainsSomeArray,
  arrayGetFirstFoundInArray,
} from "../index";

test("arrayMove", () => {
  const arr = ["a", "b", "c"];
  expect(arrayMove(arr, 1, 2)).toEqual(["a", "c", "b"]);
});

test("arrayToObjectByProperty", () => {
  const arr = [
    { name: "John", age: "20" },
    { name: "Max", age: "20" },
    { name: "David", age: "20" },
  ];
  expect(arrayToObjectByProperty(arr, "name")).toEqual({
    John: [{ age: "20" }],
    Max: [{ age: "20" }],
    David: [{ age: "20" }],
  });

  expect(arrayToObjectByProperty(arr, "name", false)).toEqual({
    John: [{ name: "John", age: "20" }],
    Max: [{ name: "Max", age: "20" }],
    David: [{ name: "David", age: "20" }],
  });
});

test("arrayContainsSomeArray", () => {
  const arr1 = ["a", "b"];
  const arr2 = ["b", "c"];
  const arr3 = ["c", "d"];
  expect(arrayContainsSomeArray(arr1, arr2)).toBe(true);
  expect(arrayContainsSomeArray(arr1, arr3)).toBe(false);
});

test("arrayGetFirstFoundInArray", () => {
  const arr1 = ["a", "b"];
  const arr2 = ["b", "c"];
  expect(arrayGetFirstFoundInArray(arr1, arr2)).toBe("b");
});
