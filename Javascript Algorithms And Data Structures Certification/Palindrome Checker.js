// JavaScript Algorithms and Data Structures Projects: Palindrome Checker
// Project Description:
// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

function palindrome(str) {
  str = str.replace(/[\W_]/g, '').toLowerCase();
  var reversed = str.split('').reverse().join('');
  console.log(str, reversed)
  return str == reversed;
}