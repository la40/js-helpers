import { stringToBoolean } from "../index";

test("stringToBoolean", () => {
  expect(stringToBoolean("false")).toBe(false);
  expect(stringToBoolean("no")).toBe(false);
  expect(stringToBoolean("0")).toBe(false);
  expect(stringToBoolean("")).toBe(false);
  expect(stringToBoolean("true")).toBe(true);
  expect(stringToBoolean("something else")).toBe(true);
});
