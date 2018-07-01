// Data Structures: Use .has and .size on an ES6 Set
// Challenge Description:
// https://learn.freecodecamp.org/coding-interview-prep/data-structures/use--has-and--size-on-an-es6-set

const checkSet = (arrToBeSet, checkValue) => {
  let set = new Set(arrToBeSet);

  return [set.has(checkValue), set.size];
};
