// This kata is designed to test your ability to extend the functionality of built-in classes.
// In this case, we want you to extend the built-in Array class with the following methods:
//  square(),
//  cube(),
//  average(),
//  sum(),
//  even()
//  and odd().

// Explanation:

// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers
// Note: the original array must not be changed in any case!

Array.prototype.square = function () {
  return this.map((number) => number ** 2);
};

Array.prototype.cube = function () {
  return this.map((number) => number ** 3);
};

Array.prototype.sum = function () {
  return this.reduce((a, b) => a + b);
};

Array.prototype.average = function () {
  return this.length === 0 ? NaN : this.reduce((a, b) => a + b) / this.length;
};

Array.prototype.even = function () {
  return this.filter((item) => item % 2 === 0);
};

Array.prototype.odd = function () {
  return this.filter((item) => item % 2 !== 0);
};

// TOP SOLUTIONS

Array.prototype.square = function () {
  return this.map(function (n) {
    return n * n;
  });
};
Array.prototype.cube = function () {
  return this.map(function (n) {
    return n * n * n;
  });
};
Array.prototype.average = function () {
  return this.sum() / this.length;
};
Array.prototype.sum = function () {
  return this.reduce(function (a, b) {
    return a + b;
  }, 0);
};
Array.prototype.even = function () {
  return this.filter(function (item) {
    return 0 == item % 2;
  });
};
Array.prototype.odd = function () {
  return this.filter(function (item) {
    return 0 != item % 2;
  });
};

//same as above
