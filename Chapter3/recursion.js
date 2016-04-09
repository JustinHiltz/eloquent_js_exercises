// Define a recursive function isEven corresponding to this description.
// The function should accept a number parameter and return a Boolean.
// Test it on 50 and 75. See how it behaves on -1.
// Why? Can you think of a way to fix this?

function isEven(num) {
  // using the absolute value of num rather than num to deal with negatives
  if (Math.abs(num) === 0) {
    return true;
  } else if (Math.abs(num) === 1) {
    return false;
  } else {
    return isEven(Math.abs(num) - 2);
  }
}

isEven(50);
isEven(75);
isEven(-1);
isEven(-24);
