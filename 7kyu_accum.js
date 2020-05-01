// function accum(s) {
//   let stringArray = s.split("");
//   let emptyArray = [];
//   for (i = 0; i < stringArray.length; i++) {
//     let newElement = stringArray[i].toString();
//     emptyArray.push(newElement);
//   }
//   return emptyArray.map((item, index) => {
//     return item.repeat(index + 1);
//   });
// }
// return stringArray;

function accum(s) {
  let stringArray = s.split("");
  let newArray = stringArray.map(valueToIndexRepeater);
  return newArray;

  // for (i in stringArray) {
  //   return (i = stringArray[0].toUpperCase() + i.substr(1).toLowerCase());
  // }
}

const valueToIndexRepeater = (item, index) => {
  return item.repeat(index + 1);
};
console.log(accum("abcd"));
//  -> "A-Bb-Ccc-Dddd"

console.log(accum("RqaEzty"));
//  -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"

console.log(accum("cwAt"));
//  -> "C-Ww-Aaa-Tttt"
