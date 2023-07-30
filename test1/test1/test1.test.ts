import { urutAngkaDariTerbesar } from "./test1";

test("Test 1", () => {
  expect(urutAngkaDariTerbesar([1, 2, 4, 3, 5, 3, 2, 1])).toEqual([
    5, 4, 3, 3, 2, 2, 1, 1,
  ]);
});
