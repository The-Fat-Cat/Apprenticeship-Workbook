// Write a function that determines if a string is a palindrome.
// Notes:
// An empty string counts as a palindrome.
module.exports = (str) => {
  // I was playing around with the code in a js sandbox using other palindromes and realized that if the letter is capitalized it would return
  //false when it needed to be true
  convertStr = str.toUpperCase();
  // the base case here is an empty string so I made sure if it recieves an empty string it returns true
  if (convertStr == "") {
    return true;
  }
  // the going to start at the begginning of the string and goes to the middle of it (since)
  // it checks if the current letter of the endIndex (which is defined differently every iteration depending on the strIndex)
  //is not equal to the letter at strIndex.
  for (let startIndex = 0; startIndex < str.length/2 ; startIndex++){
      let endIndex = str.length-1-startIndex;
      // here it just stops the function when the startIndex has surpassed the endIndex since I'm only comparing the two halves
      if(startIndex > endIndex){
        return 
      }
      if(str[endIndex] != str[startIndex]){
        return false;
      }
  }
  return true;
};

/*



*/
