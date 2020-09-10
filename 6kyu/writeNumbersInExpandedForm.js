// You will be given a number and you will need to return it as a string in Expanded Form.
// For example:

// expandedForm(12);  Should return '10 + 2'
// expandedForm(42);  Should return '40 + 2'
// expandedForm(70304);  Should return '70000 + 300 + 4'

function expandedForm(num) {
  num = num.toString();
  let multiplier = 1;
  let expandedArray = [];

  for (i = 1; i <= num.length; i++) {
    const digit = num[num.length - i];
    digit > 0 && expandedArray.unshift(digit * multiplier);
    multipler *= 10;
  }

  return expandedArray.join(" + ");
}

Test.assertEquals(expandedForm(12), "10 + 2");
Test.assertEquals(expandedForm(102), "100 + 2");
Test.assertEquals(expandedForm(42), "40 + 2");
Test.assertEquals(expandedForm(70304), "70000 + 300 + 4");
