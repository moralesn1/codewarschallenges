//This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
  if (s.length === "") {
    return "";
  } else {
    let stringArray = s.split("");
    let newArray = stringArray.map(valueToIndexRepeater).join("-");
    return newArray;
  }
}

const valueToIndexRepeater = (item, index) => {
  let element = item.repeat(index + 1);
  if (element.length >= 1) {
    return capitalise(element);
  }
  return element;
};

const capitalise = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

console.log(accum("abcd"));
//  -> "A-Bb-Ccc-Dddd"

console.log(accum("RqaEzty"));
//  -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"

console.log(accum("cwAt"));
//  -> "C-Ww-Aaa-Tttt"
