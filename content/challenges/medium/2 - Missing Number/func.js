// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
// Notes:
//   - The array of numbers will be unsorted (not in order).
//   - Only one number will be missing.
module.exports = (arr) => {
  let testArr = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10];
 if(arr.length < 10){
  return testArr.find(element => !arr.includes(element) );
 }
};
