// Fibonacci numbers are created in the following way:
//  - F(0) = 0
//  - F(1) = 1
//  - ...
//  - F(n) = F(n-2) + F(n-1)
// Write a function that calculates the nth Fibonacci number.
module.exports = (n) => {
  // these two if statemenets here take care of the base case 0 and 1
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }
  // this other statement goes through if n is greater than 1. It starts off with the tempArray having 0 1 because for any nth fibonnaci number that will always be the first two
  // inside the for loop it goes from 2 to n and always mantains 2 numbers in the array. At the beginning it will always add those two numbers and store
  // it in a variable called counter. Then it will remove the current item in the zero index of temparray and push whatever number was sotred in counter.
  // it will continue doing that until it reaches n and then it will return the second item in the array.
  else if (n > 1) {
    let tempArray = [0, 1];
    for (numIndex = 2; numIndex <= n; numIndex++) {
      let counter = tempArray[0] + tempArray[1];
      tempArray.shift(tempArray[0]);
      tempArray.push(counter);
    }
    return tempArray[1];
  }
};
