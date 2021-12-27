import { decryptAtbash } from "./problem2";

test("Test 1", () => {
  expect(decryptAtbash("Olivn rkhfn wloli hrg znvg")).toEqual(
    "Loremipsumdolorsitamet"
  );
});
test("Test 2", () => {
  expect(decryptAtbash("Svool dliow! R'n ovzimrmt gbkvhxirkg!")).toEqual(
    "HelloworldImlearningtypescript"
  );
});
test("Test 3", () => {
  expect(decryptAtbash("Gsv jfrxp yildm ulc qfnkh levi gsv ozab wlt")).toEqual(
    "Thequickbrownfoxjumpsoverthelazydog"
  );
});
test("Test 4", () => {
  expect(decryptAtbash("Hovvkbsvzw dsl hgirevh uli kviuvxgrlm")).toEqual(
    "Sleepyheadwhostrivesforperfection"
  );
});
test("Test 5", () => {
  expect(
    decryptAtbash("Ivzxg - Z QzezHxirkg oryizib uli yfrowrmt fhvi rmgviuzxvh")
  ).toEqual("ReactAJavaScriptlibraryforbuildinguserinterfaces");
});
