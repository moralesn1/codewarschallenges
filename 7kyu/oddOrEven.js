// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(array) {
  console.log(
    array.reduce((accum, currentval) => accum + currentval, 0) % 2 == 0
      ? "even"
      : "odd"
  );
}

oddOrEven([0, -1, -5]), "even";
oddOrEven([0, -1, -3]), "even";
oddOrEven([-1023, 1, -2]), "even";
oddOrEven([0]), "even";
oddOrEven([1]), "odd";
oddOrEven([]), "even";
oddOrEven([0, -1, 2]), "odd";
oddOrEven([0, 1, -4]), "odd";
oddOrEven([-1023, -1, 3]), "odd";
