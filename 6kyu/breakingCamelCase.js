// Complete the solution so that the function will break up camel casing,
// using a space between words.

// Example
// solution("camelCasing")  ==  "camel Casing"

function solution(string) {
  const regex = /([A-Z])/g;
  return string.replace(regex, " $1");
}

solution("camelCasing"), "camel Casing", "Unexpected result";
solution("camelCasingTest"), "camel Casing Test", "Unexpected result";
