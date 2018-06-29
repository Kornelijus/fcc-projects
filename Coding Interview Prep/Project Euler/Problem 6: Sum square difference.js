// Problem 6: Sum square difference
// Problem Description:
// https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-6-sum-square-difference

const sumSquareDifference = number => {
  let sumOfSquared = 0;
  let sumSquared = 0;

  for (let i = 0; i <= number; i++) {
    sumOfSquared += i * i;
    sumSquared += i;
  }

  sumSquared *= sumSquared;

  return sumSquared - sumOfSquared;
};

// Example:
// > sumSquareDifference(100)
// 25164150
