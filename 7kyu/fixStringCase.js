// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters
// and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

function solve(s) {
  let lowerCharacter = 0;
  let upperCharacter = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      upperCharacter++;
    } else {
      lowerCharacter++;
    }
  }

  return lowerCharacter >= upperCharacter ? s.toLowerCase() : s.toUpperCase();
}

solve("code"), "code";
solve("CODe"), "CODE";
solve("COde"), "code";
solve("Code"), "code";
