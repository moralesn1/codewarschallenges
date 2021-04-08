// A Man and his Umbrellas
// Each morning a man walks to work, and each afternoon he walks back home.

// If it is raining in the morning and he has an umbrella at home, he takes an umbrella
//  for the journey so he doesn't get wet, and stores it at work. Likewise, if it is raining
//   in the afternoon and he has an umbrella at work, he takes an umbrella for the journey home.

// Given an array of the weather conditions, your task is to work out the minimum number of
// umbrellas he needs to start with in order that he never gets wet. He can start with some
// umbrellas at home and some at work, but the output is a single integer, the minimum total number.

// The input is an array/list of consecutive half-day weather forecasts. So, e.g. the
// first value is the 1st day's morning weather and the second value is the 1st day's
// afternoon weather. The options are "clear", "sunny", "cloudy", "rainy", "windy" or "thunderstorms".

// e.g. for three days, 6 values:

// weather = ["rainy", "cloudy", "sunny", "sunny", "cloudy", "thunderstorms"]

function minUmbrellas(weather) {
  let umbAtHome = 0;
  let umbAtWork = 0;
  const rain = ["rainy", "thunderstorms"];

  for (let i = 0; i < weather.length; i++) {
    if (rain.includes(weather[i])) {
      if (i % 2 === 0) {
        if (umbAtHome === 0) {
          umbAtWork++;
        } else {
          umbAtHome--;
          umbAtWork++;
        }
      }
      if (i % 2 === 1) {
        if (umbAtWork === 0) {
          umbAtHome++;
        } else {
          umbAtWork--;
          umbAtHome++;
        }
      }
    }
  }
  return umbAtHome + umbAtWork;
}

console.log(
  minUmbrellas(["cloudy"]),
  0,
  "wrong answer for one value in weather array"
);
console.log(
  minUmbrellas(["rainy", "rainy", "rainy", "rainy"]),
  1,
  "wrong answer for always rainy."
);
console.log(
  minUmbrellas(["overcast", "rainy", "clear", "thunderstorms"]),
  2,
  "wrong answer for 2 dry mornings and 2 rainy afternoons."
);
