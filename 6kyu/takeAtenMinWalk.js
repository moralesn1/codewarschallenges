// You live in the city of Cartesia where all roads are laid out in a perfect grid.
// You arrived ten minutes too early to an appointment, so you decided to take the
// opportunity to go for a short walk. The city provides its citizens with a Walk
// Generating App on their phones -- everytime you press the button it sends you
// an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).
// You always walk only a single block for each letter (direction) and you know it takes you
// one minute to traverse one city block, so create a function that will return true if
// the walk the app gives you will take you exactly ten minutes
// (you don't want to be early or late!) and will, of course, return you to your
// starting point. Return false otherwise.

function isValidWalk(walk) {
  let xAxis = 0;
  let yAxis = 0;
  let dt = walk.length;

  walk.forEach((position) => {
    if (position === "n") {
      xAxis++;
    }
    if (position === "s") {
      xAxis--;
    }
    if (position === "e") {
      yAxis++;
    }
    if (position === "w") {
      yAxis--;
    }
  });
  return dt === 10 && xAxis === 0 && yAxis === 0;
}

// TESTS

// Test.expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
// Test.expect(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
// Test.expect(!isValidWalk(['w']), 'should return false');
// Test.expect(!isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');

// Refactored Solution

function isValidWalk(walk) {
  let xAxis = 0;
  let yAxis = 0;
  let dt = walk.length;

  for (let i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case "n":
        xAxis++;
        break;
      case "s":
        xAxis--;
        break;
      case "e":
        yAxis++;
        break;
      case "w":
        yAxis--;
        break;
    }
  }
  return dt === 10 && xAxis === 0 && yAxis === 0;
}

// Clever Solutions

function isValidWalk(walk) {
  function count(val) {
    return walk.filter(function (a) {
      return a == val;
    }).length;
  }
  return (
    walk.length == 10 && count("n") == count("s") && count("w") == count("e")
  );
}
