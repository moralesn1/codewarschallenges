/* 
Convert Boolean values to strings 'Yes' or 'No'

Complete the method that takes a boolean value and return a "Yes" string for true, or a "No"
string for false.

*/

function boolToWord(bool) {
  return bool === true ? "Yes" : "No";
}

/* 
function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

*/
console.log(boolToWord(true));
console.log(boolToWord(false));
