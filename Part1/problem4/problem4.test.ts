import { isPangram } from "./problem4";

test("Test 1", () => {
  expect(isPangram("The quick brown fox jumps over the lazy dog")).toEqual(
    true
  );
});
test("Test 2", () => {
  expect(isPangram("Public junk dwarves hug my beloved pillow")).toEqual(false);
});
test("Test 3", () => {
  expect(
    isPangram("Jim quickly realized that the beautiful gowns are expensive")
  ).toEqual(true);
});
test("Test 4", () => {
  expect(isPangram("Back in June we delivered oxygen equipment")).toEqual(
    false
  );
});
