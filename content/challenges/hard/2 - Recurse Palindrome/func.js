// Write a function that recursively determines if a string is a palindrome.
// Notes: 
// An empty string counts as a palindrome.
module.exports = (str) => {

  // Here it does the same as #9 where it convert the str initally to make sure it's case insentive and it checks if string is empty. 
  convertStr = str.toUpperCase();
  if (convertStr == "") {
    return true;
  }
// here the function is created so that it can be called later. It has two parameters which are going to be used to compare the values of the str at those indexes. 
  function recurseThis (startIndex , endIndex) {
    // this base case returns true if the function has succesfully looped through the whole string and starIndex starts getting bigger than endIndex. 
    if (startIndex >= endIndex){
      return true;
    }
    // this base case returns false if the function at any iteration finds that startIndex is not equal to endIndex
    else if (str[startIndex] != str[endIndex]){
      return false;
    }
    // this is the recursive part of the function that keeps calling the function but everytime startIndex will go up 1 and endIndex will go down 1 until startIndex surpasses endIndex
    //in which case it stops
    else {
      return recurseThis(startIndex +1 , endIndex -1)
    }
   }
   // here at the bottom I'm calling the function and defining the starting parameters of startIndex and endIndex.
   return recurseThis(0 , str.length-1)
}


