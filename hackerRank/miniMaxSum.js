// Given an array of 5 intergers, return the minimum and the maximum sum of 4 of the 5 numbers

// Explanation
// Sample Input [1,2,3,4,5]

// Sum everything except the one = 14;
// Sum everything execept the 2 = 13; etc

// Sample Output [10, 14]

function minMaxSum(arr) {
  let minMax = [];
  let sortedArray = arr.sort((a, b) => a - b);
  let min = sortedArray.slice(0, -1).reduce((a, b) => a + b);
  let max = sortedArray.slice(-1).reduce((a, b) => a + b);
  minMax.push(min, max);
  console.log(minMax.join(" "));
}
