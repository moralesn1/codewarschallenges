// There is one pair of color  and one of color . There are three odd socks left, one of each color.
// The number of pairs is .

// Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns

// int: the number of pairs

// https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function sockMerchant(number, array) {
  let result = 0;
  array.sort();
  for (let i = 0; i < number; i++) {
    if (array[i] == array[i + 1]) {
      result++;
      i++;
    }
  }
  console.log(result);
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]); // 3
