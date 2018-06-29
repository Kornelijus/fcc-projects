// JavaScript Algorithms and Data Structures Projects: Palindrome Checker
// Project Description:
// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

const palindrome = str => {
  str = str.replace(/[\W_]/g, '').toLowerCase();
  let reversed = str
    .split('')
    .reverse()
    .join('');
  return str == reversed;
};

// Example:
// > palindrome("eye")
// true
