// Write a function that takes a string, and returns a new string with any duplicate consecutive letters removed.
// Notes:
//   - Final strings won't include words with double letters (e.g. "passing", "lottery").

module.exports = (word) => {
    const arr = [...word];
    return arr.reduce((result , currentValue, currentIndex, array)=>{
        if (currentValue != array[currentIndex - 1] ){
          return result + currentValue;
        }
        else return result;
    });
};
