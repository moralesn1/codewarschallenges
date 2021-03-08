// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls'
// comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

//Not utilising regex
function disemvowel(str) {
  let newSentence = str.split("");
  for (let i = 0; i < newSentence.length; i++) {
    if (newSentence[i] == "a") {
      newSentence[i] = "";
    }
    if (newSentence[i] == "e") {
      newSentence[i] = "";
    }
    if (newSentence[i] == "i") {
      newSentence[i] = "";
    }
    if (newSentence[i] == "o") {
      newSentence[i] = "";
    }
    if (newSentence[i] == "u") {
      newSentence[i] = "";
    }
    if (newSentence[i] == "A") {
      newSentence[i] = "";
    }
    if (newSentence[i] == "E") {
      newSentence[i] = "";
    }
    if (newSentence[i] == "I") {
      newSentence[i] = "";
    }
    if (newSentence[i] == "O") {
      newSentence[i] = "";
    }
    if (newSentence[i] == "U") {
      newSentence[i] = "";
    }
  }
  return newSentence.join("");
}

// solution utilising regex
function disemvowel(str) {
  let vowels = /[aeiou]/gi;
  return str.replace(vowels, "");
}

// utilising array being used to scan array

function disemvowel(str) {
  var vowels = ["a", "e", "i", "o", "u"];
  str = str.split("");
  return str
    .filter((char) => {
      return vowels.indexOf(char.toLowerCase()) == -1;
    })
    .join("");
}

disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!";
