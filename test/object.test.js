import { recursiveDeepCopy } from "../index";

test("recursiveDeepCopy", () => {
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

  const o3 = recursiveDeepCopy(o1);
  o3.a.b.c = "a";

  expect(o1).toEqual(o2);
  expect(o1).not.toEqual(o3);
});
