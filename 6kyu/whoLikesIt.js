// You probably know the "like" system from Facebook and other pages. People can "like" blog posts,
// pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing
// the names of people who like an item. It must return the display text as shown in the examples:

function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  }

  if (names.length === 1) {
    return names + " likes this";
  }

  if (names.length === 2) {
    return names[0] + " and " + names[1] + " like this";
  }

  if (names.length === 3) {
    return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  }

  if (names.length > 3) {
    return (
      names[0] + ", " + names[1] + ` and ${names.length - 2} others like this`
    );
  }
}

describe("example tests", function () {
  it("should return correct text", function () {
    Test.assertEquals(likes([]), "no one likes this");
    Test.assertEquals(likes(["Peter"]), "Peter likes this");
    Test.assertEquals(likes(["Jacob", "Alex"]), "Jacob and Alex like this");
    Test.assertEquals(
      likes(["Max", "John", "Mark"]),
      "Max, John and Mark like this"
    );
    Test.assertEquals(
      likes(["Alex", "Jacob", "Mark", "Max"]),
      "Alex, Jacob and 2 others like this"
    );
  });
});
