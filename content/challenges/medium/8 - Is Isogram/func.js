// An isogram is a word that has no repeating letters, consecutive or nonconsecutive.
// Create a function that takes a string and returns either true or false depending
// on whether or not it's an "isogram".
// Notes:
//   - Ignore letter case (should not be case sensitive).
//   - All test cases contain valid one word strings.
module.exports = (str) => {
 str = str.toUpperCase();
 let arr = [...str];
 arr.sort();
 return  arr.every((element, index,array) => {
  return element !== array[index + 1];
});
};
