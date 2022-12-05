import { isArmstrongNumber } from "./problem3";

test("Test 1", () => {
  expect(isArmstrongNumber(153)).toEqual(true);
});
test("Test 2", () => {
  expect(isArmstrongNumber(9)).toEqual(true);
});
test("Test 3", () => {
  expect(isArmstrongNumber(10)).toEqual(false);
});
test("Test 4", () => {
  expect(isArmstrongNumber(154)).toEqual(false);
});
test("Test 5", () => {
  expect(isArmstrongNumber(407)).toEqual(true);
});
test("Test 6", () => {
  expect(isArmstrongNumber(20)).toEqual(false);
});
