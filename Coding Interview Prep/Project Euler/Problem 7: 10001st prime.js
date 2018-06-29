// Problem 7: 10001st prime
// Problem Description:
// https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-7-10001st-prime

const nthPrime = n => {
  let found;
  for (let i = 2, count = 0; !found; i++) {
    let prime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        prime = false;
        break;
      }
    }
    if (prime) count++;
    if (count === n) found = i;
  }
  return found;
};

// Example:
// > nthPrime(10001)
// 104743
