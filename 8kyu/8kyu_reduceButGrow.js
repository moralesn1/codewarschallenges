/*  Given a non-empty array of integers, return the result 
of multiplying the values together in order. 

Example: 

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

*/

function grow(x) {
  const total = x.reduce((acc, cur) => acc * cur);
  return total;
}

console.log(grow([1, 2, 3]));
// 6
console.log(grow([4, 1, 1, 1, 4]));
// 16
console.log(grow([2, 2, 2, 2, 2, 2]));
// 64
console.log(grow(["a", 2, 2, 3, 2, 2, 2]));

function grow(x) {
  return x.reduce((firstVal, secondVal) => firstVal * secondVal);
}
