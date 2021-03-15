// Return: a string formatted as a list of names separated by commas except for the last two names,
// which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''

function list(names) {
  let listOfNames = [];

  let part1 = [];
  let part2 = [];

  names.forEach((element, index, arr) => {
    listOfNames.push(element.name);
  });

  if (listOfNames.length === 2) {
    listOfNames.splice(-1, 0, "&");
    return listOfNames.join(" ");
  }

  if (listOfNames.length === 3) {
    part1 = listOfNames.slice(0, -2).join(", ");
    part2 = listOfNames.slice(-2);
    part2.splice(-1, 0, "&").join(", ");
    let p2 = ", " + part2.join(" ");
    return part1 + p2;
  }

  if (listOfNames.length >= 4) {
    part1 = listOfNames.slice(0, -2).join(", ");
    part2 = listOfNames.slice(-2);
    part2.splice(-1, 0, "&").join(", ");
    let p2 = ", " + part2.join(" ");
    return part1 + p2;
  }

  return listOfNames.join(" ");
}

Test.assertEquals(
  list([
    { name: "Bart" },
    { name: "Lisa" },
    { name: "Maggie" },
    { name: "Homer" },
    { name: "Marge" },
  ]),
  "Bart, Lisa, Maggie, Homer & Marge",
  "Must work with many names"
);
Test.assertEquals(
  list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]),
  "Bart, Lisa & Maggie",
  "Must work with many names"
);
Test.assertEquals(
  list([{ name: "Bart" }, { name: "Lisa" }]),
  "Bart & Lisa",
  "Must work with two names"
);
Test.assertEquals(
  list([{ name: "Bart" }]),
  "Bart",
  "Wrong output for a single name"
);
Test.assertEquals(list([]), "", "Must work with no names");

//

function list(names) {
  return names.reduce((prev, current, index, array) => {
    if (index === 0) {
      return current.name;
    } else if (index === array.length - 1) {
      return prev + " & " + current.name;
    } else {
      return prev + ", " + current.name;
    }
  }, "");
}
