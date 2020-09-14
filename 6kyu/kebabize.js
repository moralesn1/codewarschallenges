// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps

function kebabize(str) {
  return str
    .replace(/\d/g, "")
    .replace(/([A-Z])/g, "-$1")
    .replace(/^-/g, "")
    .toLowerCase();
}

Test.describe("tests", (_) => {
  Test.it("fixed tests", (_) => {
    Test.assertEquals(kebabize("myCamelCasedString"), "my-camel-cased-string");
    Test.assertEquals(kebabize("myCamelHas3Humps"), "my-camel-has-humps");
  });
});
