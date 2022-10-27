// Create a function that takes in an initial word and filters out an array to contain words that start with the same letters as the initial word.
// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.

module.exports = (initial, words) => {
  // I initialized a variable to hold the final array and i also created a variable that holds the lenght of the intial word to be used later down the line.
  let outputArr = [];
  let intWordLenght = initial.length;
  // this for loop goes through the length of the word
  for (let arrIndex = 0; arrIndex < words.length; arrIndex++) {
    // it makes the placeholder string equal to the word that corresponds to the current index of the array
    // I also have another varibale here called checkLets that will be used to determine wether the intial word matches the placeholder string for the lenght of the initial word
    let placeholderString = words[arrIndex];
    let checkLets = "";
    // this for loop goes through the placeholder string for the lenght of the initial word and add it to checkLets
    for (let phIndex = 0; phIndex < intWordLenght; phIndex++) {
      checkLets += placeholderString[phIndex];
    }
    // once the loop has finished running the program determines wether checkLets it equal to the initial word and it if it does then it
    //pushes the current word in the placeholder string to the new array.
    if (checkLets == initial) {
      outputArr.push(placeholderString);
    }
  }
  return outputArr;
};
