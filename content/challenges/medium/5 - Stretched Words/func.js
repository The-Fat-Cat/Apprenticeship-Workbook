// Write a function that takes a string, and returns a new string with any duplicate consecutive letters removed.
// Notes:
//   - Final strings won't include words with double letters (e.g. "passing", "lottery").

module.exports = (word) => {
  // Similar to #1 except the consecutive letters need to be removed. initialized a variable that holds the final output.
  //I created a for loop that will go through the length of the string and checks to see if at any point the letter is equal to the letter after it
  // and if it's not then it will add it to the final output variable.
  let newStr = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[i + 1]) {
      newStr += word[i];
    }
  }
  return newStr;
};
