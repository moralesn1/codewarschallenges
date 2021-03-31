// You need to write regex that will validate a password to make sure it meets the following criteria:

// - At least six characters long
// - contains a lower case letter
// - contains and uppercase letter
// - contains a Number

// Valid passwords will only be alphanumeric characters.

function validate(password) {
  const regexTest = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{6,}$/;
  return regexTest.test(password);
}

function validate(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{6,}$/.test(password);
}

validate("djI38D55"), "djI38D55 - Expected true";
!validate("a2.d412"), "a2.d412 - Expected false";
!validate("JHD5FJ53"), "JHD5FJ53 - Expected false";
!validate("!fdjn345"), "!fdjn345 - Expected false";
!validate("jfkdfj3j"), "jfkdfj3j - Expected false";
!validate("123"), "123 - Expected false";
!validate("abc"), "abc - Expected false";
validate("Password123"), "Password123 - Expected true";
