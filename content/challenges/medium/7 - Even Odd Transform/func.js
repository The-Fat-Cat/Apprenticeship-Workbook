// Create a function that performs an even-odd transform to an array, n times.
// Each even-odd transformation:
//   1. Adds two (+2) to each odd integer.
//   2. Subtracts two (-2) to each even integer.
module.exports = (arr, n) => {
 return arr.map((element)=>{
  if (element % 2 == 0){
    return element + n*2;
  }
  else return element - n*2;
 });
};
