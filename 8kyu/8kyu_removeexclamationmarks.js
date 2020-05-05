/* 

Remove exclamation marks

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

*/

function removeExclamationMarks(s) {
  return s.replace(/!/g, "");
}

console.log(removeExclamationMarks("Hello World!"));
console.log(removeExclamationMarks("Hello World!!"));
console.log(removeExclamationMarks("Hello World!!!"));
console.log(removeExclamationMarks("awdaiowd!uauwidau!!whad!wahdnBW!"));
