import { acronym } from "./problem1";

test("Test 1", () => {
  expect(acronym("Portable Network Graphics")).toEqual("PNG");
});
test("Test 2", () => {
  expect(acronym("Correct me if I'm wrong")).toEqual("CMIIW");
});
test("Test 3", () => {
  expect(acronym("Thanks god It's Friday")).toEqual("TGIF");
});
test("Test 4", () => {
  expect(acronym("What you see is what you get")).toEqual("WYSIWYG");
});
test("Test 5", () => {
  expect(acronym("As far as I know")).toEqual("AFAIK");
});
