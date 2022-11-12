// Write a function that determines if a string is a palindrome.
// Notes:
// An empty string counts as a palindrome.
module.exports = (str) => {
  let reversedArr= str.split("").reverse().join("");
 return reversedArr === str;
};

