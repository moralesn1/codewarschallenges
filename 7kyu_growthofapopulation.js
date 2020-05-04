function nbYear(p0, percent, aug, p) {
  let pop = p0 + percent / 5 + aug;
  let years = 0;
  // return Math.round(pop);
  do {
    pop += p0;
    years++;
  } while (pop < p);
  return years;
}

console.log(nbYear(1500, 5, 100, 5000));
//15
console.log(nbYear(1500000, 2.5, 10000, 2000000));
//10
console.log(nbYear(1500000, 0.25, 1000, 2000000));
//94
