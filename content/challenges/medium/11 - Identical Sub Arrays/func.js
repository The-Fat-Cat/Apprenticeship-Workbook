// Create a function that takes in a two-dimensional array and returns the number of sub-arrays with identical elements.
// e.g. [['#', '#'],[2,2,2]], both sub-arrays contain identical elements so this would return 2.
// Notes:
//   - Single-element arrays count as (trivially) having identical elements.
module.exports = (arr) => {
  // I intialized a counter because the function wants me to return a number based on condtions
  let subArrCounter = 0;
  // here this for loop is iterating through each elements in the big array
  for (let bigArrIndex = 0; bigArrIndex < arr.length; bigArrIndex++) {
    // this boolean serves to compare later down the code wether it should get added to the counter or not
    let isCounted = true;
    // this for loop goes through each element in the subarray and stop when the length of that subarray is reached
    for (
      let subArrIndex = 0;
      subArrIndex < arr[bigArrIndex].length;
      subArrIndex++
    ) {
      // this for loop serves for comparison purposes. It's the same as the previous loop except it's going to compare that subaray index to the rest of the elements in
      //front on it (always one step ahead)
      for (
        let subArrIndexsecond = subArrIndex + 1;
        subArrIndexsecond < arr[bigArrIndex].length;
        subArrIndexsecond++
      ) {
        // here it checks if at anypoint the index of the subarray is not equal to the cycles of the subArraysecond and it convert the iscounted to false because it is not identical
        if (
          arr[bigArrIndex][subArrIndex] != arr[bigArrIndex][subArrIndexsecond]
        ) {
          isCounted = false;
        }
      }
    }
    // once the 2 inner loops have run it checks if isCounted is still true that means this subarray can get added to the counter.
    if (isCounted) {
      subArrCounter += 1;
    }
  }
  //it outputs the counter number
  return subArrCounter;
};
