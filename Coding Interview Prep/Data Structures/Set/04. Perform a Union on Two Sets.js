// Data Structures: Perform a Union on Two Sets
// Challenge Description:
// https://learn.freecodecamp.org/coding-interview-prep/data-structures/perform-a-union-on-two-sets

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

  this.size = () => {
    return collection.length;
  };

  this.union = setOther => {
    let set = new Set();
    let mergedSets = [...this.values(), ...setOther.values()];

    mergedSets.map(i => {
      set.add(i);
    });

    return set;
  };
}
