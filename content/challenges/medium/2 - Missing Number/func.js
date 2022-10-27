// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
// Notes:
//   - The array of numbers will be unsorted (not in order).
//   - Only one number will be missing.
module.exports = (arr) => {
  if (arr.length < 10) {
    // created a variable that sums up all the numbers for 1 to 10 which is 55 (formula is sum of natural numbers)
    let totalSum = 10 * ((10 + 1) / 2);
    //created an empty variable that will hold the count of the numbers given in the array
    let totalArr = 0;
    //loops through the array adding each number to that variable and then subtracts it from the total of 55 to give missing number
    for (let i = 0; i < arr.length; i++) {
      totalArr += arr[i];
    }
    return totalSum - totalArr;
  } else if (arr.length == 10) {
    return;
  }
};
