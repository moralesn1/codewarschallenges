// Given a number, return a string with dash'-'marks before and after each odd integer,
// but do not begin or end the string with a dash mark.

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

function dashatize(num) {
  if (isNaN(num)) {
    return "NaN";
  }
  if (num.length === 1) {
    console.log("hit");
    return num.join("").replace(/-/g, "");
  }

  let array = num.toString().split("");
  console.log(num);

  let newArray = array.map((x) => {
    return parseInt(x, 10);
  });

  let dashed2 = newArray.map((current, index, array) => {
    if (isNaN(current)) {
      current = "";
    }

    if (current % 2 == 0) {
      return current;
    }
    if (index !== 0 && index !== array.length - 1 && current % 2 !== 0) {
      return "-" + current + "-";
    }
    if (index == 0 && current % 2 !== 0) {
      return current + "-";
    } else if (array.length - 1 && current % 2 !== 0) {
      return "-" + current;
    }
  });

  return dashed2
    .join(",")
    .replace(/,/g, "")
    .replace(/--/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Top Solution

function dashatize(num) {
  return String(num)
    .replace(/([13579])/g, "-$1-")
    .replace(/--+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// new
function dashatize(num) {
  return num
    .toString()
    .replace(/^-/g, "")
    .replace(/([13579])/g, "-$1-")
    .replace(/(^-|-$)/g, "")
    .replace(/(--)/g, "-");
}
