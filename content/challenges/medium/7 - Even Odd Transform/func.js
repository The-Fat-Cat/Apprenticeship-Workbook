// Create a function that performs an even-odd transform to an array, n times.
// Each even-odd transformation:
//   1. Adds two (+2) to each odd integer.
//   2. Subtracts two (-2) to each even integer.
module.exports = (arr, n) => {
  // I initialized a variable with empty array that will hold the final values
  let newArray = [];
  // the for loop goes through each element in the array
  for (let arrIndex = 0; arrIndex < arr.length; arrIndex++) {
    // this if statement checks if the number is even (if the number when divided by 2 gives a remainder of 0 then it is even)
    // if it is then the for loop below will subtract 2 n amount of times
    if (arr[arrIndex] % 2 == 0) {
      for (let i = 0; i < n; i++) {
        arr[arrIndex] -= 2;
      }
    }
    // if it is not even then it will add 2 to that element n amount of times using a for loop
    else {
      for (let j = 0; j < n; j++) {
        arr[arrIndex] += 2;
      }
    }
    newArray.push(arr[arrIndex]);
  }
  return newArray;
};
