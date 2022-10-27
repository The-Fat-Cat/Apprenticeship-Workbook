// An isogram is a word that has no repeating letters, consecutive or nonconsecutive.
// Create a function that takes a string and returns either true or false depending
// on whether or not it's an "isogram".
// Notes:
//   - Ignore letter case (should not be case sensitive).
//   - All test cases contain valid one word strings.
module.exports = (str) => {
  // So in order to make it case insensitive the letters being compared need to be on equal ground (either both uppercase or lowercase)
  let testString = str.toUpperCase();
  // the for loop goes through each element in the converted string
  for (let i = 0; i <= testString.length; i++) {
    // this for loop starts at the next element and goes all the way down
    for (let j = i + 1; j <= testString.length; j++) {
      // here it will compare the elements in the j loop with the element in the current i loop.
      // if it is equal then it has a repeating letter and therefore it's not an isogram
      if (testString[j] == testString[i]) {
        return false;
      }
    }
  }
  return true;
};
