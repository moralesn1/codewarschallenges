/*
As part of this Kata, you need to create a function that when provided with a triplet, returns the 
index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple)

For example:

gimme([2, 3, 1]) => 0
2 Is the number that fits between 1 and 3 and the index of two in the input array is 0.
*/

var gimme = function (inputArray) {
  const min = Math.min(...inputArray);
  const max = Math.max(...inputArray);
  const middle = (item) => {
    return item !== max && item !== min;
  };

  return inputArray.findIndex(middle);
};

console.log(gimme([2, 3, 1]));
// Should return 0
console.log(gimme([5, 10, 14]));
// Should return 1
console.log(gimme([22, -40, -26]));
// Should return 2
