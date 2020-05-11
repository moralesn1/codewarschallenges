/*
In this little assignment you are given a string of space separated numbers, 
and have to return the highest and lowest number.

EXAMPLE:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

*/

function highAndLow(numbers) {
  let arrayOfNumbers = numbers.split(" ").map(turnStringIntoNumbers);
  return `${Math.max(...arrayOfNumbers)} ${Math.min(...arrayOfNumbers)}`;
}

function turnStringIntoNumbers(string) {
  return parseInt(string, 10);
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
