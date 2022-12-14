// Create a function that takes in a two-dimensional array and returns the number of sub-arrays with identical elements.
// e.g. [['#', '#'],[2,2,2]], both sub-arrays contain identical elements so this would return 2.
// Notes:
//   - Single-element arrays count as (trivially) having identical elements.
module.exports = (arr) => {
    let counter = 0;
    counter += arr.filter((element)=>{
    return element.every((character,index,array)=> character === array[0])
  }).length;
  return counter;
};
