// Every Friday and Saturday night, farmer counts amount of sheep returned back to his farm
// (sheep returned on Friday stay and don't leave for a weekend).

// Sheep return in groups each of the days -> you will be given two arrays with these numbers
// (one for Friday and one for Saturday night). Entries are always positive ints, higher than zero.

// Farmer knows the total amount of sheep, this is a third parameter. You need to return the
// amount of sheep lost (not returned to the farm) after final sheep counting on Saturday.

// Example 1: Input: {1, 2}, {3, 4}, 15 --> Output: 5

// Example 2: Input: {3, 1, 2}, {4, 5}, 21 --> Output: 6

// Good luck! :-)

function lostSheep(friday, saturday, total) {
  friday = friday.reduce((a, b) => a + b, 0);
  saturday = saturday.reduce((a, b) => a + b, 0);
  return total - (friday + saturday);
}

lostSheep([1, 2], [3, 4], 15), 5;
lostSheep([3, 1, 2], [4, 5], 21), 6;
lostSheep([5, 1, 4], [5, 4], 29), 10;
lostSheep([11, 23, 3, 4, 15], [7, 14, 9, 21, 15], 300), 178;
lostSheep([2, 7, 13, 17], [23, 56, 44, 12, 1, 2, 1], 255), 77;
lostSheep([2, 5, 8], [11, 23, 3, 4, 15, 112, 12, 4], 355), 156;
lostSheep([1, 1, 1, 2, 1, 2], [2, 1, 2, 1, 2, 1], 30), 13;

//top soultion
function lostSheep(friday, saturday, total) {
  return [...friday, ...saturday].reduce((a, b) => a - b, total);
}
