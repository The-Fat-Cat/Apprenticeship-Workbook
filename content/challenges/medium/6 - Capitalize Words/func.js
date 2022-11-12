// Create a function that takes a string as an argument and converts the first character of each word to uppercase.
// Return the newly formatted string.
// Notes:
//   - You can expect a valid string for each test case.
module.exports = (str) => {
  let arr= [...str]
  return arr.reduce((result, currentValue, currentIndex, array) =>{
    if(currentIndex == 0){
      return result + currentValue.toUpperCase();
    }
    else if (array[currentIndex - 1] == " "){
      return result + currentValue.toUpperCase();
    }
    else return result + currentValue;
  }, "");
};
