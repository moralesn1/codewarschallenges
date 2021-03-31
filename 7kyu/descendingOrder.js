// Your task is to make a function that can take any non-negative integer as an argument and return
// it with its digits in descending order. Essentially, rearrange the digits to create the highest
// possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(number) {
  let result = [];
  const arrayOfStrings = number.toString().split("");
  const numberify = arrayOfStrings.map((item) => {
    result.push(Number(item));
  });
  result.sort(function (a, b) {
    return b - a;
  });
  return Number(result.join(""));
}

// best practice

function descendingOrder(n) {
  return parseInt(
    String(n)
      .split("")
      .sort(function (a, b) {
        b - a;
      })
      .join("")
  );
}

function descendingOrder(n) {
  const number = String(n)
    .split("")
    .sort((a, b) => b - a)
    .join("");
  return parseInt(number);
}

descendingOrder(0); // 0
descendingOrder(1); // 1
descendingOrder(123456789); // 987654321
