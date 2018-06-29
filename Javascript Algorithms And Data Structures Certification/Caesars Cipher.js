// JavaScript Algorithms and Data Structures Projects: Caesars Cipher
// Project Description:
// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher

const rot13 = str => {
  let arr = str.split('');
  let decoded = arr.reduce(function(a, v, i) {
    if (!/^[^\W_]$/.test(v)) {
      a.push(v);
    } else {
      let charCode = v.charCodeAt(0) - 13;
      charCode = charCode < 65 ? 91 - (65 - charCode) : charCode;
      let charDecoded = String.fromCharCode(charCode);
      a.push(charDecoded);
    }
    return a;
  }, []);

  return decoded.join('');
};

// Example:
// > rot13("SERR PBQR PNZC")
// "FREE CODE CAMP"
