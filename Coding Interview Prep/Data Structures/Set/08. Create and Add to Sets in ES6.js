// Data Structures: Create and Add to Sets in ES6
// Challenge Description:
// https://learn.freecodecamp.org/coding-interview-prep/data-structures/create-and-add-to-sets-in-es6

const checkSet = () => {
  let set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);

  set.add(['Taco', 'Cat', 'Awesome']);

  console.log(set);
  return set;
};
