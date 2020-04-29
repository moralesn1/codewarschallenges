function accum(s) {
  let stringArray = s.split("");
  for (i = 0; i < stringArray.length - 1; i++) {
    stringArray[i] += stringArray[i];
  }
  return stringArray;
}
// return stringArray;

console.log(accum("abcd"));
//  -> "A-Bb-Ccc-Dddd"

console.log(accum("RqaEzty"));
//  -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"

console.log(accum("cwAt"));
//  -> "C-Ww-Aaa-Tttt"
