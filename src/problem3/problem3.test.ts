import { isbnVerifier } from "./problem3";

test("Test 1", () => {
  expect(isbnVerifier("3-598-21508-8")).toEqual(true);
});
test("Test 2", () => {
  expect(isbnVerifier("1 86197 271 7")).toEqual(true);
});
test("Test 3", () => {
  expect(isbnVerifier("1-86197-271")).toEqual(false);
});
test("Test 4", () => {
  expect(isbnVerifier("0-19-852663-6")).toEqual(true);
});
test("Test 5", () => {
  expect(isbnVerifier("0-19-852663")).toEqual(false);
});
