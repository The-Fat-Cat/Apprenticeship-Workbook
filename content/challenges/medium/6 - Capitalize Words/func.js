// Create a function that takes a string as an argument and converts the first character of each word to uppercase.
// Return the newly formatted string.
// Notes:
//   - You can expect a valid string for each test case.
module.exports = (str) => {
  // Similar to #4 we had to create a middleman, a placeholder variable to run code once it has reached a space before adding it to the final output.
  let ph = "";
  let newStr = "";
  // this for loop goes through each letter in the string and continues until a space is reached. If no space is reached then it will add letters to the placeholder.
  for (let i = 0; i <= str.length - 1; i++) {
    // once it has reached a space it will take the first letter of the letters in ph and add it to newStr
    if (str[i] === " ") {
      newStr += ph[0].toUpperCase();
      // and in this for loop it goes through the rest of the letters in ph skipping the first one (since it was already added as uppercase to newstr)
      // and then add the rest of the letters regularly to newStr
      for (let j = 1; j < ph.length; j++) {
        newStr += ph[j];
      }
      newStr += " ";
      ph = "";
    } else {
      ph += str[i];
    }
  }
  // the same thing as #4 since the last letters don't have a space at the end, it will take the letters ph is holding, capitalize the first
  //one, add it to newStr and then add the rest using a for loop
  newStr += ph[0].toUpperCase();
  for (let j = 1; j < ph.length; j++) {
    newStr += ph[j];
  }
  return newStr;
};
