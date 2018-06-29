// Problem 3: Largest prime factor
// Problem Description:
// https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-3-largest-prime-factor/

const isPrime = n => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const largestPrimeFactor = number => {
  let factors = [];

  for (let i = 0; i <= number; i++) {
    if (number % i === 0 && isPrime(i)) factors.push(i);
  }

  return Math.max(...factors);
};

// Example:
// > largestPrimeFactor(13195)
// 29
