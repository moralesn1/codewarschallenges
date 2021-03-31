// Reverse every other word in a given string, then return the string.
// Throw away any leading or trailing whitespace, while ensuring there is
// exactly one space between each word. Punctuation marks should be treated as
// if they are a part of the word in this kata.

function reverse(str) {
  str = str.split(" ");
  let newArray = [];

  for (i = 0; i < str.length; i++) {
    if (str[i].length == 0) {
      return "";
    }

    if (i % 2 == 1) {
      newArray.push(str[i].split("").reverse().join(""));
    } else {
      newArray.push(str[i]);
    }
  }
  return newArray.join(" ").trim();
}

Test.assertEquals(
  reverse("Reverse this string, please!"),
  "Reverse siht string, !esaelp"
);
Test.assertEquals(
  reverse("I really don't like reversing strings!"),
  "I yllaer don't ekil reversing !sgnirts"
);

// Top Solution

function reverse(str) {
  let arr = str.split(" ");

  for (var i = 1; i < arr.length; i += 2) {
    arr[i] = arr[i].split("").reverse().join("");
  }

  return arr.join(" ").trim();
}

function reverse(str) {
  let arr = str.split(" ");
  for (let i = 1; i < arr.length; i += 2) {
    arr[i] = arr[i].split("").reverse("").join("");
  }
  return arr.join(" ").trim();
}
