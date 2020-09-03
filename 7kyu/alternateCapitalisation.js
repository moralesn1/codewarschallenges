// Given a string, capitalize the letters that occupy even indexes and odd indexes separately,
// and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s) {
  let capitalise = [];
  let caps = [];
  let altCaps = [];

  for (i = 0; i < s.length; i++) {
    if (i % 2 == 0) {
      caps.push(s[i].toUpperCase());
    } else {
      caps.push(s[i].toLowerCase());
    }
  }

  for (i = 0; i < s.length; i++) {
    if (i % 2 !== 0) {
      altCaps.push(s[i].toUpperCase());
    } else {
      altCaps.push(s[i].toLowerCase());
    }
  }

  capitalise = [caps.join(""), altCaps.join("")];

  return capitalise;
}

// top solution

function capitalize(s) {
  const odd = s
    .split("")
    .map((l, i) => (i % 2 !== 0 ? l.toUpperCase() : l))
    .join("");
  const even = s
    .split("")
    .map((l, i) => (i % 2 === 0 ? l.toUpperCase() : l))
    .join("");
  return [even, odd];
}
