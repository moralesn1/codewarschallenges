function nbYear(p0, percent, aug, p) {
  let newPop = (p0 * percent) / 100 + p0 + aug;
  let years = 1;
  while (newPop < p) {
    newPop += (newPop * percent) / 100 + aug;
    years++;
  }
  return years;
}

console.log(nbYear(1500, 5, 100, 5000));
//15
console.log(nbYear(1500000, 2.5, 10000, 2000000));
//10
console.log(nbYear(1500000, 0.25, 1000, 2000000));
// 94
