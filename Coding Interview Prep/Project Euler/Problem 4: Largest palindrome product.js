// Problem 4: Largest palindrome product
// Problem Description:
// https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-4-largest-palindrome-product/

const isPalindrome = str => {
  let strReversed = str
    .split('')
    .reverse()
    .join('');
  return str === strReversed;
};

const largestPalindromeProduct = digit => {
  let max = Math.pow(10, digit);
  let palindromes = [];

  for (let i = 1, n; i < max; i++) {
    for (let j = 1; j < max; j++) {
      n = i * j;
      if (isPalindrome(n.toString())) palindromes.push(n);
    }
  }

  return Math.max(...palindromes);
};

// Example:
// > largestPalindromeProduct(3)
// 906609
