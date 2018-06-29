// JavaScript Algorithms and Data Structures Projects: Telephone Number Validator
// Project Description:
// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator

const telephoneCheck = str => {
  const regex = /^1? ?(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;
  return regex.test(str);
};

// Example:
// > telephoneCheck("1 555-555-5555")
// true
