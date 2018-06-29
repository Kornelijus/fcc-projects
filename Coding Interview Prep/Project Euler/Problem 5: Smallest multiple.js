// Problem 5: Smallest multiple
// Problem Description:
// https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-2-even-fibonacci-numbers/

const isDivisible = (n, upTo) => {
  for (let i = 1; i <= upTo; i++) {
    if (n % i !== 0) return false;
  }
  return true;
};

const smallestMult = n => {
  let found;

  for (let i = 1; !found; i++) {
    if (isDivisible(i, n)) found = i;
  }

  return found;
};

// Example:
// > smallestMult(20)
//  232792560
