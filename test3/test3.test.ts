import { bilangGenapNested } from "./test3";

test("Test 1", () => {
  expect(
    bilangGenapNested({
      a: 2,
      b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
      c: { c: { c: 2 }, cc: "ball", ccc: 5 },
      d: 1,
      e: { e: { e: 4 }, ee: "car" },
    })
  ).toEqual(12);
});
