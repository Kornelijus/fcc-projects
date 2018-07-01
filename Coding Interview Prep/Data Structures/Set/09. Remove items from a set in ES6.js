// Data Structures: Remove items from a set in ES6
// Challenge Description:
// https://learn.freecodecamp.org/coding-interview-prep/data-structures/remove-items-from-a-set-in-es6

const checkSet = () => {
  let set = new Set([1, 2, 3, 4, 5]);

  set.delete(2);
  set.delete(5);

  return set;
};
