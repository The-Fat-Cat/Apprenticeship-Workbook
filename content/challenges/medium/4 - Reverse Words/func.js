// Write a function that takes a string of one or more words as an argument and returns the same string,
// but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.
// Notes:
//   - You can expect a valid string to be provided for each test case.
module.exports = (str) => {
  //created a reusable function that reverse the given string (in this case the placeholder string) when called'
  reverseString = (str) => {
    let revStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      revStr += str[i];
    }
    return revStr;
  };
  // initialized a variable that will hold the final string and a placeholder variable that will be used to analyze if the current word (word is counted if
  // loop reaches a space) it's holding meet the 5 letter or more requirement to be reversed
  let revStr = "";
  let ph = "";
  // the for loop goes through the whole length of the string
  for (let i = 0; i <= str.length - 1; i++) {
    // it stops when it reaches a space and if no space is reached then it will continue adding each str[i] to the placeholder string to be compared
    if (str[i] === " ") {
      // once the loop has reached a space it takes the value of the placeholder string and see if it has 5 or more letters. if it does it calls the reverse function
      //and add its to the revStr string variable and then resets the placeholder string back to nothing for the next iteration
      // and if it doesn't then it add it regularly including a space and resets the placeholder variable
      if (ph.length >= 5) {
        revStr += reverseString(ph) + " ";
        ph = "";
      } else {
        revStr += ph + " ";
        ph = "";
      }
    } else {
      ph += str[i];
    }
  }
  /* beccause our loop can only make choices based on wether it has reached a space or not once it reaches the end of the string it will add the
   remaining letters to the placeholder string but it still needs to check if they are 5+ letters in order to reverse it.
   if it is then it will reverse it and add it to the revStr variable before finally outputting it or it will add it regularly if not.*/
  if (ph.length >= 5) {
    revStr += reverseString(ph);
  } else {
    revStr += ph;
  }
  return revStr;
};
