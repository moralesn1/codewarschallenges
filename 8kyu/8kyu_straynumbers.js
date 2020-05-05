// function stray(numbers) {
//   let uniqueElement = [];
//   let duplicateElement = [];

//   numbers.filter((value, index) => {

//     if (numbers.indexOf(value) !== index) {
//       return duplicateElement.push(value)
//     } else {
//       return uniqueElement.push(value)
//     }

//   },
//   console.log(duplicateElement)

// }
// }

function stray(numbers) {
  let unique;
  let uniqueElement = [];
  let duplicateElement = [];

  numbers.filter((value, index) => {
    if (numbers.indexOf(value) !== index) {
      duplicateElement.push(value);
    } else {
      uniqueElement.push(value);
    }
  });

  unique = uniqueElement.filter((val) => !duplicateElement.includes(val));

  return parseInt(unique);

  // console.log("These are the duplicated Elements: " + duplicateElement);
  // console.log("These are the unique Elements: " + uniqueElement);
}

/* 

Top Solution: 
const straySol = (nums) => nums.reduce((a, b) => a ^ b);

*/

console.log(stray([1, 2, 3, 2, 3]));
console.log(stray([1, 2, 3, 2, 7, 3]));
console.log(stray([1, 2, 3, 2, 3, 7, 3, 2, 1, 10]));

// These output strange values?
// console.log(straySol([1, 2, 3, 2, 3]));
// console.log(straySol([1, 2, 3, 2, 7, 3]));
// console.log(straySol([1, 2, 3, 2, 3, 7, 3, 2, 1, 10]));
