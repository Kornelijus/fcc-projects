// Data Structures: Use Spread and Notes for ES5 Set() Integration
// Challenge Description:
// https://learn.freecodecamp.org/coding-interview-prep/data-structures/use-spread-and-notes-for-es5-set-integration

const checkSet = set => {
  return [...new Set(set)];
};
