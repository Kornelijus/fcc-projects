// Data Structures: Create a Stack Class
// Challenge Description:
// https://learn.freecodecamp.org/coding-interview-prep/data-structures/create-a-stack-class

function Stack() {
  let collection = [];

  this.print = () => {
    console.log(collection);
  };

  this.push = element => {
    collection[collection.length] = element;
    return collection;
  };

  this.pop = () => {
    let popped = collection[collection.length - 1];
    delete collection[collection.length - 1];
    return popped;
  };

  this.peek = () => collection[0];

  this.isEmpty = () => collection.length === 0;

  this.clear = () => (collection.length = 0);
}
