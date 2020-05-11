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
