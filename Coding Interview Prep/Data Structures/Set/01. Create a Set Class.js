// Data Structures: Create a Set Class
// Challenge Description:
// https://learn.freecodecamp.org/coding-interview-prep/data-structures/create-a-set-class

function Set() {
  let collection = [];

  this.has = element => {
    return collection.indexOf(element) !== -1;
  };

  this.values = () => {
    return collection;
  };

  this.add = element => {
    if (this.has(element)) return false;
    collection.push(element);
    return true;
  };
}
