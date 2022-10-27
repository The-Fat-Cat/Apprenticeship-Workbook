// Create a function that takes a string, removes all "special" characters (e.g. !, @, #, $, %, ^, &, \, *, (, )) and
// returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.
module.exports = (str) => {
  //created a variable that is going to hold the new string and one that contains characters not allowed
  const sChars = ["!", "@", "#", "$", "%", "^", "&", "\\", "*", "(", ")"];
  let newString = "";
  // outer for loop goes through each elements in the string and inner loop goes through each element in sChars
  // For every iteration of the outer loop str[strLetIndex] will compare to the whole list of sChars and will add it to new string if it doesn't match
  //and do nothing if it does
  for (let strLetIndex = 0; strLetIndex <= str.length; strLetIndex++) {
    let isMatch = false;
    for (let sCharsIndex = 0; sCharsIndex <= sChars.length; sCharsIndex++) {
      if (str[strLetIndex] == sChars[sCharsIndex]) {
        isMatch = true;
      }
    }
    if (isMatch == false) {
      newString += str[strLetIndex];
    }
  }
  return newString;
};

// let specialCharRegex = /[^a-zA-Z0-9_\-\. ]/g;
// return str.replace(specialCharRegex, '');
