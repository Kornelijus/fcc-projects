// Problem 7: 10001st prime
// Problem Description:
// https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-7-10001st-prime

const isPrime = n => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const nthPrime = n => {
  let found;

  for (let i = 2, count = 0; !found; i++) {
    if (isPrime(i)) count++;
    if (count === n) found = i;
  }

  return found;
};

// Example:
// > nthPrime(10001)
// 104743
