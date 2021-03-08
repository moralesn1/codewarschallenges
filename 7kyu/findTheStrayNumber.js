// You are given an odd-length array of integers, in which all of them are the same,
// except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  let unique = [];
  let sortedArray = numbers.sort((a, b) => a - b);

  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] == sortedArray[i + 1]) {
      i++;
      continue;
    } else {
      unique.push(sortedArray[i]);
    }
  }
  return console.log(parseInt(unique));
}

stray([1, 1, 2]), 2;
