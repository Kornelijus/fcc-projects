// Problem 2: Even Fibonacci Numbers
// Problem Description:
// https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-2-even-fibonacci-numbers/

function fiboEvenSum(number) {
  let f = [1, 2];

  for (let i = 2; i <= number; i++) {
    f.push(f[i - 1] + f[i - 2]);
  }

  return f.reduce((a, i) => {
    return a + (i % 2 === 0 ? i : 0);
  }, 0);
}

// Example:
// > fiboEvenSum(43)
// 1485607536
