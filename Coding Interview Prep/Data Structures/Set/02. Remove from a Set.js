// Data Structures: Remove from a Set
// Challenge Description:
// https://learn.freecodecamp.org/coding-interview-prep/data-structures/remove-from-a-set

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

  this.remove = element => {
    if (!this.has(element)) return false;
    collection.splice(collection.indexOf(element), 1);
    return true;
  };
}
