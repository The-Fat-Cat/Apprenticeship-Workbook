// Create a function that takes a string, removes all "special" characters (e.g. !, @, #, $, %, ^, &, \, *, (, )) and
// returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.
module.exports = (str) => {
  //created a variable that is going to hold the new string and one that contains characters not allowed
  const sChars = ["!", "@", "#", "$", "%", "^", "&", "\\", "*", "(", ")"];
  let stringArr = [...str];
  let newArr = stringArr.filter(element => !sChars.includes(element));
  return newArr.join("");
};

// let resultString = [...str].reduce((previousValue , currentValue) => {
//   let value = !sChars.includes(currentValue) ? currentValue : "";
//   return previousValue + value;
// }, "");
// return resultString;
