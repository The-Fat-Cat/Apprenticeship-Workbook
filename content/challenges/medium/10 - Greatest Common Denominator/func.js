// Write a function that returns the greatest common divisor (GCD) of two integers.
// Notes:
//   - Both values will be positive.
//   - The GCD is the largest factor that divides both numbers.
module.exports = (int1, int2) => {
  // this for loop is going to check for all the factors of each number all the way until it reaches the smallest of the two
  for (let i = 1; i <= int1 && i <= int2; i++) {
    // here the if statement is asking if the integers when divided by the current i equals a remainder of zero
    //(which would mean it has reached the greatest common factor) and if it has then continue until that is no longer true.
    // Once the loop has reached the greatest number the modulo gives zero for it will return it
    if (int1 % i == 0 && int2 % i == 0) {
      GCD = i;
    }
  }
  return GCD;
};
