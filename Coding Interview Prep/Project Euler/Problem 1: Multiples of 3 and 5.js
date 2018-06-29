// Problem 1: Multiples of 3 and 5
// Problem Description:
// https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-1-multiples-of-3-and-5/

const multiplesOf3and5 = number => {
  let result = 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      result += i;
    }
  }

  return result;
};

// Example:
// > multiplesOf3and5(19564)
// 89301183
