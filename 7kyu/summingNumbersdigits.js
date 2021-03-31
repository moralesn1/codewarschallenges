function sumDigits(number) {
  // const numberArray = Array.from(String(number), Number).filter((a) => {
  //   if (a == "-") {
  //     return;
  //   } else {
  //     return a;
  //   }
  // });
  // return numberArray.reduce((a, b) => a + b, 0);
}

console.log(sumDigits(10), 1);
console.log(sumDigits(99), 18);
console.log(sumDigits(-32), 5);
console.log(sumDigits(0), 0);

// TOP SOLUTION
// return Math.abs(number).toString().split('').reduce((a,b) => +a + +b, 0)

// I learnt about Math.abs() function after a 13 hour shift at work :)

// My Solution 15/03/21

function sumDigits(number) {
  const numbersArray = number.toString().replace("-", "").split("");
  const pureNumbers = numbersArray.map((a) => parseInt(a));
  const sumOfPureNumbers = pureNumbers.reduce((a, b) => a + b);
  return sumOfPureNumbers;
}

// Reading my notes, I have no idea wtf Math.abs() does.
// Unary + converts the item to it's right to a Number. Example: +"5" === 5

function sumDigits(number) {
  let stringArray = number.toString().replace("-", "").split("");
  let numberArray = stringArray.map((item) => Number(item));
  return numberArray.reduce((a, b) => a + b);
}
