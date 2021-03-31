/*
Instruction:
Complete the square sum function so that it squares each number passed into it and then sums the results
together.

For example: 
[1,2,3] should return 9 because 1^2 + 2^2 + 3^2 = 9

*/

function squareSum(numbers) {
  if (numbers.length > 0) {
    return numbers.map(squared).reduce((a, b) => a + b);
  } else {
    return 0;
  }
}

function squared(number) {
  return number * number;
}

function squareSum(numbers) {
  const squaredArray = numbers.map((x) => x * x);
  const totalSquared = squaredArray.reduce((a, b) => a + b, 0);
  return totalSquared;
}

//31/03/21
function squareSum(numbers) {
  return numbers.reduce((acc, curr) => {
    return curr * curr + acc;
  }, 0);
}

console.log(squareSum([1, 2]));
console.log(squareSum([0, 3, 4, 5]));
console.log(squareSum([]));
