// Create a function that takes a word and returns true if the word has two consecutive identical letters.
//arr = BOOP
module.exports = (word) => {
  let arr = [...word];
   return arr.some((element, index, array) => index + 1 < array.length && element === array[index + 1]);
};
